import React from 'react'
import './Style/lowerNav.css'
const LowerNav = () => {
    const navArr=['veg pizzas','non veg pizzas', 'side orders','beverages','choice of toppings','pasta','pizzza mania', 'burger pizza','chicken wings','chicken lovers pizza','paratha pizza']
  return (
    <div className='lower_nav'>
      {navArr.map(e=><div><span></span>{e}</div>)}
    </div>
  )
}

export default LowerNav
