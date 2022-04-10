import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleProduct from '../single-product/SingleProduct';
import ('./Shop.css')

const Shop = () => {
    const [products,setProducts]= useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
      fetch('products.json')
      .then(res=>res.json())
      .then(data=>setProducts(data))
    },[])
    const loadCart =(product)=>{
        const newCart =[...cart, product];
        setCart(newCart);
       
    }
    return (
        <div className="shop-container">
            <div className="products-container">
            {
        products.map(product=><SingleProduct key={product.id} loadCart={loadCart} product={product}></SingleProduct>)
      }
               
            </div>
            <div className="cart-container">
              
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;