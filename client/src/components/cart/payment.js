import React from 'react'
import './payment.css'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Outlet} from 'react-router-dom';

function Payment() {
    const cartData=useSelector((state)=>{
        return  state.cartArr;
      })
      const calculateAmount=cartData.reduce(((acc,e)=>{
        return (e.quantity*e.price)+acc;
      }),0)
      
      const coupen=localStorage.getItem("coupenApllied");

    const ObjData=JSON.parse(localStorage.getItem("userAddress"))||{};
  return (
    <div className='paymentContainer-pk'>
        <div className='payment-left-div-pk'>
            <div style={{marginBottom:"-10px"}}><span className='payment-left-top-heading-pk'  style={{fontSize:"30px"}}>Payment Gateway:</span></div>

            <div className='payment-method-container-pk box-shadow-pk'>
                <div className='payment-method-div-pk'>
                    <div className='payment-method-left-pk'>
                        <div className='payment-icon-dtl-pk'>
                            <div className='payment-icon-pk cash-mode-icon-url-pk'></div>
                            <Link to='/payment'><span className='payment-method-text-pk'>
                                <p className='payment-method-text-p-tag-pk'>cash on</p>
                                <p className='payment-method-text-p-tag-pk'>delivery</p>
                            </span></Link>
                        </div>
                        <div className='payment-icon-dtl-pk'>
                            <div className='payment-icon-pk credit-card-mode-icon-url-pk'></div>
                            <Link to ='/payment/credit'><span className='payment-method-text-pk'>
                                <p className='payment-method-text-p-tag-pk'>credit</p>
                                <p className='payment-method-text-p-tag-pk'>card</p>
                            </span></Link>
                        </div>
                        <div className='payment-icon-dtl-pk'>
                            <div className='payment-icon-pk debit-card-mode-icon-url-pk'></div>
                            <Link to = '/payment/debit'><span className='payment-method-text-pk'>
                                <p className='payment-method-text-p-tag-pk'>debit</p>
                                <p className='payment-method-text-p-tag-pk'>card</p>
                            </span></Link>
                        </div>
                        <div className='payment-icon-dtl-pk'>
                            <div className='payment-icon-pk net-banking-mode-icon-url-pk'></div>
                            <span className='payment-method-text-pk'>
                                <p className='payment-method-text-p-tag-pk'>net</p>
                                <p className='payment-method-text-p-tag-pk'>banking</p>
                            </span>
                        </div>
                        <div className='payment-icon-dtl-pk'>
                            <div className='payment-icon-pk upi-wallet-mode-icon-url-pk'></div>
                            <span className='payment-method-text-pk'>
                                <p className='payment-method-text-p-tag-pk'>UPI</p>
                                <p className='payment-method-text-p-tag-pk'>and wallet</p>
                            </span>
                        </div>
                        <div className='payment-icon-dtl-pk'>
                            <div className='payment-icon-pk giftCards-evouchers-mode-icon-url-pk'></div>
                            <span className='payment-method-text-pk'>
                                <p className='payment-method-text-p-tag-pk'>GiftCards</p>
                                <p className='payment-method-text-p-tag-pk'>/ eVouchers</p>
                            </span>
                        </div>
                    </div>

                    <div className='payment-method-right-pk' style={{marginBottom:"20px"}}>
                    <div><Outlet></Outlet></div>
                        {/* <div className='cash-payment-option-show-pk'>
                            <div className='cash-payment-option-img-pk'></div>
                           
                            <span className='payment-mode-desc-pk'>
                                <p>If you wish to pay</p>
                                <p>through cash</p>
                            </span>
                            <div className='confirm-order-btn-div-pk'>
                                <Link to="/paymentCompleted"><button className='cash-confirm-btn-pk'><span>Confirm Order</span></button></Link>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>

        <div className='payment-right-div-pk'>
            <div>
                <b><p style={{backgroundColor:"#29b53c",marginLeft:"10px",marginBottom:"7px",marginTop:"10px",color:"white",textAlign:"center"}}><span className='payment-address-title-pk' style={{color:"white"}}>Delivery Address</span></p></b>
                <div className='payment-addr-cont-pk box-shadow-pk' style={{marginBottom:"10px"}}>
                    <div className='addr-location-icon-div-pk'>
                        <div className='addr-location-icon-pk'></div>
                        <div className='addr-text-div-pk'>
                            <p className='addr-location-main-pk payment-method-text-p-tag-pk'>{ObjData.city}</p>
                            <p className='addr-location-sub-pk payment-method-text-p-tag-pk'>{ObjData.address}</p>
                        </div>
                    </div>
                    <div className='payment-phone-div-pk'>
                        <div className='phone-icon-pk'></div>
                        <span>{localStorage.getItem("userLoginNumber")}</span>
                    </div>
                </div>
                <b><p style={{backgroundColor:"#29b53c",marginLeft:"10px",marginTop:"13px",color:"white",textAlign:"center"}}><span className='payment-address-title-pk' style={{color:"white"}}>Order Details</span></p></b>
                <div className='price-detail-cont-pk box-shadow-pk'>
                    <div className='payment-addr-cont-pk'>
                        <div className='price-details-cont-pk'>
                            <div className='price-text-div-pk'>
                                <span>Sub Total</span>
                                <span>₹ {calculateAmount}</span>
                            </div>
                            <div className='price-text-div-pk'>
                                <span>Discount</span>
                                <span>{coupen ? ((calculateAmount*20/100)) : 0 }</span>
                            </div>
                            <div className='price-text-div-pk'>
                                <span className='tax-charges-cont-pk'>Taxes and Charges
                                    <div>
                                        <div className='tax-details-div-pk'><b>i</b></div>
                                    </div>
                                </span>
                                <span>₹ {((calculateAmount*5/100))}</span>
                            </div>
                            <div className='break-line-pk'></div>
                            <div className='price-text-div-pk'>
                                <span>Amount Payable</span>
                                <span>₹ {coupen ? Math.floor(calculateAmount - ((calculateAmount*20)/100)+((calculateAmount*5)/100)) :calculateAmount+((calculateAmount*5)/100)}</span>
                            </div>
                            <div className='break-line-pk'></div>
                            <p className='payment-mode-note-pk'><span>Note </span>
                                -  This is not an invoice. Invoice will be supplied along with delivery of goods with complete tax categorization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment