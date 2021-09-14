import { useRef } from 'react'
import '../css/addnew.css'
import { useUser } from '../contexts/userprovider';
import {IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';


export default function AddNewContact({closeModal}) {

   const phoneRef = useRef()
   const {createContact} = useUser()
   

  async function handleSubmit()
  {
    createContact(phoneRef.current.value)

    closeModal();
  }

  return (
   
   <div className='add_new'>
            <div className='add_new_contact_border'>
              <div className='add_contact_model'>
                <div className='title_and_close'>
                  <h2 className='add_contact_title'>Enter contact phone</h2> 
                  <IconButton className='close_add_new'  onClick={()=>closeModal()}>
                    <CloseIcon fontSize='large' /> 
                  </IconButton>
               </div>
        
              <div className='add_new_contact'>
               
                <h3 className='enter_phone'>Phone :</h3>
                <input className='add_new_input' type='text' ref={phoneRef} required/>
                <button className='add_new_button' onClick={handleSubmit}> Add Contact</button>
              </div>
                
              </div>

            </div>
          
               
 
        </div>

  )
}