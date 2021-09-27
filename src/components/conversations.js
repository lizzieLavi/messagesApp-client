import React from 'react'
import {Avatar} from '@material-ui/core';
import {useConversations} from '../contexts/conversationsprovider';
import '../css/conversations.css'

export default function Conversations() 
{

  const {setSelectedConversation,conversations,setShowDetails} =useConversations()

  
  async function handleSelectedConversation(conversation) 
  {
    setShowDetails(false)
    setSelectedConversation(conversation)
  }


  return (
    <div className='Chats' >
      <div className='contacts_list'>
        {conversations.map((conversation,index)=>
        {
          return  (   
            <div key={index}  onClick={()=>handleSelectedConversation(conversation)}  className='ChatsListItem'>
              <Avatar src={process.env.PUBLIC_URL + conversation.ConversationImage}/>
              <div className='chatInfo'>
                <h2 className='user_name'>{conversation.Name}</h2>
                <span className='user_status'> {(conversation.LastMessage.message).slice(0,28)}... </span>
              </div>
            
            </div>
          )
                    
                })}
      </div>
    </div>
  )
}