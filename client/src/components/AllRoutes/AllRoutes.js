import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Product from '../products/product'
import VegPizza from "../products/veg_pizza";
import NonvegPizza from "../products/non_veg_pizza";
import PizzaMania from "../products/pizza_mania";
import Pasta from "../products/pasta";
import Beverages from "../products/beverages";
// import Menu from './components/menu_page/menu'


function AllRoutes(){
    <Routes>
    <Route path="/menu" element={<Product />}></Route>
   <Route path="/menu/veg_pizza" element={<VegPizza />}></Route>
   <Route path="/menu/non_veg_pizza" element={<NonvegPizza />}></Route>
   <Route path="/menu/pizza_mania" element={<PizzaMania />}></Route>
   <Route path="/menu/pasta" element={<Pasta />}></Route>
   <Route path="/menu/sides_beverages" element={<Beverages />}></Route>
     

  </Routes>

}

export default AllRoutes;