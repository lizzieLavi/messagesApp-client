import { Avatar} from '@material-ui/core';
import axios from 'axios';
import React from 'react'
import { useConversations } from '../contexts/conversationsprovider';
import { useUser } from '../contexts/userprovider';
import '../css/conversations.css'

export default function Conversations() {
    const {setSelectedConversation,selectedConversation,conversations} =useConversations()
    const {info} =useUser()
  
async function handleSelectedConversation(conversation) 
{
    setSelectedConversation(conversation)
}
  return (
          <div className='Chats' >
              <div className='contacts_list'>
              {conversations.map((conversation,index)=>
              {
                 return  ( <div key={index}  onClick={()=>handleSelectedConversation(conversation)}  className='ChatsListItem'>
                     <Avatar src={process.env.PUBLIC_URL + conversation.ConversationImage}/>
                     <div className='chatInfo'>
                     <span   className='chatName' ><h2>{conversation.Name}</h2> </span>
                     <span> {(conversation.LastMessage.message).slice(0,25)}... </span>
                     </div>
            
                  </div>)
                    
                })}
                </div>

                </div>
          

  )
}