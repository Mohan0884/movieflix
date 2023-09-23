import React,{useState} from 'react'
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass ,faUser} from '@fortawesome/free-solid-svg-icons'

import Netflixlogo from '../images/netflixlogo.png'
function Navbar() {
  const [color,setColor]=useState(false)
  const changeColor=()=>{
    if(window.scrollY>=50){
      setColor(true);
    }else{
      setColor(false);
    }
  }
  
  window.addEventListener('scroll',changeColor)
  return (
    <div className={color?'navbar':'navbar-trans'}>
        {/* <Routes>
            <Route element={<Home/>} to='/' />
            <Route element={<Home/>} to='/wishlist' />

            <Route element={<Home/>} to='/user' />

        </Routes> */}
        <img className='netflix-logo' src={Netflixlogo} alt="netflix-logo" />
        <div className="links">
          <input type="text" placeholder='search Movie,...'  className='input-search'/>
          <p className='link'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
            </p>
            <p className='link'>Home</p>
            <p className='link'>WishList</p>
            <p className='link'>
          <FontAwesomeIcon className='fa-user' icon={faUser} />
             mohan
            </p>
        </div>
    </div>
  )
}

export default Navbar