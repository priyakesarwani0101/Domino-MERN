import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import { useRef } from "react";
import { useEffect,useState } from "react";
import { useContext } from "react";
import { navContext } from "../../Context/NavbarContext";
import './search.css'
 import Suggestion from './Suggestion'
 const Search= () => {
    const [data,setData]=useState([]);
    const [query,setQuery]=useState("");
    const {showSearch}=useContext(navContext);
    const {handleSearch}=useContext(navContext);
    
    const inputRef = useRef();
    const trueStyle={
       
        marginTop: "50px",
        marginLeft:"37%"
    }
    const falseStyle={
        visibility:"hidden",
        marginLeft:"37%",
        top:"-800px"
    }
    useEffect(()=>{
        
        fetchdata(`https://domino-backend.onrender.com/api/products?q=${query}&_limit=4`)
    },[query,handleSearch])
    
    const fetchdata= async(url)=>{
        try{
            const res=await fetch(url);
            const data=await res.json();
           // console.log(data);
            setData(data.data);
            // console.log(data.length);
            // setTotalPages(Math.ceil(data.length/4));
           
        }
        catch(e){
      //console.log(e);
        }
    }

    const clearSearch =()=>{
        setQuery("");
        handleSearch(false);
        inputRef.current.value="";
        
       
    }
    const handleChange =(e)=>{
        setQuery(e.target.value);
         
        
    }
    
    // {showSearch ? reference.current.focus():null}
    return (
        <>
        <div className="search_body" style={showSearch ? trueStyle :falseStyle } >
            <div className="search">
            <div className="searchicon" ></div>
              <div className="input">
                  <input  type="text" ref={inputRef} placeholder="Search" id="mySearch" autoFocus={showSearch ? true: false} onChange={handleChange} />
              
            </div>
            <span className="search_clear" onClick={clearSearch}></span>
            
        </div>
        <div className="search_bar_suggestions" style={{backgroundColour:"white"}}>
  {data.length>0 & query !='' ?
    data.map((el)=><Suggestion props={el} func={clearSearch}/>)
    : null
  }
 
        </div>
        </div>
      
        </>
    )
}
export default Search