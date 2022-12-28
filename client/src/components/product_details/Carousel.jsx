import Carousel from 'react-bootstrap/Carousel';
import {Box,Text} from '@chakra-ui/react'
import React from 'react'
import {useState,useRef} from 'react'
// import './carousel.css'
 import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample(props) {
  let price=props.price;
  let getPrice=price.getPrice;
  console.log({...price});
  let price1=price.price;
  // let{price,getPrice}=price;
  const [count,setCount]=React.useState(0);
    const [state1,setState1]=React.useState('ADD');
    const [state2,setState2]=React.useState('ADD');
    const [state3,setState3]=React.useState('ADD');
    const [state4,setState4]=React.useState('ADD');
    const [state5,setState5]=React.useState('ADD');
    const [state6,setState6]=React.useState('ADD');
    const [state7,setState7]=React.useState('ADD');
    const [state8,setState8]=React.useState('ADD');
    const change=useRef();
   let ChangeButton=()=>{
    
     if(state1==='ADD'){
    setState1('Remove')
    setCount(count+1);
    price1 +=50;
    getPrice(price1)
     }
     else if(state1==='Remove'){
      setState1('ADD');
      setCount(count-1);
      price1 -=50;
      getPrice(price1)
     }
   }
   let ChangeButton1=()=>{
     
    if(state2==='ADD'){
   setState2('Remove');
   setCount(count+1);
   price1 +=50;
    getPrice(price1)
    }
    else {
     setState2('ADD')
     setCount(count-1);
     price1 -=50;
    getPrice(price1)
    }
  }
  let ChangeButton2=()=>{
     
    if(state3==='ADD'){
   setState3('Remove')
   setCount(count+1);
   price1 +=50;
    getPrice(price1)
    }
    else {
     setState3('ADD')
     setCount(count-1);
     price1 -=50;
    getPrice(price1)
    }
  }
  let ChangeButton3=()=>{
     
    if(state4==='ADD'){
   setState4('Remove')
   setCount(count+1);
   price1 +=50;
    getPrice(price1)
    }
    else {
     setState4('ADD')
     setCount(count-1);
     price1 -=50;
    getPrice(price1)
    }
  }
  let ChangeButton4=()=>{
     
    if(state5==='ADD'){
   setState5('Remove')
   setCount(count+1);
   price1 +=50;
    getPrice(price1)
    }
    else {
     setState5('ADD')
     setCount(count-1);
     price1 -=50;
    getPrice(price1)
    }
  }
   
  let ChangeButton5=()=>{
     
    if(state6==='ADD'){
   setState6('Remove')
   setCount(count+1);
   price1 +=50;
    getPrice(price1)
    }
    else {
     setState6('ADD')
     setCount(count-1);
     price1 -=50;
    getPrice(price1)
    }
  }

  let ChangeButton6=()=>{
     
    if(state7==='ADD'){
   setState7('Remove')
   setCount(count+1);
   price1 +=50;
    getPrice(price1)
    }
    else {
     setState7('ADD')
     setCount(count-1);
     price1 -=50;
    getPrice(price1)
    }
  }

  let ChangeButton7=()=>{
     
    if(state8==='ADD'){
   setState8('Remove')
   setCount(count+1);
   price1 +=50;
    getPrice(price1)
    }
    else {
     setState8('ADD')
     setCount(count-1);
     price1-=50;
    getPrice(price1)
    }
  }




  return (
    <Carousel >
      <Carousel.Item  >
       <Box display='flex'  w='80%' height='200px' margin='auto'>
         <Box  onClick={ChangeButton}>
         <Text>Mushrooms</Text>
            <img
            border='1px solid black'
          className="d-block w-100"
          id='c1img'
          src="https://images.dominos.co.in/toppingsMushroom.jpg"
          alt="First slide"
        />
        <button ref={change} onClick={ChangeButton}>{state1}</button>
        </Box>
        <Box   onClick={ChangeButton1} >
        <Text>Onion</Text>
            <img
            border='1px solid black'
          className="d-block w-100"
          id='c1img'
          
          src="https://images.dominos.co.in/toppingsOnion.jpg"
          alt="First slide"
        />
        <button ref={change} key={1} onClick={ChangeButton1}>{state2}</button>
        </Box>
        <Box onClick={ChangeButton2} >
            <Text>Capsicum</Text>
            <img border='1px solid black'
          className="d-block w-100"
          id='c1img'
          src="https://images.dominos.co.in/toppingsCapsicum.jpg"
          alt="First slide"
        />
        <button ref={change} key={2} onClick={ChangeButton2}>{state3}</button>
        </Box>
        <Box  onClick={ChangeButton3}>
        <Text>Tomato</Text>
            <img
        border='1px solid black'
          className="d-block w-100"
          id='c1img'
          src="https://images.dominos.co.in/toppingsTomato.jpg"
          alt="First slide"
        />
        <button ref={change} key={3} onClick={ChangeButton3}>{state4}</button>
        </Box>
        </Box>
         
      </Carousel.Item>
      <Carousel.Item width='80%' margin='auto' >
      <Box display='flex'  w='80%' height='200px' margin='auto'>
         <Box onClick={ChangeButton4} >
         <Text>Paneer</Text>
            <img
            border='1px solid black'
          className="d-block w-100"
          id='c1img'
          src="https://images.dominos.co.in/toppingsPaneer.jpg"
          alt="First slide"
        />
        <button ref={change} key={4} onClick={ChangeButton4}>{state5}</button>
        </Box>
        <Box  onClick={ChangeButton5}>
        <Text>Red Pepper</Text>
            <img
            border='1px solid black'
          className="d-block w-100"
          id='c1img'
          src="https://images.dominos.co.in/toppingsPaparika.jpg"
          alt="First slide"
        />
        <button key={5} onClick={ChangeButton5}>{state6}</button>
        </Box>
        <Box  onClick={ChangeButton6}>
            <Text>Jalapeno</Text>
            <img border='1px solid black'
          className="d-block w-100"
          id='c1img'
          src="https://images.dominos.co.in/toppingsJalapeno.jpg"
          alt="First slide"
        />
        <button key={6} onClick={ChangeButton6}>{state7}</button>
        </Box>
        <Box  onClick={ChangeButton7}>
        <Text>Mushrooms</Text>
            <img
        border='1px solid black'
          className="d-block w-100"
          id='c1img'
          src="https://images.dominos.co.in/toppingsOlives.jpg"
          alt="First slide"
        />
        <button key={7} onClick={ChangeButton7}>{state8}</button>
        </Box>
        </Box>
         
      </Carousel.Item>
       
    </Carousel>
  );
}

export default UncontrolledExample;