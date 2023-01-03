import React,{useState} from "react";
import './product.css';
// import { useDispatch ,useSelector} from "react-redux";
// import { addToCart } from "../../Redux/action";
import Detailsp from "../product_details/Detailsp";
import { Box } from "@chakra-ui/react";

const Cards = ({props}) => {
 const [added,setAdded] = useState(false);
   // console.log(props);
  
  let token = localStorage.getItem('token');
   const addedToCart = ()=>{
     setAdded(true);
     setTimeout(() => {
       setAdded(false)
     }, 2000);
 

     
 fetch("https://domino-backend.onrender.com/api/cart",
 {
  method:"POST",
body:JSON.stringify([props]),
  headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }
 }
 ).then((res)=>{
  res.json()
 // console.log("gybgy",res)
 }).then((res)=>{
  console.log(res);
 })
 }


  return (
    <div className="card">
      <img 
      src={props.image}
      />
      
     <b> <h3 style={{textAlign:"center"}}>{props.title}</h3></b>
      
      <h3 style={{textAlign:"center"}}>Rs: {props.price}</h3>
       <h3 style={{textAlign:"center"}}>Ratings: {props.ratings } <i class="fa-solid fa-star"></i></h3>
      <div id="cartBtn">
       
        <Detailsp props={props}/>
        <button onClick={()=>addedToCart(props)} >Add to cart</button>
      </div>

      {added ? <Box className='addToCartBtn' position='fixed' top='15%' left='45%' zIndex='50' bgColor='#0b639c' color='white' padding='1%' fontSize='1.3rem' borderRadius='8px' >
            Added to cart
        </Box> : null}
      
    </div>
  );
};

export default Cards;
