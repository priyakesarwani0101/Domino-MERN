import React,{useEffect,useState} from 'react'
import { useSelector } from "react-redux";
import Footer from '../navbar/Footer/Footer'
import Cards from "./Card";
import './product.css';
const PizzaMania = () => {
 
  const data = useSelector((state) => {
    return state.data;
    
  });
  console.log(data.data);
  let [state, setState] = useState([...data.data.pizza_mania]);
 

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
            color:"white",
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
    {Object.keys(data).length > 0 ?
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

export default PizzaMania