import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
     Box,Image,Heading,Input,
    useDisclosure,
  } from '@chakra-ui/react'
  import './coupanPage.css'

  function CouponPage({props}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [coupan,setCoupan]=React.useState('')
    const[ applied,setApplied]=React.useState(false);
    const[ wrongCoupon,setWrongCoupon]=React.useState(false);


    let CheckCoupan=()=>{
     
        if(coupan==='DOMINO20'){
            setApplied(true);
            setTimeout(()=>{
               setApplied(false);
               localStorage.setItem("coupenApllied",true);
               props(true);
               onClose();
            },1500)
        }
        else{
            setWrongCoupon(true);
            setTimeout(()=>{
              onClose();
                setWrongCoupon(false);
                localStorage.setItem("coupenApllied",false);
                props(false);
             },1500)
            
        }
       
        // onClose;
    }
    return (
      <>
        <Box onClick={onOpen}>
        <span className='offer-text-upper-pk'>Select offer / Apply coupon</span>
                    <span className='offer-text-lower-pk'>Get discount with your order</span>
        </Box>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            {/* <ModalCloseButton /> */}
            <ModalBody>
               <Box borderRadius='10px'>
                 <Box>
                    <Image mt='20px' h='150px' src='https://www.dominos.co.in/theme2/front/images/voucherimages/giftcardbanner.png' alt='voucher image'/>
               </Box>
               <Box >
                    <Image h='100px' ml='30%' src='https://i.pinimg.com/originals/97/e2/0f/97e20f80e51dcaf17a3b78a860d8e43a.gif' alt='voucher image'/>
               </Box>
               <Box mt='10px'>
                    <Heading size='md' textAlign='center' color='#0d6efd'>Apply Coupon Code Here</Heading>
                    <Box mt='20px'>
                        <Input placeholder='Coupon Code' onChange={(e) => setCoupan(e.target.value)}/>
                    </Box> 
                    <Box mt='20px'  >
                         <Button ml='30%' color='#0d6efd' onClick={CheckCoupan}  >Apply Coupon </Button>
                    </Box> 
               </Box>
               </Box>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
               
            </ModalFooter>
            {applied?<Box className='Appliedcss' position='fixed' top='5%' left='45%' zIndex='50' bgColor='green' color='white' padding='1%' fontSize='1.3rem' borderRadius='8px' >
            Coupon Applied
        </Box>: ''}
        {wrongCoupon?<Box className='Appliedcss' position='fixed' top='5%' left='43%' zIndex='50' bgColor='red' color='white' padding='1%' fontSize='1.3rem' borderRadius='8px' >
             Wrong Coupon Code
        </Box>: ''}
          </ModalContent>
        </Modal>
       
      </>
    )
  }
  export default CouponPage