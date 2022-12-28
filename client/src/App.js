import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarContext from "./components/navbar/Context/NavbarContext";
import Footer from "./components/footer/Footer/Footer";
import {Routes,Route} from 'react-router-dom'
import Product from './components/products/product'
import VegPizza from "./components/products/veg_pizza";
import NonvegPizza from "./components/products/non_veg_pizza";
import PizzaMania from "./components/products/pizza_mania";
import Pasta from "./components/products/pasta";
import Beverages from "./components/products/beverages";
import Cart from './components/cart/cart';
import Address from "./components/cart/Address";
import Payment from "./components/cart/payment";
import Home from "./components/landing_pg/home";
import ResetPasswordForm from "./components/landing_pg/Login/Login";
import {AddressContext} from './components/cart/addressContext/AddressContext'
import PaymentDone from "./components/cart/PaymentDone";
import Cash from './components/cart/Cash';
import CreditMode from './components/cart/CreditMode';
import DebitMode from './components/cart/DebitMode';


// import AuthContext from "./components/landing_pg/LoginContext/LoginContext";



 function App() {


   return (
    <div className="App">
       
      
      
       <NavbarContext />
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
       <Route path="/menu" element={<Product />}></Route>
       <Route path="/menu/veg_pizza" element={<VegPizza />}></Route>
       <Route path="/menu/non_veg_pizza" element={<NonvegPizza />}></Route>
       <Route path="/menu/pizza_mania" element={<PizzaMania />}></Route>
       <Route path="/menu/pasta" element={<Pasta />}></Route>
       <Route path="/menu/sides_beverages" element={<Beverages />}></Route>
       <Route path="/cart" element={<AddressContext />}></Route>
       <Route path="/payment" element={<Payment />}>
        <Route path="/payment/" element={<Cash />}></Route>
        <Route path="/payment/debit" element={<DebitMode />}></Route>
        <Route path="/payment/credit" element={<CreditMode />}></Route>
       </Route>
        <Route path="/login" element={<ResetPasswordForm />}></Route>
         <Route path="/paymentCompleted" element={<PaymentDone />}></Route>
         
      </Routes>

    

    </div>

   );
 }

 export default App;


