import React, { useState } from 'react'
import { useUser } from '../contexts/userprovider'
import { useConversations } from '../contexts/conversationsprovider'
import {Button,Avatar,IconButton} from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function CreateNewGroup( { closeModal }) {

    const [selectedContactsId, setSelectedContactsId] = useState([])
    const { contacts } = useUser()
    const { createConversation,setCreateGroupFlag } = useConversations()
    const [groupName,setGroupName] =useState('')
    const [groupImage,setGroupImage] =useState()
    const [previewImage,setPreviewImage]=useState()
    const [goToParticipants,setGoToParticipants] = useState(false)

    function createGroup()
    {
        setCreateGroupFlag(false)
        createConversation(selectedContactsId,groupName,groupImage)
        closeModal()
    }

    function handleCheckboxChange(contactId) 
    {
        if(selectedContactsId.includes(contactId))
        {
            setSelectedContactsId(prevSelectedContactsId =>
            {
                return (prevSelectedContactsId.filter(id=> id!==contactId))
            } )
        }
  
        else
        {
           setSelectedContactsId(prevSelectedContactsId=>
            {
              return [...prevSelectedContactsId,contactId]
            })
        }   
    }

    function handleFileUpload(e) {
        setGroupImage(e.target.files[0])
        setPreviewImage(window.URL.createObjectURL(e.target.files[0]))
      }


    return (
        <div className='add_new'>
        <div className='add_new_group_border'>
        <div className='new_conversation new_group'>

      {goToParticipants !==true ?
         <div className='top_new_group'>

          {previewImage?  

             <div className='change_group_image'> 
            <Avatar  src={previewImage} style={{height: '110px', width: '110px' ,backgroundColor:'gray' ,margin:'15px'}}> </Avatar>
            <div className='change_image_on_hover' style={{display:'flex',flexDirection:'column',alignItems:'center',position:'absolute',zIndex:'1',color:'white'}}>
            <PeopleAltIcon style={{position:'absolute',zIndex:'0', opacity:'0.1',height: '80px', width: '80px' }}/>
          
             <AddAPhotoIcon  style={{height: '30px', width: '30px' ,color:'white'}}/>
             <input accept="image/*" id="file" type="file" name="file" onChange={handleFileUpload}/>
            <span style={{fontSize:'10px'}}>Change Image </span>
         
            </div>
            </div>
           
            :
          <div className='add_group_image'>
          <Avatar   style={{height: '110px', width: '110px' ,backgroundColor:'gray' ,margin:'15px'}}>
           < PeopleAltIcon style={{position:'absolute',zIndex:'0', opacity:'0.1',height: '80px', width: '80px' }}/>
            <div  style={{display:'flex',flexDirection:'column',alignItems:'center',position:'absolute',zIndex:'1',color:'white'}}>
             <AddAPhotoIcon  style={{height: '30px', width: '30px' ,color:'white'}}/>
             <input accept="image/*" id="file" type="file" name="file" onChange={handleFileUpload}/>
            <span style={{fontSize:'10px'}}>add group image</span>
         
            </div>
            </Avatar>
            </div> }
          <div className='group_name'>
          <span style={{padding:'5px', margin:'5px' , fontSize:'13px', color:'#fcfcfc'}}> Group Name:</span>
          <input onChange={(e)=>setGroupName(e.target.value)}/>
          </div>
          <button style={{display:'flex',alignItems:'center',width:'180px',justifyContent:'center'}} className='add_new_button'  onClick={()=>setGoToParticipants(true)}><ArrowBackIcon style={{margin:'5px'}} /> Add Members</button>
          </div>
          :
          <div >
          <h3 className='add_contact_title'> choose Members :</h3>
          <div style={{overflowY:'overlay',height:'200px'}}>
          {contacts.map(contact =>
            {
            return(

                <div className='contactItem' >
                 <input
                type="checkbox"
                value={selectedContactsId.includes(contact.id)}
                id={contact.name}
                style={{marginRight:'10px'}}
                onChange={() => handleCheckboxChange(contact.id)}/>
                   <Avatar  src={process.env.PUBLIC_URL + contact.imageName}   fontSize='large'/>
                   <div className='contactInfo'> <h2 style={{fontWeight:'400'}}>{contact.name} </h2> </div>
                </div>
            )}) }  
            </div>
            <div style={{display:'flex' , justifyContent:'center'}}>
             <button className='add_new_button'  type="submit" onClick={()=>createGroup()}>Create</button>
             </div>

             </div>}

         

        


          

            
            
        </div>
        </div>
        </div>
    )
}

export default CreateNewGroup
