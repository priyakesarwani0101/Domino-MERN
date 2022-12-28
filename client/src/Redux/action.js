import { ADD_DATA } from "./actionTypes";
import {ADD_TO_CART} from './actionTypes'
import {DELETE_CART}  from './actionTypes'
import { INC_COUNT } from "./actionTypes";
import { DEC_COUNT } from "./actionTypes";
import { TOTAL_PRICE } from "./actionTypes";
export  const adddata=(data)=>(
    {
        type:ADD_DATA,
        payload:data,
    }
)

export  const addToCart=(data)=>(
    {
        type:ADD_TO_CART,
        payload:data,
    }
)
 
export  const deletecart=(data)=>(
    {
        type:DELETE_CART,
        payload:data,
    }
)
export const incCount=(data)=>(
    {
        type:INC_COUNT,
        payload:data,
    }
)

export const decCount=(data)=>(
    {
        type:DEC_COUNT,
        payload:data,
    }
)
export const totalPrice=(data)=>(
    {
        type:TOTAL_PRICE,
        payload:data,
    }
)