import React from "react";
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import {adddata} from '../../Redux/action'
import {useSelector} from 'react-redux'
import Card from './Card'
const Product=()=>{
 
    const data= useSelector((state)=>state.data)
    console.log(data);

const dispatch=useDispatch();
    useEffect(()=>{
 fetchdata("http://localhost:8080/pasta");
    },[])
    const fetchdata=async (url)=>{
        try{
            const res=await fetch(url);
            const data =await res.json();
            console.log(data);
            dispatch(adddata(data));
        }
        catch(e){
            console.log(e);
        }
    }
    return(
        <div>
            {data.length>0 ?
            data[0].map(el=><Card props={el}/>)
            : <h1>Sorry Abhi Data ni hi 
                <br />
                Bad me aana
            </h1>
            }
            
        </div>
    )
}
export default Product