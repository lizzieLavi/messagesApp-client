import React,{useState} from 'react'
import '../css/login.css'
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'




export default function LogIn(props) {

    const [phone,setPhone] = useState('');
    const [UserName,setUserName] = useState('');

    const [Error,setError] = useState('')
    const history=useHistory();



    /*get user information and token from DB*/
    async function handleSubmit(e)
    {
        setError('')
        e.preventDefault()
        let obj = {name: UserName,phone: phone}
        let response = await axios.post("http://localhost:5000/api/logIn",obj)

        if(response.data !== "not found")
        {
           sessionStorage['config']= response.data.token 
           sessionStorage['id'] = response.data.User._id
           sessionStorage['name'] = response.data.User.name
           props.CanLogIn(response.data.User._id)

           history.push('/App')
        }
        
        else
           setError("One or more of your identification details is incorrect.")
    }

 

    return (
       
        <div class="overlay">
             <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"></link>
          <form className='login_form' onSubmit={handleSubmit}>
            <div class="con">
              <header class="head-form">
                <h2>Log In</h2>
                <p>welcome to  my whatsApp</p>
              </header>
            <div class="field-set">
              <span class="input-item">
                <i class="fa fa-user-circle"></i>
              
              <input class="form-input" id="txt-input" type="text" placeholder="@UserName" onChange={(e)=> setUserName(e.target.value)} required />

              </span>
              <span class="input-item">
              <i class="fa fa-key"></i>
            
              <input class="form-input" type="password" placeholder="Password" id="pwd"  name="password" onChange={(e)=> setPhone(e.target.value)} required/>
              </span>
              <button className="log-in" type='submit'> Log In </button>
             </div>

             <div>
  
            <button className="btn submits sign-up"><Link className='defaultLink' to={`/Register`}>Sign Up</Link>
            <i class="fa fa-user-plus" aria-hidden="true"></i>
            </button>
            </div>
           {Error}
          </div>
  
</form>
</div>

        
      
    )

    /*</div>
      <div className='LogInPage'>
            <form onSubmit={handleSubmit} className='logInBorder'>
              <input className='phone_and_name' type='text' placeholder="Username" onChange={(e)=> setUserName(e.target.value)}/> 
              <input placeholder="phone/password" className='phone_and_name' type='text' onChange={(e)=> setPhone(e.target.value)}/>  
              <button className='submit_button' type='submit'> Login</button> 
              <button  className='submit_button'> <Link className='defaultLink' to={`/Register`}>Register</Link></button>
              {Error}
               
            </form>  
            </div>*/
}
