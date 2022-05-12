import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions';
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import Cart from './Cart';
import { ADD } from '../redux/actions';
import './ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams();
    let product = useSelector(state => state.product);
    const { image, title, price, category, description, brand, rating } = product
    const dispatch = useDispatch();
    // console.log(product);

     const send = (e)=> {
         console.log(e)
         dispatch(ADD(e));
     }

    const fetchProductDetails = async (id) => {
      const response = await axios
        .get(`http://localhost:3004/products/${id}`)
        .catch(err=> console.log(err))
      dispatch(selectedProduct(response.data));  
    }
    useEffect(()=> {
        if(id && id!==""){
            fetchProductDetails(id)
        }
    }, [id]);
  return (
    <>
      
      <div className="ui grid container">
          {Object.keys(product).length === 0 ? (
              <div className="ui active centered inline loader"></div>
          ) : (
              <div className="ui placeholder segment">
                  <div className="ui two column stackable center aligned grid">
                      <div className="ui vertical divider">AND</div>
                      <div className="middle">
                          <div className="column1">
                              <img className="ui fluid image" src={image}/>
                          </div>
                          <div className="column2">
                              <h1>{title}</h1>
                              <br/>
                              <span className="brand-rating"><p>BRAND: {brand}</p> <p>Rating: {rating}</p></span>
                              <br/>
                              <h2>
                                  <a className="ui teal tag label">₹{price}</a>
                              </h2>
                              <br/>
                              <p>{description}</p>
                              <br/>
                              <div className="animated-button" tabIndex="0">
                                  <div className="hidden content">
                                      <i className="shop icon"></i>
                                  </div>
                                  {/* <div className="visible content">Add To Cart</div> */}
                                  <button style={{fontSize:"25px", padding:"10px 30px ", fontWeight: "bold"}} 
                                   onClick={()=>send(product)}>Add To Cart</button>     
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </div>
   
    </>
  );
}

export default ProductDetails