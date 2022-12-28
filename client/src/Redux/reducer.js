import { m } from "framer-motion";
import { ADD_DATA } from "./actionTypes";
import { ADD_TO_CART } from "./actionTypes";
import { DELETE_CART } from "./actionTypes";
import { INC_COUNT } from "./actionTypes";
import { DEC_COUNT } from "./actionTypes";
import {TOTAL_PRICE} from './actionTypes'
const oldarr={
    data:{},
    cartArr:[],
    totalAmount:0,
}
export const  reducer=(state=oldarr,{type,payload})=>{
    switch(type){
        case ADD_DATA:
            return {
                ...state,
                data:{...state,data:payload},
            }
            case ADD_TO_CART:
                return {
                    ...state,
                    cartArr:payload,
                }
                case DELETE_CART:
            return {
                ...state,
                cartArr:state.cartArr.filter((el)=>el.id !==payload)
            }
            case INC_COUNT:
                function increaseCount(){
                    state.cartArr.forEach((e)=>{
                        if(e.id===payload){
                            e.quantity=e.quantity+1;
                        }
                    })
                    return state
                }
                increaseCount()
                return {
                    ...state,
                    cartArr:[...state.cartArr]
                }

                case DEC_COUNT:
                function decreaseCount(){
                    state.cartArr.forEach((e)=>{
                        if(e.id===payload){
                            e.quantity=e.quantity-1;
                        }
                    })
                    return state
                }
                decreaseCount();
                return {
                    ...state,
                    cartArr:[...state.cartArr]
                }
               case  TOTAL_PRICE :
                function add(arr){
                    let sum=0;
                   for(let i=0;i<arr.length;i++){
                  sum+=arr[i].price;
                  console.log(arr[i].price);
                   }
                   return sum;
                }
                return {
                    ...state,
                    totalAmount: add(state.cartArr)
                    }
                        
                
            default :
            return state
    }
}