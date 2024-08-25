import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets';
const Login = ({setLogin}) => {
    const [current, setCurrent] = useState("Sign Up");
  return (
    <div className='login'>
        <form className='login-container'>
            <div className='login-title'>
                <h2>{current}</h2>
                <img src={assets.cross_icon} onClick={()=>setLogin(false)} alt=''></img>
            </div>
            <div className='login-inputs'>
                {current === "Login"? <></>:<input type='text' placeholder='Your Name' required></input>}
                
                <input type='text' placeholder='Your Email' required></input>
                <input type='password' placeholder='Password' required></input>
            </div>
            <button>{current === "Sign Up"?"Create account":"Login"}</button>
            <div className='login-condition'>
                <input type='checkbox' required>
                </input>
                <p>By Continuing, i agree to all terms & privacy policy.</p>
            </div>
            {current === "Login"?
            <p>Create a new Account? <span onClick={()=>setCurrent("Sign Up")}>Click Here</span> </p>:
            <p>Already have an account? <span onClick={()=>setCurrent("Login")}>Login here</span> </p>}
            
            
        </form>

      
    </div>
  )
}

export default Login
