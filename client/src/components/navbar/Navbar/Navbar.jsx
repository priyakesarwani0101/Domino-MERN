import logo from'../../Image/domino_logo.png'
import React from 'react'
import './Style/navbar.css'
import menubar from "../../Image/white_menu.png"
import { useContext } from 'react'
import { navContext } from '../../Context/NavbarContext'
import Animation from '../Animation'
const Navbar = () => {
  const {handleSidebar}=useContext(navContext);
  const {handleCart}=useContext(navContext);
  const {showlogin}=useContext(navContext);
  const {handleLogin}=useContext(navContext);
  const {showcart}=useContext(navContext);
  const {handleSearch}=useContext(navContext);
  const {showside} =useContext(navContext)
  
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
      <div>
<img src={logo} alt="" />
      </div>
      <div>
        <div>our menu</div>
        <div>domino's stories</div>
        <div>gift card</div>
        <div>corporate enquiry</div>
        <div>contact</div>
      </div>
      
      <div className='navbar_login_container'>
  <div><i class="fa-solid fa-user"></i></div>
  <div>
    {showlogin ? <div className='navbar_data_content'>
    9554840740
    </div> :
    <div className='navbar_login_content'>
    <div>Profile</div>
    <div onClick={()=>handleLogin(true)}>Login</div>
    </div>
    }
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
