import { combineReducers } from "redux";
import {productsReducer, selectedProductsReducer, cartreducer} from './productsReducer';



const reducers = combineReducers({
    allProducts: productsReducer, 
    product: selectedProductsReducer,
     cartreducer
    
})

export default reducers;

