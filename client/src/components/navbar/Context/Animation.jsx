import React from "react";
import { useState } from "react";
import './animation.css'
const Animation=()=>{
    const [animate, setAnimate]=useState("menu_btn");
    const [changeclass,setClass]=useState(false);
    const handle_cross_change=()=>{
        setClass(!changeclass);
    }
    
    return (
        <div className={changeclass ? "menu_btn_open" : "animate_menu_btn" } onClick={handle_cross_change} >
         <div className="menu-btn_burger"></div>
        </div>
    )
}
export default Animation;