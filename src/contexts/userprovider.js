
import React, { useState ,useEffect, useContext} from 'react'
import axios from 'axios'
const UserContext = React.createContext()

export function useUser() {
  return useContext(UserContext)
}

export  function UserProvider({ children })
{
  const [contacts, setContacts] = useState([])
  const [info,setInfo] =useState({})
  const config= {'headers': {'x-access-token':sessionStorage['config']}}

  
   useEffect( () =>
   {
    async function fetchData() {

    getContacts().then(res=> setContacts(res))
    }

    fetchData();

   },[setInfo])

   async function getContacts()
   {
    const response = await axios.get("http://localhost:5000/api/logIn/"+sessionStorage['id'],config);
    setInfo({id:response.data._id,name:response.data.name,phone:response.data.phone,imageName:response.data.imageName,LastSeen:response.data.LastSeen})
    return(response.data.contacts)

   }
   

  function getSearchContacts(str)
  {
    getContacts().then(res=>
      {
        let SearchResult =res.filter(contact=> contact.name.includes(str) === true)
        setContacts(SearchResult)
      })
  }


  const createContact = async(phone) =>
  {

    if(phone === info.phone)
    {
      console.log('cant Add yourself')
       return;
    }

    let checkIfExists = contacts.filter(contact=> contact.phone === phone)

    if(checkIfExists.length !== 0)
    {
      console.log('already exists')
      return;
    }

    try{ 

      const response= await axios.get("http://localhost:5000/api/logIn/getByPhone/" + phone,config)

      if(response !== 'no such user')
      {
       const contact = {id:response.data._id,phone:response.data.phone,name:response.data.name,imageName:response.data.imageName}
       let newContacts = [...contacts,contact]
       setContacts(newContacts)
       let UpdatedUser={...info,contacts:newContacts}
       try{
         await axios.put("http://localhost:5000/api/logIn/" + sessionStorage['id'],UpdatedUser,{'headers': {'x-access-token':sessionStorage['config']}})
       } catch(err){console.log(err)}
      }
      else console.log('user dosent exist')
     
    } catch(err){console.log(err)}
  }



  return (
    <UserContext.Provider value={{setContacts,setInfo,info,config,contacts,createContact,getSearchContacts }}>
      {children}
    </UserContext.Provider>
  )
}