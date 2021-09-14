import {useState} from 'react'
import '../css/login.css'
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'

 

function Register(props) {
   
    const[phone,setPhone] =useState('')
    const[name,setName] =useState('')
    const [Picture,setPicture] =useState()
    const history=useHistory();


    /*get user information and token from DB*/
    async function handleSubmit(e)
    {

        e.preventDefault();

        let picturePath=''
        const data = new FormData()
        data.append('file',Picture)
        data.append("upload_preset","whatsApp_clone")
        data.append("cloud_name","dsrgpqnyv")
        try{
        let response = await axios.post("https://api.cloudinary.com/v1_1/dsrgpqnyv/image/upload",data)
        picturePath =response.data.url
        }catch(err){console.log(err)}



        
        
        let obj = {name: name,phone: phone,imageName:picturePath,contacts:[],LastSeen:'last seen at...'}


       try{
            const response = await axios.post("https://messagesapp1.herokuapp.com/api/logIn/Register",obj)
   
            sessionStorage['config']= response.data.token 
            sessionStorage['id'] = response.data.User._id
            sessionStorage['name'] = response.data.User.name
            props.CanLogIn(response.data.User._id)

            history.push('/App')
        }
       catch(err){console.log(err)}

          
    }
        

    function handleFileUpload(e) {
        setPicture(e.target.files[0])
      }

    return (

        <div className="overlay">
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"></link>
     <form className='login_form' onSubmit={handleSubmit}>
       <div className="con">
         <header className="head-form">
           <h2>Register</h2>
           <p>welcome to  my whatsApp</p>
         </header>
       <div className="field-set">
         <span className="input-item">
           <i class="fa fa-user-circle"></i>
         
         <input className="form-input" id="txt-input" type="text" placeholder="@UserName" onChange={(e)=> setName(e.target.value)} required />

         </span>
         <span className="input-item">
         <i class="fa fa-key"></i>
       
         <input className="form-input" type="password" placeholder="Password" id="pwd"  name="password" onChange={(e)=> setPhone(e.target.value)} required/>
         </span>
        
           
         <div id="fileupload" >
        <div className="myfileupload-buttonbar ">
            <label className="myui-button">
            <i class="fa fa-upload" aria-hidden="true"></i>
                <span className='text' >Add Picture</span>
                <input id="file" type="file" name="file" onChange={handleFileUpload}/>
            </label>
        </div>
    </div>
   
         <button className="log-in" type='submit'> Register </button>
        </div>

        <div>

       <button className="btn submits sign-up"><Link className='defaultLink' to={`/`}>back to Log In</Link>
       <i class="fa fa-user-plus" aria-hidden="true"></i>
       </button>
       </div>
     </div>

</form>
</div>
  
    )

    /*      <div className="LogInPage">
             <form onSubmit={handleSubmit} className='logInBorder'>
             enter your phone:  
              <input type='text' onChange={(e)=> setPhone(e.target.value)}/> 
              enter your name: 
              <input type='text' onChange={(e)=> setName(e.target.value)}/>  
              
              <input type="file" onChange={handleFileUpload} />
                <button type='submit'> Sign Up</button>
            </form>     
        </div>*/

}


export default Register
