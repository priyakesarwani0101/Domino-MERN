import React,{useEffect,useState} from 'react'
import { useSelector } from "react-redux";
import Footer from '../navbar/Footer/Footer'
import Cards from "./Card";
import './product.css';
const Pasta = () => {
 
  // const data = useSelector((state) => {
  //   return state.data;
    
  // });
  // console.log(data.data);
  // let [state, setState] = useState([...data.data.pasta]);

  // console.log(vegPizza);


  ////new code
  let [state,setState] = useState([]);
  let token = localStorage.getItem("token");

  useEffect(()=>{
    fetch('https://1dae-103-175-180-42.in.ngrok.io/api/products',{
      method:"GET",
      headers:{
        "Authorization":`Bearer${token}`
      }
       
    }).then((res)=>res.json()).then((res)=>{
      console.log(res.data);
      setState([...res.data.filter((el)=>el.category==='veg_pasta'||el.category==='non_veg_pasta')]);
    })
  },[])

  ///////

  const sortByPrice = (e) => {
    let Price = e.target.value;

    let newArr = [...state];
    if (Price === "all") {
    } else if (Price === "htl") {
      newArr.sort((a, b) => {
        return b.price - a.price;
      });
    } else {
      newArr.sort((a, b) => {
        return a.price - b.price;
      });
    }

    setState(newArr);
  };

  const sortByRatings = (e) => {
    let rating = e.target.value;
    let newArr = [...state];
    if (rating === "all") {
    } else if (rating === "htl") {
      newArr.sort((a, b) => {
        return b.ratings - a.ratings;
      });
    } else {
      newArr.sort((a, b) => {
        return a.ratings - b.ratings;
      });
    }

    setState(newArr);
  }



  return (

    <>
      
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          marginTop: "20px",
          marginRight: "150px",
        }}
      >
        <select
          style={{
            backgroundColor: "#095c91",
            borderRadius: "10px",
            padding: "10px",
            color:"white"
          }}
          id="sortByPrice"
          onChange={sortByPrice}
        >
          <option value="all">Sort By Price</option>
          <option value="htl">High to low</option>
          <option value="loh">Low to high</option>
        </select>
        <select
          style={{
            backgroundColor: "#095c91",
            borderRadius: "10px",
            padding: "10px",
            color:"white"
          }}
          id="sortByRating"
          onChange={sortByRatings}
        >
          <option value="all">Sort By Rating</option>
          <option value="htl">High to low</option>
          <option value="lth">Low to high</option>
        </select>
      </div>

    <div id='productBox'>
    {state.length > 0 ?
       state.map((el)=>{
        return (
          <Cards props={el}/>
        )
       })
      
     : <h1>Data is empty</h1>}
     
    </div>
    <Footer />
    </>
  )
}

export default Pasta