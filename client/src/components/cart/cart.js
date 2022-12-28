import React, { useContext, useState } from 'react'
import './cart.css'
import {Link} from  'react-router-dom'
import { addressContext } from './addressContext/AddressContext'
import { useSelector,useDispatch } from 'react-redux'
import { CartMap } from './CartMap'
import {addToCart} from '../../Redux/action'
import CouponPage from '../product_details/CouponPage'


export default function Cart() {
    const [coupen,setCoupen]=useState(false);
    const {setopenAdress}=useContext(addressContext);
    const dispatch=useDispatch();
    const adressfunction = useContext(addressContext);

     const coupenfunction=(value)=>{
        setCoupen(value);
     }

    const cartData=useSelector((state)=>{
        return  state.cartArr;
      })

      const calculateAmount=cartData.reduce(((acc,e)=>{
        return (e.quantity*e.price)+acc;
      }),0)

      const fetchdata=async(url)=>{
        try{
          const res= await fetch(url);
        const data=await res.json();
        dispatch(addToCart(data))
        }catch(e){
          console.log(e);
        }
        }

  return (
    <div className='cartContainer-pk'>
        <div className='cartPage-leftDiv-pk'>
            <div className='cartPage-left-topDiv-pk' style={{fontSize:"30px",color:"#095c91"}}><b><span>{cartData.length} Item you have selected</span></b>
                <div><button className='cursor-pointer-pk' style={{border:"2px solid #095c91",borderRadius:"10px"}}><Link to="/"><span>Explore Menu</span></Link></button></div>
            </div>
            {
          cartData.length>0 ? cartData.map((el,index)=>{
            return(
              <CartMap props={el} index={index} func={fetchdata}/>
            )
          }
          )
          :
          null
       }
            
        </div>
        <div className='cartPage-rightDiv-pk' style={{bottom:"0px"}}>
            

            <div className='address-container-pk box-shadow-pk' style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",marginTop:"25px"}}>
                <div className='adrs-icon-div-pk'><div></div></div>
                <div className='adrs-wrpr-div-pk'>
                    <div className='current-adrs-div-pk'>
                        <p className='current-heading-pk '>Contact No.</p>
                        <p className='current-adrs-pk'>{localStorage.getItem("userLoginNumber")}</p>
                    </div>
                    {/* <div className='edit-adrs-pk'>Edit Address</div> */}
                </div>
                {/* <div className='change-adrs-btn-pk'><button className='btn-green-pk'>Change</button></div> */}
            </div>
            <div className='cartPage-right-topDiv-pk' style={{backgroundColor:"#82bb37",color:"white",textAlign:"center"}}><b><span>Offers</span></b></div>

            <div className='select-offer-div-pk box-shadow-pk' style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",marginTop:"-5px"}}>
                <div className='offer-icon-pk'></div>

                {/* coupen dena hi */}
                <div className='offer-text-pk'>
                    <CouponPage props={coupenfunction} />
                 
                </div>
                <div className='offer-text-arrow-pk'></div>
            </div>
            <div className='cartPage-right-topDiv-pk' style={{backgroundColor:"#82bb37",color:"white",textAlign:"center"}}><b><span>Price Details</span></b></div>

            <div className='price-details-div-pk box-shadow-pk' style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                <div className='price-text-wrpr-pk'>
                    <span>Sub Total</span>
                    <span> ₹ {calculateAmount }</span>
                </div>
                <div className='price-text-wrpr-pk'>
                    <span>Discount</span>
                    <span>₹ {coupen ? ((calculateAmount*20)/100) : 0}</span>
                </div>
                <div className='price-text-wrpr-pk'>
                    <span className='tax-span-tag-pk'>
                        Taxes and Charges
                        <div className='tax-info-div-pk'><b>i</b></div>
                    </span>
                    <span>{((calculateAmount*5)/100)}</span>
                </div>
                <div className='break-line-pk'></div>
                <div className='price-text-wrpr-pk'>
                    <span className='text-bold-pk'>Grand Total</span>
                    <span className='text-bold-pk'> ₹ {coupen ? Math.floor(calculateAmount - ((calculateAmount*20)/100)+((calculateAmount*5)/100)) :calculateAmount+((calculateAmount*5)/100) }</span>
                </div>
                <div className='break-line-pk'></div>
                <div className='place-btn-div-pk'>
                    <Link to='#'><button className='cart-place-order-btn-pk' style={{marginTop:"-20px"}} onClick={()=>setopenAdress(true)}>Place Order</button></Link>  
                    {/* button */}
                </div>
            </div>
        </div>
       
    </div>
  )
}
