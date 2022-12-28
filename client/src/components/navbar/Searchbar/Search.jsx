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
    // const[clear,setClear]=useState(false);
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
        
        fetchdata(`http://localhost:8080/pasta?q=${query}&_limit=4`)
    },[query])
    
    const fetchdata= async(url)=>{
        try{
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            setData(data);
          
        }
        catch(e){
      console.log(e);
        }
    }
    
    const clearSearch =()=>{
        setQuery("");
        inputRef.current.value("");
        handleSearch(false);
       
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
                  <input  type="text" ref={inputRef}  placeholder="Search" id="mySearch" autoFocus={showSearch ? true: false} onChange={handleChange} />
              
            </div>
            <span className="search_clear" onClick={clearSearch}></span>
            
        </div>
        <div className="search_bar_suggestions" >
  {data.length>0 & query !='' ?
    data.map((el)=><Suggestion props={el}/>)
    : null
  }
 
        </div>
        </div>
      
        </>
    )
}
export default Search