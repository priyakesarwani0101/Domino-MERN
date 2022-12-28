import React from 'react'
import {Link} from 'react-router-dom'

const Cash = () => {
  return (
    <div>
       <div className='cash-payment-option-show-pk'>
                            <div className='cash-payment-option-img-pk'></div>
                           
                            <span className='payment-mode-desc-pk'>
                                <p>If you wish to pay</p>
                                <p>through cash</p>
                            </span>
                            <div className='confirm-order-btn-div-pk'>
                                <Link to="/paymentCompleted"><button className='cash-confirm-btn-pk'><span>Confirm Order</span></button></Link>
                            </div>
                        </div>

    </div>
  )
}

export default Cash
