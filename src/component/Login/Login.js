import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import "./Login.css"

const Login = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
  let location = useLocation();


  let from = location.state?.from?.pathname || "/shop";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleLoginEmail=event=>{
        setEmail(event.target.value)
       

    }
    const handleLoginPassword=event=>{
        setPassword(event.target.value)

    }
    if(user){
        navigate(from, {replace: true});
    }
   
       const handleLoginSubmit=event=>{
           event.preventDefault()
           signInWithEmailAndPassword(email,password)
         
          
   
       }
    return (
        <div className='form-container'>
            <div>
         
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleLoginSubmit} >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleLoginEmail}   type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handleLoginPassword} type="password" name="password" id="" required />
                        <p style={{"color":"red"}}>{error?.message}</p>
                        {
                        loading && <p>Loading...</p>
                         }
                     
                    </div>
                   
                    <input className='form-submit' type="submit" value="Login" />
                   
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;