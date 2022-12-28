import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import {store} from './Redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./components/menu_page/contextMenu/contextMenu";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Provider store={store}>
    
    <ChakraProvider>
      <ContextProvider>
    
      <App />
      </ContextProvider>
   
    </ChakraProvider>
    
 
  </Provider>
  
  </BrowserRouter>
 
  
   
  
);
