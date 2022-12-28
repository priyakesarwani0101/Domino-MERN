import React from 'react'

import './PaymentDone.css'

function OrderPlaced() {
  return (
    <div className='ord-succ-cont-pk'>
        <div>
            <img src='https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif' />
            <h1>THANK YOU!</h1>
            <h3>Order placed Successfully!</h3>
            <span>You will be redirected to the home page shortly or click here to return to home page</span>
            <button><span>Home</span></button>
        </div>
    </div>
  )
}

export default OrderPlaced