import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import {deletecart} from '../../Redux/action'
import './style/cartCard.css'
const Flip_cart_card=({props,handleDelete})=>{
    const [rotate,setrotate]=useState(false);
    const [backrotate,setbackrotate]=useState(false);
    const dispatch=useDispatch();
    const handleRemoveCart=()=>{
        
        setrotate(false);
                setbackrotate(true);
        dispatch(deletecart(props.id));
        handleDelete(props.price);
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
                <div>{props.description}</div>
                <div>
                    <div> {props.category}</div>
                    <div>₹ {props.price}</div>
                   </div>
             </div>
             </div>
             <div className="down_remove_flex">
             <div className="quantity_button">
                <button>-</button>
               <button >1</button>
               <button>+</button>
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