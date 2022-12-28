import React,{useState} from 'react'
import './PaymentDone.css'
import {Link,useNavigate} from 'react-router-dom';
import Loading from '../product_details/Loading'


function PaymentDone() {
  const [state,setState] = useState(false); 
  const navigate = useNavigate();

   const handleImg = ()=>{
    setState(true)
      setTimeout(() => {
        navigate('/')
      }, 3000);
   }

  return state ? <Loading /> : <div className='ord-succ-cont-pk'>
  <div>
      <img src='https://nrifuture.com/wp-content/uploads/2022/03/image_processing20190812-2176-vehbsi.gif' />
      <h1>THANK YOU!</h1>
      <h2 className='thank-h2-tag-pk'>Payment done Successfully!</h2>
      <span>You will be redirected to the home page shortly or click here to return to home page</span>
     <button style={{color:"white",backgroundColor:"#55e0b2",borderRadius:"6px",padding:"8px"}} onClick={handleImg}><span>Home</span></button>
  </div>
</div>
}

export default PaymentDone