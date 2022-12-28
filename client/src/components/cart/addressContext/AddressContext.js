import React, { createContext, useState } from 'react'

import Address from '../Address';
import Cart from '../cart';

export const addressContext=createContext();
export const AddressContext = () => {
    
    const [openaddress,setopenAdress]=useState(false);
    // const adressfunction=(value)=>{
    //     setopenAdress(value);
    // }

  return (
    <addressContext.Provider value={{setopenAdress,openaddress}}>
        <Cart/>
        <Address/>
    </addressContext.Provider>
  )
}
