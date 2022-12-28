import React from "react";

const ContextData = React.createContext();

export default ContextData;

function ContextProvider({ children }) {
  let [state, setState] = React.useState("veg_pizza");

  function handleMenuClick(value){
   setState(value);

  }

  return (
    <ContextData.Provider value={{ state, handleMenuClick }}>
      {children}
    </ContextData.Provider>
  );
}

export { ContextProvider };
