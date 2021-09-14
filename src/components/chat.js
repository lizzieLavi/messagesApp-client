import '../css/chat.css'
import React from 'react'
import { useState} from 'react'
import { useConversations } from '../contexts/conversationsprovider';
import { Avatar } from '@material-ui/core'
import ChatBody from './chatbody';
import SendImageBody from './sendimagebody';

export default function Chat() {

    const {selectedConversation,currentConversationIsConnected,typingFlag,setTypingFlag} = useConversations()
    const [imageFlag,setImageFlag] =useState(false)
    const [imageURL,setImageURL] =useState(false)

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

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={selectedConversation.ConversationImage}/>
                <div className='chat_header_info'>
                   <h2> {selectedConversation.Name} </h2> 
                   {selectedConversation.isGroup?  groupheader() : privateConversationHeader()}
               </div>
            </div>

            {imageFlag?   <SendImageBody imageURL={imageURL} backToChat={backToChatCallback}/>:<ChatBody imageCallback={chatBodyCallback}/>}  

        </div>
    )
}
