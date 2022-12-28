import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import {deletecart} from '../../../../Redux/action'
import {incCount} from '../../../../Redux/action'
import {decCount} from '../../../../Redux/action'

import './style/cartCard.css'
const Flip_cart_card=({props,index, func})=>{
  const dispatch=useDispatch();
    const [rotate,setrotate]=useState(false);
    const [backrotate,setbackrotate]=useState(false);
   const cartdata= JSON.parse(localStorage.getItem("cartItems"))||[];
const increaseCount= async ()=>{
 await  fetch(`http://localhost:3002/cartItems/${props.id}`,
 {
  method:"PATCH",
  body:JSON.stringify({
    quantity:(props.quantity)+1
  }),
  headers:{
    "Content-Type":"application/json",
  }
 }
    )
       
        func("http://localhost:3002/cartItems")
}
const decreaseCount=async ()=>{
  await fetch(`http://localhost:3002/cartItems/${props.id}`,
 {
  method:"PATCH",
  body:JSON.stringify({
    quantity:(props.quantity)-1
  }),
  headers:{
    "Content-Type":"application/json",
  }
 }
    )
    func("http://localhost:3002/cartItems")
}

    const handleRemoveCart= async()=>{
       
        setrotate(false);
        setbackrotate(true);
        
        
    await   fetch(`http://localhost:3002/cartItems/${props.id}`,
        {
         method:"DELETE",

         headers:{
           "Content-Type":"application/json",
         }
        }

 
        )

        func("http://localhost:3002/cartItems")
        
    }
    return(
        <div>
      <div className="maincontainer">

        <div className="flipcard" style={rotate ? {transform: "rotateY(180deg)"} :{transform: "rotateY(0deg)"} }>

            <div className="frontcard" >
             
             <div style={{display:"flex"}}>
                <div className="cart_div_img" style={{width :"110px",height :"70px"}}>
                <img src={props.image} alt=""  style={{width :"100%",height :"100%"}}/>
             </div>
             <div className="cart_details" style={{marginLeft:"8px"}}>
                <div>{props.title}</div>
                <div>{`This easy ${props.title} pairs spaghetti with colorful roasted veggies! It’s a healthy dinner idea for loading up on the good stuff.`}</div>
                <div>
                    <div> {props.category}</div>
                    <div>₹ {props.price*props.quantity}</div>
                   </div>
             </div>
             </div>
             <div className="down_remove_flex">
             <div className="quantity_button">
                <button disabled={props.quantity<=1 ? true : false} onClick={decreaseCount}>-</button>
               <button >{props.quantity}</button>
               <button onClick={increaseCount}>+</button>
             </div>
             <div>
             <button onClick={()=>{
                setrotate(true);
                setbackrotate(false);
            }}><i class="fa-regular fa-trash-can" style={{color:"white"}}></i></button>
            </div>
            </div>
            </div>
            <div className="backcard" style={backrotate ? {transform: "rotateY(-180deg)"} :{transform: "rotateY(180deg)"} } >
            
                <div className="back_card_details">
                    Are You Sure You want to remove this Item ? 
                </div>
             <div className="back_card_button">
           
   <button onClick={handleRemoveCart}>Yes</button>
   <button onClick={()=>{
    setrotate(false);
    setbackrotate(true);
   }}>No</button>
             </div>
            </div>
        </div>
      </div>

        </div>
    )
}
export default Flip_cart_card