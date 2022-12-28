import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/action";
 const Card=({props})=>{
   
    const dispatch=useDispatch();
    const handleCartData=()=>{
        dispatch(addToCart(props));
        // console.log(cartData);
    }
    return(
        <div style={{textAlign:"center",marginBottom:"15px"}} onClick={handleCartData} >
            {props.title}
        </div>
    )
 }
 export default Card;