  import React from 'react';


  export const productAction = (data,dispatch)=>{
     dispatch({
        type:"domino_data",
        payload:data,
     })
  }