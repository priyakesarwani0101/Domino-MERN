import React,{ createContext, useState } from 'react'
import Navbar from './Navbar/Navbar';
import LowerNav from './Navbar/LowerNav';
import Sidebar from './Sidebar/Sidebar';
 import Cart from './Cart/Cart';
// import Footer from './Footer/Footer'
import Search from './Searchbar/Search';
import Login from "../../landing_pg/Login/Login"
// import Product from './Product/Product';
export const navContext=createContext();
const NavbarContext = () => {
    const [showside,setShowSide]=useState(false);
    const [showcart,setShowCart]=useState(false);
    const [showlogin,setShowLogin]=useState(false);
    const [showSearch,setShowSearch]=useState(false);
    const handleSidebar=(value)=>{
        setShowSide(value);
    }
    const handleCart=(value)=>{
        setShowCart(value);
    }
    const handleLogin=(value)=>{
        setShowLogin(value);
    }
    const handleSearch=(value)=>{
        setShowSearch(value);
    }
  return (
   <navContext.Provider value={{handleCart,handleSidebar,handleLogin,handleSearch,showside,showcart,showlogin,showSearch}}>
  <Navbar/>
  <LowerNav/>
  <Sidebar/>
   <Search/>
  <Cart/>
  {/* <Product/> */}

   </navContext.Provider>
  )
}

export default NavbarContext
