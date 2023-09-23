import React, { useState } from 'react'
import './Register.css'
import Logo from '../images/netflixlogo.png'
function Login() {
  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");

  function handleuserchange(event){
    const k=event.target.value;
      setUserName(k);
  }
  function handleuserpassword(event){
    const k=event.target.value;
    setPassword(k);
  }
function handlesubmit(e){
  
  e.preventDefault();
}

  return (
    <div className='login'>
        <div className="layout">
          <div className="nav-log">
            <img className='nav-logo-img' src={Logo} alt="" />
          </div>
            <div className="forms">
                <form className='register-form' action="">
                  <h1 className='reg-title'>Register</h1>

                  <input type="text" className='input' placeholder='enter username' onChange={handleuserchange} />
                  <input type="password" className='input' placeholder='enter password' onChange={handleuserpassword} />
                  <input type="submit" className='input btn' onClick={handlesubmit} />
                </form>
            </div>
            
          
        </div>
    </div>
  )
}

export default Login