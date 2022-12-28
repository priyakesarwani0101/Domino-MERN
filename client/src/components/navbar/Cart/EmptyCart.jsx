import React from "react";
import './style/emptycart.css'
const EmptyCart = () => {
    
    return (
        <div className="empty_Cart_DIv" style={{ height: "100%",}}>
            <div> <img style={{ width: "80%", alignSelf: "right" }} src="https://www.blissmygift.com/public/frontend/images/empty-cart.png" alt="" /></div>
            <div className="empty_cart_details">
                <p style={{
                    fontSize: "1.5rem",
                    fontWeight: "900",
                    textTransform: "uppercase",
                    color: " black",
                    width: "100%",
                }}>YOUR CART IS EMPTY</p>
            </div>
            <div><p style={{

                fontSize: "1rem",
                color: "rgb(105, 129, 158)",
                paddingTop: "0.2rem",
                width: "100%",
            }}
            >Looks like you haven't added anything to your cart yet</p></div>
            <button >Go To Menu</button>
        </div>
    )
}
export default EmptyCart