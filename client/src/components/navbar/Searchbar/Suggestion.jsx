import React from "react";
import './suggestion.css'
import Detailsp from '../../product_details/Detailsp'
const Suggestion=({props})=>{
    

  return(
    <div className="search_suggestion_div">
      
         <div>
         <img src={props.image} style={{width:"50px",height:"50px",borderRadius:"50%"}} alt="" />
     </div>
    <Detailsp props={props } onClick={()=>func()}/>
     <div>{props.title}</div>
     
    </div>
  )
}
export default  Suggestion;