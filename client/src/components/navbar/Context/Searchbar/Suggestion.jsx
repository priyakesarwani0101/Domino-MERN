import React,{useContext} from "react";
import './suggestion.css'
import Detailsp from "../../../product_details/Detailsp"
import {navContext} from "../NavbarContext";

const Suggestion=({props,func})=>{
  const {handleSearch}=useContext(navContext);

  return(
    <div className="search_suggestion_div">
      
         <div>
         <img src={props.image} style={{width:"50px",height:"50px",borderRadius:"50%"}} alt="" />
     </div>
     
     <div>{props.title}</div>
     <div  onClick={()=>handleSearch(false)}><Detailsp props={props}  /></div>
    </div>
  )
}
export default  Suggestion;