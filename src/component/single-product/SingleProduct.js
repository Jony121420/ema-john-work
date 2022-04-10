import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import ('./SingleProduct.css')

const SingleProduct = (props) => {
    const {loadCart, product}=props
    const {name, img, price, seller, ratings}=props.product
 
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <small>Manufacture: {seller}</small> <br />

            <small>Rating: {ratings}</small>
            </div>
            
            <button className='btn' onClick={()=>loadCart(product)}> <p>add to cart </p>
            <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon>
            </button>
           
          
        </div>
    );
};

export default SingleProduct;