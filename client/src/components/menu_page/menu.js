import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import Footer from '../navbar/Footer/Footer'


const Menu = () => {
  return (
    <div>
      <div id="banner">
        <img
          src="https://www.dominos.co.in/theme2/front/images/home/Safety_Merchandising_adaptation_1514x240px.webp"
          alt="banner"
        />
      </div>

      <h1 style={{ color: "#d41b35", fontWeight: "bolder", fontSize: "40px",textAlign:"center",marginTop:"15px" }}>
        DOMINO'S MENU
      </h1>

      <div className="menuPage">
        <div className="menu">
          <h1 style={{textAlign:"center"}}>VEG PIZZA</h1>
          <img
            src="https://www.dominos.co.in/theme2/front/images/menu-images/my-vegpizza.webp"
            alt="veg_pizza"
          />
          <p style={{textAlign:"center"}}>
            A delight for veggie lovers! Choose from our wide range of delicious
            vegetarian pizzas, it's softer and tastier
          </p>
          <Link to="/menu/veg_pizza">
            <button id="menuBtn">VIEW ALL</button>
          </Link>
        </div>
        <div className="menu">
          <h1 style={{textAlign:"center"}}>NON-VEG PIZZA</h1>
          <img
            src="https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp"
            alt="nonveg_pizza"
          />
          <p style={{textAlign:"center"}}>
            Choose your favourite non-veg pizzas from the Domino's Pizza menu.
            Get fresh non-veg pizza with your choice of crusts & toppings
          </p>
          <Link to="/menu/non_veg_pizza">
            <button id="menuBtn">VIEW ALL</button>
          </Link>
        </div>
        <div className="menu">
          <h1 style={{textAlign:"center"}}>PIZZA MANIA</h1>
          <img
            src="https://www.dominos.co.in/theme2/front/images/menu-images/my-pizzamania.webp"
            alt="pizza_mania"
          />
          <p style={{textAlign:"center"}}>
            Indulge into mouth-watering taste of Pizza mania range, perfect
            answer to all your food cravings
          </p>
          <Link to="/menu/pizza_mania">
            <button id="menuBtn">VIEW ALL</button>
          </Link>
        </div>
        <div className="menu">
          <h1 style={{textAlign:"center"}}>FOOD AND BEVERAGES</h1>
          <img
            src="https://www.dominos.co.in/theme2/front/images/menu-images/sides_beverages.webp"
            alt="beverages"
          />
          <p style={{textAlign:"center"}}>
            Complement your pizza with wide range of sides & beverages available
            at Domino's Pizza India
          </p>
          <Link to="/menu/sides_beverages">
            <button id="menuBtn">VIEW ALL</button>
          </Link>
        </div>
        <div className="menu">
          <h1 style={{textAlign:"center"}}>PASTA</h1>
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Pasta-alla-vodka-f1d2e1c.jpg"
            alt="pasta"
          />
          <p style={{textAlign:"center"}}>
            Choose your favourite pizza pasta from the Domino's pasta menu. Get
            fresh non-veg pasta with your choice with creamy tomato, tikka
            masala, cheesy jalapeno and more.
          </p>
          <Link to="/menu/pasta">
            <button id="menuBtn">VIEW ALL</button>
          </Link>
        </div>
      </div>

       <Footer />
    </div>
  );
};

export default Menu;




