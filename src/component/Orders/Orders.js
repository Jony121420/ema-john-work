import React from 'react';
import "./Orders.css"
import { useNavigate } from 'react-router-dom';


const Orders = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='margin'>THis is a orders <span onClick={()=>navigate("/inventory")}>page</span> </h1>
            
        </div>
    );
};

export default Orders;