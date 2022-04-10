import React from 'react';
import "./Cart.css"

const Cart = (props) => {
   
    const{cart}=props;
 
 
   let total = 0;
   let shipping =0;
 
  
   for(const product of cart){
       total = total + product.price;
       shipping = shipping + product.shipping;
   
      

   }
   const tax = parseFloat((total *0.1).toFixed(2))
   const grand = (total + shipping + tax).toFixed(2);
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p> selected item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grand}</h4>

            
        </div>
    );
};

export default Cart;