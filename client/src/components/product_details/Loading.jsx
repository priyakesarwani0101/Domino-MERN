import React from 'react'
import {Box,Image,Flex, Heading} from '@chakra-ui/react'
import priya from './Gif/priya.gif.gif'

const Loading = () => {
     
      return (
         
          
            <Box  h='600px'>
              <Image w='100%' h='100%' m='auto'   src={priya} alt='gif'/>
               {/* <Heading  fontSize='100px' letterSpacing='2px' color='blue' textAlign='center'>Thank You From Domino'S Team</Heading> */}
            </Box>
            
           
           
         
      )
    }

export default Loading