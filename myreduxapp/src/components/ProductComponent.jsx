import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';


const ProductComponent = (product) => {

    const products = useSelector(state=> state.allProducts.products);
    const renderList = products.map(product=>{
        const { id, title, image, price, strikedPrice } = product
        console.log(product)
        return (
            <>
              <div className='main' key = {id}>
                <Link to={`/product/${id}`}>
                <div className='grid'>
                    <div className="card">
                        <div className='image'>
                            <img src={image} alt={title}/>
                        </div>

                            <div className='content'>
                                <p className='header'>{title}</p>
                                <div className='title-flex'>
                            
                                <h3 className='meta price'>₹{price}</h3>
                                <p className='striked-price'>₹{strikedPrice}</p>
                                </div>
                        </div>
                    </div>
                    
                </div>
                </Link>
            </div>
             <Outlet/>


            {/* // <>
            // <h3>{product.title}</h3>
            //  <img src={product.image} alt=""></img>
            // <h4>{product.brand}</h4>
            // </> */}

            </>
          )
        })
return <>{renderList}</>
  
}

export default ProductComponent;