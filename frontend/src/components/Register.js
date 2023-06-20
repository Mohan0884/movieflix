import React, { useState } from 'react'
import './Register.css'
import {Link,useNavigate} from 'react-router-dom'
import Logo from '../images/netflixlogo.png'
//import { useNavigate } from 'react-router-dom'
//import { Cookies,useNavigate } from 'react-cookie';

function Register() {
  //const cookies = new Cookies();
  //const navigator=useNavigate();
  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const[cpassword,setCPassword]=useState("");
  const [errorValue,setErrorValue]=useState("");
  const [error,setError]=useState(false);
  const k=useNavigate();
  const[cb,setCB]=useState(false);
  function handleuserchange(event){
    const k=event.target.value;
      setUserName(k);
  }
  function handleuserpassword(event){
    const k=event.target.value;
    setPassword(k);
  }
  function handleconfirmpassword(event){
    setCPassword(event.target.value);
  }
  function handlecb(e){
    if(cb===true){
      setCB(false);
    }else{
      setCB(true);
    }
  }
  function handlesubmit(e) {
    e.preventDefault();
    
    const registerUser = async () => {
      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password, cpassword }),
        });
        const msg = await response.json();
        if(response.status===500){
          setErrorValue(msg.message);
          setError(true);
          console.log(msg.message);
        }
        if (response.status === 400) {
          setErrorValue(msg.message);
          setError(true);
          console.log(msg.message);
        } else if (response.status === 201) {
          setErrorValue(msg.message);
          localStorage.setItem('username', msg.id);
          console.log(msg.id)
          setError(true);k('/login');

        } else {
          alert('Account created successfully');
          // k('/login');
          //navigator('/login');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    registerUser();
  }


  return (
    <div className='login'>
        <div className="layout">
          <div className="nav-log">
            <img className='nav-logo-img' src={Logo} alt="" />
          </div>
            <div className="forms">
                <form className='register-form' >
                  <h1 className='reg-title'>Register</h1>
                  {error ? <p className='error'>{errorValue}</p>:null}

                  <input type="text" className='input' value={username} placeholder='enter username' onChange={handleuserchange} />
                  <input type={cb? "text":"password"} className='input' value={password} placeholder='enter password' onChange={handleuserpassword} />
                  <input type={cb? "text":"password"} className='input' value={cpassword} placeholder='confirm password' onChange={handleconfirmpassword} />
                  <div className="cb">
                    <input type="checkbox" onClick={handlecb} className="cbox" />
                    <p>show password</p>
                  </div>
                  <p>Already have an account? Login<Link to='/login'>here</Link></p>
                  <input type="submit" className='input btn' onClick={handlesubmit} />
                </form>
            </div>
            
          
        </div>
    </div>
  )
}

export default Register