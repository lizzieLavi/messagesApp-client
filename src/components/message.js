import {useState} from 'react'
import Dialog from '@material-ui/core/Dialog';

function Message({message}) 
{
  const [modalOpen, setModalOpen] = useState(false)
  const [SelectedImageURL,setSelectedImageURL] =useState(null)

  function openImage(URL)
  {
    setModalOpen(true)
    setSelectedImageURL(URL)  
  }

  return (

    <div>      
      <span className='sender_name'>{message.name}</span>
      {message.containsImage? 
      <img className='image_in_message' src={message.imageURL} alt='' onClick={()=>openImage(message.imageURL)} width='200px' height='200px' /> 
      : ''}
      <p className='message_time_and_content'><span className='message_content'>{message.message}</span> 
      <span className='message_time'>{(message.timeSent).substring(11,17)}</span> </p>

      <Dialog onClose={()=> setModalOpen(false)}  open={modalOpen}>
        <img src={SelectedImageURL} alt=''  height='500px' width='500px'/>
      </Dialog>
    </div>
    
  )}

export default Message

