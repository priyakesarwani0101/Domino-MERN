import logo from'../../Image/domino_logo.png'
import React, { useState } from 'react'
import './Style/navbar.css'
// import menubar from "../../Image/white_menu.png"
import { useContext } from 'react'
import { navContext } from '../../Context/NavbarContext'
import Animation from '../Animation'
import { useNavigate,Link } from 'react-router-dom'
import { useEffect } from 'react'
const Navbar = () => {
  const {handleSidebar}=useContext(navContext);
  const {handleCart}=useContext(navContext);
  const {showlogin}=useContext(navContext);
  const {handleLogin}=useContext(navContext);
  const {showcart}=useContext(navContext);
  const {handleSearch}=useContext(navContext);
  const {showside} =useContext(navContext);
const [statusCheck,setStatusCheck]=useState(false);
  let[userNumber,setUserNumber] = useState(localStorage.getItem("userLoginNumber")) ;
  useEffect(()=>{
    setUserNumber(userNumber);
    if(userNumber!==""){
      setStatusCheck(true);
    }
    else{
      setStatusCheck(true);
    }
  },[userNumber])

  const navigate=useNavigate();
const handle_login_status_navbar=()=>{
  // setStatusCheck(true);
  // setUserNumber() ;
  
    navigate("/login")

}

const handle_logout_status_navbar=()=>{

  localStorage.setItem("userLoginNumber","");
  setStatusCheck(false);

}

// if(userNumber !=""){
//   console.log(userNumber) ;
 
  
// }




  const handleshowCart =()=>{
    if(showcart){
      handleCart(false);
    }
    else{
      handleCart(true);
    }
  }
  return (
    <div className='navbar'>
      <div onClick={()=>handleSidebar(!showside)}>
      <Animation/>
      </div>
      <div><Link to="/">
      <img src={logo} alt="" />
      </Link>

      </div>
      <div>
        <div><Link to="/menu" style={{color:"white"}}>our menu</Link></div>
        <div><Link to="/menu" style={{color:"white"}}>domino's stories</Link></div>
        <div><Link to="/menu" style={{color:"white"}}>gift card</Link></div>
        <div><Link to="/menu" style={{color:"white"}}>corporate enquiry</Link></div>
        <div><Link to="/menu" style={{color:"white"}}>contact</Link></div>
      </div>
      
      <div className='navbar_login_container'>
  <div><i class="fa-solid fa-user"></i></div>
  <div>
    {/* <button onClick={handle_login_status_navbar}>Login</button> */}
    <div className='navbar_login_content'>
    <div>{localStorage.getItem("userLoginNumber")!=="" ?localStorage.getItem("userLoginNumber") : "Profile" }</div>
    <div>{localStorage.getItem("userLoginNumber")!=="" ?   <button onClick={handle_logout_status_navbar}>Logout</button> :<button onClick={handle_login_status_navbar}>Login</button> } </div>
    </div>
    
  </div>
      </div>
      {/* <i class="fa-solid fa-magnifying-glass"></i> */}
      <div >
      <div>
      <i class="fa-solid fa-magnifying-glass" onClick={()=>handleSearch(true)}></i></div>
      <div ><i class="fa-solid fa-cart-shopping"   onClick={handleshowCart}></i></div>
    </div>
    </div>
  )
}

export default Navbar
