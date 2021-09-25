import React from 'react'
import '../css/audiomessage.css'
import { Avatar } from '@material-ui/core'

function AudioMessage({message,sender,image})
{
    const messageColor = sender.includes('chat_reciever')?  'reciever':'sender' 

    return (
    
        <div className={sender}>  
       <div className='message_with_audio'>
           <div className='audio_and_time'> 
               <div className={messageColor}>
                   <audio   controls controlsList="nodownload" >
                     <source src={message.recordURL} type="audio/mp3"/>
                   </audio>
               </div>
               <span className='message_time'>{(message.timeSent).substring(11,17)}</span> 
           </div>
           <Avatar src={image} style={{ height: '50px', width: '50px' }}/>
        </div>
        </div>
    )
}

export default AudioMessage
