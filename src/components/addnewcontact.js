import { useRef,useState } from 'react'
import '../css/addnew.css'
import { useUser } from '../contexts/userprovider';
import {IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';


export default function AddNewContact({closeModal}) {

   const phoneRef = useRef()
   const {createContact} = useUser()
   const [error,setError]=useState('')
   

  async function handleSubmit()
  {
    let responseStatus = await createContact(phoneRef.current.value)

    console.log(responseStatus)

    if(responseStatus.status === 'ok')
    {
       closeModal();
       setError('')
    }
    
    else
    {
      setError(responseStatus.message)
    }

   
  }

  return (
   
   <div className='add_new'>
            <div className='add_new_contact_border'>
              <div className='add_contact_model'>
                <div className='title_and_close'>
                  <h2 className='add_contact_title'>Add New Contact</h2> 
                  <IconButton className='close_add_new'  onClick={()=>closeModal()}>
                    <CloseIcon fontSize='large' /> 
                  </IconButton>
               </div>
        
              <div className='add_new_contact'>
               
                <h3 className='enter_phone'>Phone :</h3>
                <input className='add_new_input' type='text' ref={phoneRef} required/>
                <button className='add_new_button' onClick={handleSubmit}> Add Contact</button>
              </div>
                <span className='show_error'>{error}</span>
              </div>

            </div>
          
               
 
        </div>

  )
}