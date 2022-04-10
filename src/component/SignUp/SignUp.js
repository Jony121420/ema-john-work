import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "./SignUp.css"


const SignUp = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
   
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleEmail=event=>{
        setEmail(event.target.value)
       

    }
    const handlePassword=event=>{
        setPassword(event.target.value)

    }
    const handleConfirmPassword=event=>{
        setConfirmPassword(event.target.value)

    }
    

 if(user){
     navigate("/shop")
 }

    const handleSubmit=event=>{
        event.preventDefault()
        createUserWithEmailAndPassword(email,password)
      
       

    }
  
    return (
        <div className='form-container'>
        <div>
     
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail}  type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword}   type="password" name="password" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPassword}   type="password" name="confirm-password" id="" required />
                 
                    
                </div>
              
               
                <input className='form-submit' type="submit" value="SignUp" />
            </form>
            <p>
                You already have an account? <Link className='form-link' to="/login">Please Login</Link>
            </p>
        </div>
    </div>
    );
};

export default SignUp;