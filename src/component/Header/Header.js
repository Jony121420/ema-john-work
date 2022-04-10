import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink} from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import logo from  "../../images/Logo.svg"
import "./Header.css"

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
      };
  
    return (
        <div className='header-div'>
            <nav className='header'>
                <img src= {logo} alt="" />
                <div>
                   
                  <NavLink className={({isActive})=> isActive ? "active-link" : "link"} to='/shop'>Home</NavLink>
                   <NavLink className={({isActive})=> isActive ? "active-link" : "link"}  to='/orders'>Orders</NavLink>
                 
                   <NavLink className={({isActive})=> isActive ? "active-link" : "link"}  to='/inventory'>Inventory</NavLink>
                
                   <NavLink className={({isActive})=> isActive ? "active-link" : "link"}  to='/about'>About</NavLink>
                   {
                       user? <button className='logout' onClick={handleLogOut}>Logout</button>:
                       
                       <NavLink className={({isActive})=> isActive ? "active-link" : "link"}  to='/login'>Login</NavLink>}

                </div>
            </nav>
        </div>
    );
};

export default Header;