import React, { useRef } from 'react'
import { useState ,useCallback,useEffect} from 'react'
import { useConversations } from '../contexts/conversationsprovider';
import { useSocket} from '../contexts/socketprovider';
import { useUser} from '../contexts/userprovider';
import {IconButton } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import CloseIcon from '@material-ui/icons/Close';
import ImageIcon from '@material-ui/icons/Image';
import CheckIcon from '@material-ui/icons/Check';
import Picker from 'emoji-picker-react';
import { useReactMediaRecorder } from "react-media-recorder";
import axios from 'axios'
import Message from './message';
import AudioMessage from './audiomessage';




function ChatBody(props) {

    const [Text,setText] = useState('')
    const {socket} = useSocket()
    const {info} = useUser()
    const {sendMessage,selectedConversation} = useConversations()
    const inputRef = useRef(null)
  
    const [emojiFlag,setEmojiFlag] = useState(false)
    const [recordFlag,setRecordFlag] =useState(false)
    const {status,startRecording,stopRecording,mediaBlobUrl,clearBlobUrl} = useReactMediaRecorder({audio: true })
    const [audioBlob,setAudioBlob] = useState(null)


    const setRef = useCallback((node) => 
    {

      if(node)
         node.scrollIntoView({smooth:true})
    },[])


  useEffect( () => {
    async function fetchData() {
    if(audioBlob != null)
    {
      let audio= await fetch(mediaBlobUrl).then(res=> res.blob())
      const data = new FormData();
           
      data.append('file', audio);
      data.append('resource_type', 'video');
      data.append("upload_preset","whatsApp_clone")
      data.append("cloud_name","dsrgpqnyv")
      try{
        let response = await axios.post("https://api.cloudinary.com/v1_1/dsrgpqnyv/video/upload",data)
        let recordURL = response.data.url
        recordURL=(recordURL.slice(0,-4))
        recordURL+= 'mp3'
        setRecordFlag(false)
        clearBlobUrl()
        sendMessage(Text,null,null,recordURL)
        setRecordFlag(false)
  
      }catch(err){console.log(err)}
    }
    }

    fetchData();
 
  }, [audioBlob])



    function typing(e)
    {
        setText(e.target.value)
        if (socket.current == null) return;
        socket.current.emit("typing", {user:info,Conversation:selectedConversation})
    }

    function handleSubmit(e)
    {
      e.preventDefault()
      sendMessage(Text,false,null,null)

      setText(' ')
    }

    async function handleImage(e)
    {
      const data = new FormData()
      data.append('file',e.target.files[0])
      data.append("upload_preset","whatsApp_clone")
      data.append("cloud_name","dsrgpqnyv")
      try{
      let response = await axios.post("https://api.cloudinary.com/v1_1/dsrgpqnyv/image/upload",data)

      props.imageCallback(response.data.url)
      }catch(err){console.log(err)}
    }

   function recordStart()
   {
    setRecordFlag(true)
    startRecording()
   }
 
    async function handleRecord()
    {
         stopRecording()
         let res = await fetch(mediaBlobUrl)
         setAudioBlob(res.blob())            
    }

  function cancelRecord()
  {
    stopRecording()
    clearBlobUrl()
    setRecordFlag(false)
  }

    function updateRecordingDiv()
    {
      let recordDiv = <div>
      <IconButton>
        <CloseIcon fontSize='large' style={{color:'red'}} onClick={cancelRecord} />
      </IconButton>
      <IconButton>
         <CheckIcon fontSize='large'style={{color:'green'}} onClick={handleRecord} />
      </IconButton>
      </div>

      return recordDiv
  
    }
    

    const onEmojiClick = (event, emojiObject) => {
        setText(Text + emojiObject.emoji)
      };



    return(

      <div className= 'body_and_footer'>
        <div className='chat_body'>
        {selectedConversation.Messages.map((message,index)=>
         {
            const lastMessage = selectedConversation.Messages.length -1 === index
            let sender = message.id===sessionStorage['id']? 'chat_message' : ' chat_message chat_reciever'
            let image=message.id===sessionStorage['id']? info.imageName :selectedConversation.ConversationImage

            return (
                <div key={index} className={sender} ref={lastMessage ? setRef : null}>
                    {message.containsRecord ? 
                    <AudioMessage message={message} sender={sender} image={image}/> : <Message message={message}/> }

                </div> 
          )}
        )}

      </div>

      <div className='chat_footer_with_stickers'>
         {emojiFlag?  <Picker onEmojiClick={(e,emojiObject)=>onEmojiClick(e,emojiObject)} pickerStyle={{ width: '100%' }}/>: ''}
         <div className='chat_footer'>
           {emojiFlag? <IconButton  onClick={()=>setEmojiFlag(false)}><CloseIcon fontSize='large'/> </IconButton>:''}
           <IconButton  onClick={()=>setEmojiFlag(true)}>
             <InsertEmoticonIcon fontSize='large'/>
           </IconButton>
           <input accept="image/*" className='invisibleInput' id="icon-button-file" type="file"  style={{ visibility: 'hidden'}} onChange={handleImage}/>
           <label htmlFor="icon-button-file">
             <IconButton component="span">
               <ImageIcon  fontSize='large'/>
             </IconButton>
           </label> 

           <form onSubmit={handleSubmit} className='message_section'>
             <input className='message_input' ref={inputRef}  value={Text} onChange={typing} type='text' placeholder='type a message'/>
             <button type='submit' > send </button>
           </form>
           {recordFlag? updateRecordingDiv() :   
           <IconButton onClick={recordStart}>
             <MicIcon fontSize='large'  />
           </IconButton>}
         </div>

      </div>

    </div>

    
)}

export default ChatBody
