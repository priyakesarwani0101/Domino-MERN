import React,{useState} from 'react'
import UncontrolledExample from './Carousel'
import {Button,Image,Heading,Text,Textarea,DrawerFooter,Select,DrawerCloseButton,InputRightAddon,InputLeftAddon,InputGroup,Input,Box,FormLabel,Drawer,DrawerHeader,DrawerBody,DrawerOverlay,useDisclosure,Stack,DrawerContent, localStorageManager} from '@chakra-ui/react'
import CouponPage from './CouponPage'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {addToCart} from '../../Redux/action'
import './Detailsp.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Carousel from './Carousel'
//  const details = () => {
//    return (
//      <div>hi</div>
//    )
//  }
function Detailsp({props}) {

  const [added,setAdded] = useState(false);
  const cartData=useSelector((state)=>{
    return  state.cartArr;
  })

  const dispatch=useDispatch();

     console.log(props);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const sizeRef=React.useRef();
    
    const[extraprice,setExtraPrice]=React.useState(0);
    const[size,setSize]=React.useState('Regular');
    
    const[crust,setCrust]=React.useState('false');
    const[productData,setProductData]=React.useState(props.price);
    const[sizePrice,setSizePrice]=React.useState(productData);
    const[price,setPrice]=React.useState(productData);
    let getPrice=(v)=>{
       console.log(v);
       setPrice(v);
    }

    let id=useParams();

       let getData= async(id)=>{
         let res=await fetch('');
         let data=await res.json();
         setProductData(data);

       }

   let handleClick = ()=>{
    onClose();
    setAdded(true);
    // alert("Added to cart");
     setTimeout(() => {
       setAdded(false)
     }, 2000);
 
 fetch("http://localhost:3002/cartItems",
 {
  method:"POST",
  body:JSON.stringify(props),
  headers:{
    "Content-Type":"application/json",
  }
 }
 
 
 )

 
 const fetchdata=async(url)=>{
  try{
    const res= await fetch(url);
  const data=await res.json();
  dispatch(addToCart(data))
  }catch(e){
    console.log(e);
  }
  }
  fetchdata("http://localhost:3002/cartItems")

   }
  
    return (
      <>
      <Box>
        <Button  color="#0b639c" border="2px solid #0b639c" onClick={onOpen}>
         Details
        </Button>
         
        </Box>
        <Drawer 
          isOpen={isOpen}
          placement='left'
          initialFocusRef={firstField}
          onClose={onClose}
          size='lg'
           
          overflow-y='scroll'
          
        >
          <DrawerOverlay />
          <DrawerContent overflowY='scroll'  className="drawer"  >
            {/* <DrawerCloseButton /> */}
            {/* <DrawerHeader borderBottomWidth='1px'> */}
            <Box boxSize='sm' w="96%" h="250px" position='relative' >
               <Image ml='10px'   objectFit='cover' m='auto' w="100%" h="200px" src={props.image} alt='Dan Abramov'  />
               <Heading color='white' ml='50px' mt='-70px' bg="green" position='absolute'>₹ {price }</Heading>
               </Box>

               <Box ml='10px'>{"The 4 Cheese Pizza"}</Box>
               <Text ml='10px'>  Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of Ghost Pepper flavoured Cheese  </Text>
                <Box w='80%' margin='auto'>
                    <Heading size='sm'>Select Size</Heading >
                    <Box w='80%' display='flex' gap='5px'>
                        <Box  display='flex' border='1px solid grey' onClick={()=>{setSize('Regular');setPrice(productData)}} ><Image w='50%' src='https://www.slideteam.net/media/catalog/product/cache/1280x720/p/i/pizza_with_toppings_line_icon_slide01.jpg' alt='pizza icon'/>
                       <Box> <Heading size='s' >Regular</Heading>
                        <Text>Serves 1</Text></Box></Box>
                        <Box display='flex' border='1px solid grey' onClick={()=>{setSize('Medium');setPrice(3/2*(productData))}}><Image w='50%' src='https://www.slideteam.net/media/catalog/product/cache/1280x720/p/i/pizza_with_toppings_line_icon_slide01.jpg' alt='pizza icon'/>
                       <Box> <Heading size='s' >Medium</Heading>
                        <Text>Serves 2</Text></Box></Box>
                        <Box display='flex' border='1px solid grey' onClick={()=>{setSize('Large');setPrice(2*(productData))}}><Image w='50%' src='https://www.slideteam.net/media/catalog/product/cache/1280x720/p/i/pizza_with_toppings_line_icon_slide01.jpg' alt='pizza icon'/>
                       <Box> <Heading size='s' >Large</Heading>
                        <Text>Serves 4</Text></Box></Box>
                    </Box>
                </Box>
                <Box w='80%' margin='auto'>
                    <Heading size='sm'>Select Crust</Heading >
                    <Box w='80%' display='flex' gap='5px'>
                        <Box  display='flex' border='1px solid grey' onClick={()=>{}} > 
                       <Box> <Text size='s' color='#93afc1' >New Hand Tossed</Text>
                        <span style={{backgroundColor:'green',color:'white',marginLeft:"30%"}}> ₹ {price}</span></Box></Box>
                        <Box  display='flex' border='1px solid grey' onClick={()=>{if(size==='Regular'&& crust==='false'){setPrice(price+50) ;setCrust('true')} else if(size==='Medium' && crust==='false'){setPrice(price+40) ;setCrust('true')}else if(size==='Large' && crust==='false'){setPrice(price+80);setCrust('true')}
                        }} > 
                       <Box> <Text size='s' color='#93afc1' >100% Wheat Thin Crust</Text>
                        <span style={{backgroundColor:'green',color:'white',marginLeft:"30%"}}> ₹ {price}</span></Box></Box>
                        <Box  display='flex' border='1px solid grey' onClick={()=>{}} > 
                       <Box> <Text size='s' color='#93afc1' >New Hand Tossed</Text>
                        <span style={{backgroundColor:'green',color:'white',marginLeft:"30%"}}> ₹ {price}</span></Box></Box>
                    </Box>
                </Box>
                <Box ml='60px'><Heading size='sm'>Add Veg Toppings @  ₹ 50.00 each  </Heading> </Box>
                <Box>
                    <UncontrolledExample  price={{price,getPrice}}/>
                </Box>
                
            <DrawerFooter borderTopWidth='1px' w='100%' border=" 2 px solid black">
              {/* <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button> */}
              <Box backgroundColor='green' height='50px' w='100%' display='flex' justifyContent='space-between' bottom='0px' z-index='1000' >
                <Box w='30%' ml='50px' mt='10px'color='white' letterSpacing='3px'> ₹ {price} | {1} ITEM </Box>
              <Button colorScheme='Green' mt='5px' mr='10px' border='1px solid white' onClick={handleClick}>ADD TO CART</Button>
              </Box>
            </DrawerFooter>
          </DrawerContent>
        
        </Drawer>
         
        {added ? <Box className='addToCartBtn' position='fixed' top='15%' left='45%' zIndex='50' bgColor='#0b639c' color='white' padding='1%' fontSize='1.3rem' borderRadius='8px' >
            Added to cart
        </Box> : null}

      </>
   )
 }

export default Detailsp;