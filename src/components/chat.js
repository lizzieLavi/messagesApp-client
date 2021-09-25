import '../css/chat.css'
import '../css/sidebar.css'
import React from 'react'
import { useState,useEffect} from 'react'
import { useConversations } from '../contexts/conversationsprovider';
import { useUser } from '../contexts/userprovider';
import { Avatar ,IconButton,makeStyles,Modal} from '@material-ui/core'
import ChatBody from './chatbody';
import SendImageBody from './sendimagebody';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Picker from 'emoji-picker-react';
import PersonAdd from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddGroupMember from './addgroupmember';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
});


export default function Chat() {

    const {selectedConversation,currentConversationIsConnected,typingFlag,
      setTypingFlag,showDetails,setShowDetails,UpdateConversation} = useConversations()
    const [imageFlag,setImageFlag] =useState(false)
    const [imageURL,setImageURL] =useState(false)
    const [EditGroupNameGlag,setEditGroupNameGlag]=useState(false)
    const [EditGroupDescriptionGlag,setEditGroupDescriptionGlag]=useState(false)
    const [emojiFlag,setEmojiFlag]=useState(false)
    const [Text,setText] = useState(selectedConversation.Name)
    const [Description,setDescription] = useState(selectedConversation.description)
    const {info} = useUser()
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)




    useEffect(()=>{
      setEditGroupNameGlag(false)
      setEditGroupDescriptionGlag(false)
      setEmojiFlag(false)

    },[selectedConversation])


    const onEmojiClick = (event, emojiObject) => {
      setText(Text + emojiObject.emoji)
    };

    const onDescriptionEmojiClick = (event, emojiObject) => {
      setDescription(Description + emojiObject.emoji)
    };

    

    const groupheader = () =>
    {
      let returnValue = ''
      if(typingFlag !== '')
      {
        returnValue = <div className='lastSeen'> {typingFlag} is typing...</div>
        setTimeout(()=> setTypingFlag(''),1000)
      }

      else
      {
        let UsersInGroup = ''
        selectedConversation.Participants.forEach((participant,index)=> 
        {
            if(index ===  selectedConversation.Participants.length-1 )
                UsersInGroup = UsersInGroup + participant.name
            else
                UsersInGroup= UsersInGroup + participant.name + ', '
        })
            
        returnValue=  <div className='lastSeen'>{UsersInGroup} </div>

      }

      return returnValue
    }

    function chatBodyCallback(image)
    {
      setImageURL(image)
      setImageFlag(true)
    }

    function backToChatCallback()
    {
      setImageURL(null)
      setImageFlag(false)
    }

    const privateConversationHeader = () =>
    {
       let returnValue = ''
       if(currentConversationIsConnected === '')
       {
        if(typingFlag !== '')
        {
            returnValue = <div className='lastSeen'> typing...</div>
            setTimeout(()=> setTypingFlag(''),1000)

        }

        else returnValue = <div className='connected'><div className='circle'></div> online </div>
            
       }
       else returnValue = <div className='lastSeen'>{currentConversationIsConnected}</div>


      return returnValue

    }

    function changeGroupName()
    {
      let message={name:"manager",message: sessionStorage['name'] +" changed group name to " + Text,timeSent:'',containsImage:false,containsRecord:false,recordURL:null}
      let messages=selectedConversation.Messages
      messages.push(message)
      let updatedConversation={...selectedConversation,Name:Text,Messages:messages,LastMasage:message}
      UpdateConversation(updatedConversation)
      setEditGroupNameGlag(false)

    }

    function changeGroupDescription()
    {
      let message={name:"manager",message: sessionStorage['name'] +" changed group Description",timeSent:'',containsImage:false,containsRecord:false,recordURL:null}
      let messages=selectedConversation.Messages
      messages.push(message)
      let updatedConversation={...selectedConversation,description:Description,Messages:messages,LastMessage:message}
      UpdateConversation(updatedConversation)
      setEditGroupDescriptionGlag(false)

    }

  function removeFromGroup()
  {
    let message={name:"manager",message: sessionStorage['name'] +" left the group",timeSent:'',containsImage:false,containsRecord:false,recordURL:null}
    let messages=selectedConversation.Messages
    messages.push(message)
    let updatedConversation={...selectedConversation,Messages:messages,LastMessage:message}
    UpdateConversation(updatedConversation)
    setDialogOpen(false)
  }

    function closeModal() {
      setModalOpen(false)
    }

    const chatSide=
    <div>
       <div className='chat_header' onClick={()=>setShowDetails(true)}>
         <Avatar src={selectedConversation.ConversationImage}/>
         <div className='chat_header_info'>
            <h2> {selectedConversation.Name} </h2> 
            {selectedConversation.isGroup?  groupheader() : privateConversationHeader()}

         </div>
       </div>

       {imageFlag?   <SendImageBody imageURL={imageURL} backToChat={backToChatCallback}/>:<ChatBody imageCallback={chatBodyCallback}/>} 
   </div>

    return (
       
          showDetails?
           <div className='chat_with_details'>
            <div className='chat narrow_chat'>
            {chatSide}
            </div>

            <div className='chat_details'>
            <div className='chat_details_top'>
              <IconButton onClick={()=>setShowDetails(false)}>
                 <CloseIcon fontSize='large'  />
              </IconButton>
              <h2 style={{paddingLeft:'10px'}}>{selectedConversation.isGroup? 'Group Details:' : 'Contact Details:' }</h2>
            </div>


            <span className='chat_details_body'>

            <div className='user_info'>
              <Avatar src={selectedConversation.ConversationImage} style={{margin:'20px',height:'140px',width:'140px'}}/>
           
              <span className='name_and_lastSeen'>
                {selectedConversation.isGroup && EditGroupNameGlag?
                   <div style={{display:'flex',flexDirection:'column'}}>
                      {emojiFlag?  <Picker onEmojiClick={(e,emojiObject)=>onEmojiClick(e,emojiObject)} pickerStyle={{ width: '100%' ,height:'200px'}}/> : ''}
                     <div className='edit_group_name'>
                
                     <IconButton className={classes.root} style={{padding:'3px'}} onClick={()=>changeGroupName()}><CheckIcon fontSize='large'/></IconButton>
                     <IconButton className={classes.root} style={{padding:'3px'}} onClick={()=>setEmojiFlag(!emojiFlag)}><InsertEmoticonIcon fontSize='large'/></IconButton>
                    
                     <input defaultValue={Text} onChange={(e)=>setText(e.target.value)} style={{border:'none',outline:'none',width:'100%',backgroundColor:'transparent',padding:'5px'}}></input>
                  </div>
                  </div>:
                <span className='group_title'>
                   <h3>{selectedConversation.Name}</h3>
                   {!selectedConversation.isGroup? '':<IconButton onClick={()=>setEditGroupNameGlag(true)}><EditIcon style={{fontSize:'large',marginLeft:'10px'}}/></IconButton>}
                </span>
           }
                
                 <span className='lastSeen' style={{padding:'10px',paddingLeft:'0px'}}> {!selectedConversation.isGroup? privateConversationHeader() :<span> created at:  {selectedConversation.createdDate} </span>}</span>
              </span>
             
            </div>

            

            {selectedConversation.isGroup ?
             <div>
            <div className='group_details_container'>
               <h2 className='group_title' style={{padding:'5px'}}> Description </h2>
              {EditGroupDescriptionGlag?
                
                 <div style={{display:'flex',flexDirection:'column'}}>
                 {emojiFlag?  <Picker onEmojiClick={(e,emojiObject)=>onDescriptionEmojiClick(e,emojiObject)} pickerStyle={{ width: '100%' ,height:'200px'}}/> : ''}
                <div className='edit_group_name' style={{padding:'5px'}}>
            
                <IconButton className={classes.root} style={{padding:'3px'}} onClick={()=>changeGroupDescription()}><CheckIcon fontSize='large'/></IconButton>
                <IconButton className={classes.root} style={{padding:'3px'}} onClick={()=>setEmojiFlag(!emojiFlag)}><InsertEmoticonIcon fontSize='large'/></IconButton>
               
                <input defaultValue={Description} onChange={(e)=>setDescription(e.target.value)} style={{border:'none',outline:'none',width:'100%',backgroundColor:'transparent',padding:'5px'}}></input>
                </div>
                </div>:
              <div className='group_description_edit'>
                
                <span style={{fontSize:'15px',marginRight:'5px'}}>{selectedConversation.description}</span><IconButton onClick={()=>setEditGroupDescriptionGlag(true)}><EditIcon style={{fontSize:'large'}}/></IconButton>
                </div>}
             
            </div>
            
            <div className='group_details_container'>
            <h2 className='group_title' style={{ padding:'10px' ,borderBottom:'1px solid #B0B0B0'}}>{selectedConversation.Participants.length +1} participants</h2>
            <Modal className='Modal' open={modalOpen} onClose={closeModal} >
               <AddGroupMember closeModal={closeModal}  /> 
            </Modal>

            {selectedConversation.creatorId===sessionStorage['id']?
            <div className='participant' style={{cursor:'pointer',fontSize:'15px'}} onClick={()=>setModalOpen(true)} >

              <Avatar>
              <IconButton className={classes.root} style={{padding:'3px'}}><PersonAdd fontSize='large'/></IconButton>
              </Avatar>
              <h3 className='group_participant_name'>Add Member</h3>
            </div>:''}
            {selectedConversation.Participants.map((participant,index)=>
            {
              return(
                 <div key={index} className='participant'>
                   <div style={{display:'flex',flexGrow:'1',flexDirection:'row',alignItems:'center'}}>
                 
                   <Avatar src={participant.imageName}/>
                   <div style={{display:'flex',flexGrow:'1',flexDirection:'row',alignItems:'center'}}>
                   <h3 className='group_participant_name'>{participant.name}</h3>
                   
                   {participant.id===selectedConversation.creatorId?
                    <div className='group_admin'>
                      <h3 style={{fontSize:'13px'}}>Group Manager</h3>
                   </div>:''}
                   </div >
                   </div>
                 </div>)
            })}

                 <div  className='participant'>
                   <div style={{display:'flex',flexGrow:'1',flexDirection:'row',alignItems:'center'}}>
                 
                   <Avatar src={info.imageName}/>
                   <div style={{display:'flex',flexGrow:'1',flexDirection:'row',alignItems:'center'}}>
                   <h3 className='group_participant_name'>{info.name}</h3>
                   
                   {sessionStorage['id']===selectedConversation.creatorId?
                    <div className='group_admin'>
                      <h3 style={{fontSize:'13px'}}>Group Manager</h3>
                   </div>:''}
                   </div >
                   </div>
                 </div>
                </div>

                <div className='group_details_container leave' onClick={()=>setDialogOpen(true)} >
                  <div className='leaveGroup'>
                     <IconButton className={classes.root} style={{padding:'3px'}} >
                       <ExitToAppIcon style={{color:'darkred'}}fontSize='large'/>
                     </IconButton>
                     <h3 className='group_participant_name' style={{color:'darkRed',fontSize:'17px'}}>leave Group</h3>
                  </div>
                </div>
           
            </div>:''}

        
           
            </span>
            </div>
             <Dialog className='exit_group_dialog' onClose={()=> setDialogOpen(false)}  open={dialogOpen}>
               <div style={{padding:'10px'}}>
                 <h2 className='dialog_title'> are you sure you want to leave this group?</h2>
                 <div className='dialog_options_buttons'>
                   <button className='dialog_button' onClick={()=>removeFromGroup()} >yes</button>
                   <button className='dialog_button' onClick={()=>setDialogOpen(false)}>no</button>
                 </div>
                </div>
            </Dialog>
            </div>:
          <div className='chat'>
              {chatSide}
          </div>

          
    )
}
