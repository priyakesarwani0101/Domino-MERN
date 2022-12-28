import {legacy_createStore as store} from 'redux'
import ProductReducer from "../productReducer/product_reducer";


export const storeData = store(ProductReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());