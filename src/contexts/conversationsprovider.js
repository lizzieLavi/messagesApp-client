import React, { useContext, useCallback, useRef } from "react";
import { useState, useEffect } from "react";
import { useUser } from "./userprovider";
import { useSocket } from "./socketprovider";
import axios from "axios";


const ConversationsContext = React.createContext();

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ id, children }) {
  const {contacts, info} = useUser();
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState();
  const RefConversations = useRef(conversations);
  const currentConversationRef = useRef(selectedConversation);
  const [createGroupFlag, setCreateGroupFlag] = useState(false);
  const { socket, ConnectedUsers } = useSocket();
  const [typingFlag,setTypingFlag] =useState('')
  const [currentConversationIsConnected,setCurrentConversationIsConnected] = useState('')
  const config = { headers: { "x-access-token": sessionStorage["config"] } };

  const audio = new Audio('https://res.cloudinary.com/dsrgpqnyv/video/upload/v1630680168/juntos-607_qsfc7i.mp3');


  useEffect(()=>{

    async function fetchData() {

    if(socket.current ==null ) return;
    socket.current.on('user-typing',({user,conversationId})=>
    {

        if(selectedConversation)
        {
          if(selectedConversation._id === conversationId)
          {
             setTypingFlag(user.name)
          }
        }
    } )
  }
  fetchData();
  },[selectedConversation])

  useEffect( ()=>
  {
    async function fetchData() {
    if(selectedConversation)
    {
    if(!selectedConversation.isGroup)
     {
      if(ConnectedUsers.some(user=> user.userId ===selectedConversation.Participants[0].id))
      {
        setCurrentConversationIsConnected('')
      }
      else
      {
        let response = await axios.get("http://localhost:5000/api/logIn/"+ selectedConversation.Participants[0].id,config)
        setCurrentConversationIsConnected(response.data.LastSeen)
      }
     }
    }
  }
  fetchData();

  },[ConnectedUsers,selectedConversation])

  useEffect(() =>
  {
    async function fetchData() {
     getConversations().then(res=> setConversations(res))
    }
    fetchData();
    
  }, []);

  async function getConversations()
  {
    try{
       let response = await axios.get("http://localhost:5000/api/conversations/UserConversations/" +sessionStorage["id"],config);

       let ConversationsList = response.data.map((conversation) =>
       {
         let UpdatedConversation= conversation

         if (conversation.Participants.length === 1 && conversation.Name === sessionStorage["name"])
            UpdatedConversation = { ...UpdatedConversation,Name: conversation.Participants[0].name,ConversationImage:conversation.Participants[0].image}

         if(selectedConversation)
         {
           if(selectedConversation.id === UpdatedConversation.id)
              setSelectedConversation(UpdatedConversation)
         }
          
         return UpdatedConversation;
       })

      return ConversationsList 
    } catch (err) {console.log(err);}
  }




  async function getSearchConverastions(str)
  {

        getConversations().then(res=>
        {

         let SearchResult = res.filter(conversation=> 
            conversation.Name.includes(str) ===true
          )
    
          setConversations(SearchResult)
        })
  }
        


  async function createConversation(ids, name, image) {
    let ConversationImage = image;
    let isGroup = false;

    //no participants chosen
    if (ids.length === 0) {
      console.log("no participants choosen");
      return;
    }

    //check if conversation already exists
    let ConversationExists = null;
    if (ids.length === 1) {
      ConversationExists = conversations.find(
        (conversation) => conversation.Name === name
      );
    }

    if (ConversationExists) setSelectedConversation(ConversationExists);

    //create new conversation
    else {

      //get conversation participants
      const participants = ids.map((id) => {
        let addContactToConversation = contacts.filter(
          (contact) => id === contact.id
        );
        return addContactToConversation[0];
      });


      //add creator to participants
      participants.push({
        id: info.id,
        name: info.name,
        phone: info.phone,
        imageName: info.imageName,
        LastSeen: info.LastSeen
      });

      //if group
      if (ids.length > 1) {
        const data = new FormData()
        data.append('file',ConversationImage)
        data.append("upload_preset","whatsApp_clone")
        data.append("cloud_name","dsrgpqnyv")
        try{
        let response = await axios.post("https://api.cloudinary.com/v1_1/dsrgpqnyv/image/upload",data)
        ConversationImage = response.data.url;

        }catch(err){console.log(err)}
   
      
    
        isGroup = true;
      }

      let newConversation = {
        Name: name,
        creatorId: sessionStorage["id"],
        Participants: participants,
        Messages: [],
        LastMessage: { id: "", sender: "", message: "" },
        ConversationImage: ConversationImage,
        isGroup,
      };

      //updateDB
      try {
        let Response = await axios.post(
          "http://localhost:5000/api/conversations",
          newConversation,
          config
        );
        if (Response.data.status === "created") {
          console.log(Response.data.conversation);
          setSelectedConversation(Response.data.conversation);

          //show conversation only if messages sent
          if (Response.data.conversation.Messages.length > 0)
            setConversations((prevConversations) => {
              return [...prevConversations, Response.data.conversation];
            });
          // }
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

 

  const addMessageToConversation = useCallback(async ({ UpdatedConv }) =>
   {

      audio.play()

      let ConversationExists = false;
      let newListOfConversations = RefConversations.current.map((conversation) =>{
          if (conversation._id === UpdatedConv._id) {
            ConversationExists = true;
            let newConv = { ...conversation,
              Messages: UpdatedConv.Messages,
              LastMessage: UpdatedConv.LastMessage,};
            if (currentConversationRef.current) {
              if (currentConversationRef.current._id === UpdatedConv._id)
                setSelectedConversation(newConv);
            }

            return newConv;
          } else return conversation;
        }
      );


      if (!ConversationExists) {
        if (!UpdatedConv.isGroup)
         {
           let newConversation = { ...UpdatedConv,
            Name: UpdatedConv.Participants[0].name,
            ConversationImage: UpdatedConv.Participants[0].imageName,
          };
          setConversations((prevConversations) => [...prevConversations, newConversation ]);
        } else
          setConversations((prevConversations) => [...prevConversations,UpdatedConv]);
      } else setConversations(newListOfConversations);
    },[setConversations]);

  useEffect(() => {
    if (socket.current == null) return;
    
    RefConversations.current = conversations;
    currentConversationRef.current = selectedConversation;
    socket.current.on("receive-message", addMessageToConversation);

    return () =>
      socket.current.off("receive-message", addMessageToConversation);
  }, [conversations, selectedConversation]);


  const updateSenderConversation = (AddMessage) => {
    let ConversationExists = false;
    setSelectedConversation(AddMessage);

    let newListOfConcversations = conversations.map((conversation) => {
      if (conversation._id === AddMessage._id) {
        ConversationExists = true;
        return AddMessage;
      } else return conversation;
    });

    if (ConversationExists) {
      setConversations(newListOfConcversations);
    } else
      setConversations((prevConversations) => [
        ...prevConversations,
        AddMessage,
      ]);
  };


  function sendMessage(text,imageFlag,imageURL,recordURL) {


      let parts = new Intl.DateTimeFormat('en', {
      hc: 'h12',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      timeZone:'Asia/Jerusalem'})
    .formatToParts(new Date())
    .reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, Object.create(null));

    let time = `${parts.day}/${parts.month}/${parts.year}  ${parts.hour}:${parts.minute}`;

    let recordFlag= false

    if(recordURL!=null)
       recordFlag=true
    
    let CurrentMessage = { id: info.id, name: info.name, message: text  ,timeSent: time ,containsImage: imageFlag,containsRecord:recordFlag,recordURL:recordURL};
    if(imageFlag ===true)
       CurrentMessage= {...CurrentMessage,imageURL:imageURL}
    
    let sender = {
      id: info.id,
      phone: info.phone,
      name: info.name,
      image: info.imageName,
    };
    let AddMessage = {
      ...selectedConversation,
      Messages: [...selectedConversation.Messages, CurrentMessage],
      LastMessage: CurrentMessage,
    };
    socket.current.emit("send-message", {
      sender: sender,
      UpdatedConversation: AddMessage,
      conversationId: selectedConversation._id,
    });

    updateSenderConversation(AddMessage);
  }

  return (
    <ConversationsContext.Provider
      value={{
        createGroupFlag,
        setCreateGroupFlag,
        sendMessage,
        conversations,
        createConversation,
        setConversations,
        setSelectedConversation,
        selectedConversation,
        currentConversationIsConnected,
        typingFlag,
        setTypingFlag,
        getSearchConverastions,
      
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
}
