import React from "react";
import "./style/sidebar.css";
import { navContext } from "../../Context/NavbarContext";
import { useContext } from "react";
import {Link} from 'react-router-dom'
import track from '../../Image/order_track.png'
import pizza from '../../Image/pizza.png'
import home from '../../Image/home_icon.png'
import offer from '../../Image/offers.png'
import menu from '../../Image/menu.png'
import gift from '../../Image/giftbox.png'
import terms from '../../Image/terms.png'
import comment from '../../Image/comment.png'
import cross from '../../Image/newcross.png'
const Sidebar = () => {
  const { showside } = useContext(navContext);
  const { handleSidebar } = useContext(navContext);
  return (
    <>
      <div
        className="sidebar"
        style={showside ? { marginLeft: "0px" } : { marginLeft: "-350px" }}
      >
        <div>   
          <img src={track} alt="" />
          <div><Link to="/menu/veg_pizza" style={{color:"black"}}>track Current order</Link></div></div>
        <div>
        <img src={pizza} alt="" />
          <div><Link to="/" style={{color:"black"}}>order history</Link></div></div>
        <div>
        <img src={home} alt="" />
          <div> <Link to="/" style={{color:"black"}}>home</Link></div>
          </div>
        <div>
        <img src={offer} alt="" />
          <div><Link to='/menu' style={{color:"black"}}>deals & offers</Link></div></div>
        <div>
        <img src={menu} alt="" />
          <div><Link to="/menu" style={{color:"black"}}>menu</Link></div></div>
        <div>
        <img src={gift} alt="" />
          <div><Link to='/menu' style={{color:"black"}}>everyday value offers</Link></div></div>
        <div>
        <img src={terms} alt="" />
          <div><Link to='/' style={{color:"black"}}>terms & condition</Link></div></div>
        <div>
        <img src={comment} alt="" />
          <div><Link to='/' style={{color:"black"}}>Feedback</Link></div></div>
        <div>
        <img src={pizza} alt="" />
          <div><Link to='/' style={{color:"black"}}>contact us</Link></div></div>
      </div>
      
    </>
  );
};

export default Sidebar;
