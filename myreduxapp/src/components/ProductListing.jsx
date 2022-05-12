import React, { useEffect } from 'react';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions';
import { useSelector } from 'react-redux';


//https://fakestoreapi.com/products/category/electronics
const ProductListing = () => {
  // const products = useSelector(state=> state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:3004/products')
                              .catch(err=>console.log(err))
      dispatch(setProducts(response.data))                        

    }
    useEffect(()=>{
        fetchProducts();
    }, []);

  return (
    <div className='ui grid container'>
      {/* {Object.values(products).map((product)=> ( */}
       
        <ProductComponent/>
       
        
      {/* product={product} key={product.id} */}
      {/* ))} */}
      
    </div>
  )
}

export default ProductListing