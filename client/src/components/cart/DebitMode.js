import React from 'react'
import './CreditMode.css'
import {Link} from 'react-router-dom'

function DebitMode() {
  return (
    <div className='credit-card-main-pk'>
        <h3 className='credit-card-text-pk'>Pay using Debit Card</h3>
        <div className='credit-card-img-div-pk'>
            <span>We accept</span>
            <div className='credit-cards-img-div-create-pk credit-first-img-pk'></div>
            <div className='credit-cards-img-div-create-pk credit-second-img-pk'></div>
            <div className='credit-cards-img-div-create-pk debit-third-img-pk'></div>
            {/* <div className='credit-cards-img-div-create-pk credit-fourth-img-pk'></div>
            <div className='credit-cards-img-div-create-pk credit-fifth-img-pk'></div> */}
        </div>
        <hr />
        <div className='credit-input-div-pk'>
          <div className='credit-no-expiry-div-pk'>
            <input className='card-no-inp-tag-pk' type='number' placeholder='DEBIT CARD NO'></input>
          </div>
          <div className='credit-expiry-div-pk'>
            <span className='credit-expiry-title-pk'>Expiry Date</span>
            <div className='credit-expiry-month-pk'>
              <select className='credit-expiry-select-tag-pk'>
                <option>MM</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div className='credit-expiry-year-pk'>
              <select className='credit-expiry-select-tag-pk'>
                <option>YY</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
                <option>2031</option>
                <option>2032</option>
                <option>2033</option>
              </select>
            </div>
          </div>
        </div>
        <div className='credit-input-div-pk'>
          <div className='credit-name-div-pk'>
            <input className='card-no-inp-tag-pk' type='text' placeholder='NAME ON CARD'></input>
          </div>
          <div>
            <input className='card-no-inp-tag-pk credit-cvv-input-tag-pk' type='password' placeholder='CVV'></input>
            <img className='credit-cvv-img-tag-pk' src='https://pizzaonline.dominos.co.in/static/assets/icons/cvv.png'></img>
          </div>
        </div>
        <div className='credit-pay-btn-div-pk'>
          <Link to='/paymentCompleted'><button className='credit-pay-btn-pk'><span>PAY NOW</span></button></Link>
        </div>
    </div>
  )
}

export default DebitMode