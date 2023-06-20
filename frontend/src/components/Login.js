import React, { useState } from 'react'
import './Register.css'
import {Link,useNavigate} from 'react-router-dom'
import Logo from '../images/netflixlogo.png'
import { Cookies } from 'react-cookie';
function Login() {
  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const [invalid,setInvalid]=useState(false);
  const [mesg,setMesg]=useState("");
  const [cb,setCB]=useState(false);
  function handleuserchange(event){
    const k=event.target.value;
      setUserName(k);
  }
  const k=useNavigate();
  function handleuserpassword(event){
    const k=event.target.value;
    setPassword(k);
  }
  function handlecb(e){
    if(cb===true){
      setCB(false);
    }else{
      setCB(true);
    }
  }
   
function handlesubmit(e){
  e.preventDefault();
  const start= async ()=>{
    const response = await fetch('/login',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    const msg=await response.json();       
   if(response.status===401){
      setInvalid(true);
      setMesg(msg.message);
      console.log("Status 401");
   }if(response.status===202){
    setInvalid(true);
    setMesg(msg.message);
    
   }
   if(response.status===200){
    setInvalid(true);
    setMesg(msg.message);
   k('/home');
    
   }
}
start();
}

  return (
    <div className='login'>

        <div className="layout">
          <div className="nav-log">
            <img className='nav-logo-img' src={Logo} alt="" />
          </div>
            <div className="forms">
                <form className='register-form' >
                  <h1 className='reg-title'>Login</h1>
                  {invalid ? <p className='error'>{mesg}</p> : null}


                  <input type="text" className='input' value={username} placeholder='enter username' onChange={handleuserchange} />
                  <input type={cb? "text":"password"} className='input' value={password} placeholder='enter password' onChange={handleuserpassword} />
                  <div className="cb">
                    <input type="checkbox" onChange={handlecb} className="cbox" />
                    <p>show password</p>
                  </div>
                  <p>Don't have an account? Register<Link to='/register'>here</Link></p>
                  <input type="submit" className='input btn' onClick={handlesubmit} />
                </form>
            </div>
            
          
        </div>
    </div>
  )
}

export default Login