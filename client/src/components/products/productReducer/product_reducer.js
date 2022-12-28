
var initialData = {
   
   domino_data:{}

}

const ProductReducer = (storeData=initialData,action)=>{

    switch(action.type) {
       case "domino_data" : {
        return {
            ...storeData,
           domino_data: action.payload
        }
       }

       default : 
       return storeData;

    }
    
     
    
  
}
export default ProductReducer;