import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import './Inventory.css'


const Inventory = () => {
    const [user]=useAuthState(auth)
    return (
        <div className='form-container'>
            
            <form className='form' >
            <h2 className='form-title'>Shipment Details</h2>
                <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input  className='input' type="text" name="Your Name" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input  className='input' value={user?.email} readOnly type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="Address">Your Address</label>
                    <input  className='input'   type="text" name="Address" id="" required />
                 
                    
                </div>
                <div className="input-group">
                    <label htmlFor="Phone Number">Your Phone Number</label>
                    <input className='input'    type="number" name="Phone Number" id="" required />
                 
                    
                </div>
              
               
                <input className='form-submit' type="submit" value="Shipping" />
            </form>
        </div>
    );
};

export default Inventory;<h1>THis is a inventory page</h1>