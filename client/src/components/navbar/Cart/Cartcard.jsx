import React from "react";
import { useDispatch } from "react-redux";
import { deletecart } from "../../Redux/action";
 const Cartcard=({props})=>{
    const dispatch=useDispatch();
    const handleCartcardData=()=>{
        dispatch(deletecart(props.id));
        
    }
    return(
        <div className="cart_single_div" style={{ border:"1px solid red"}} onClick={handleCartcardData} >
            
        </div>
    )
 }
 export default Cartcard;