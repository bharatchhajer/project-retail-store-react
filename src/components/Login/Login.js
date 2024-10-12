import './Login.css'
import { useNavigate } from 'react-router-dom';
import React from 'react'

function Login({setSignedIn,setUid,setDefaultName}) {
  
    const navigate = useNavigate()
  
    function login(e){
      e.preventDefault(true)
      e.target.form.reset()
      navigate("/")

    }
  
    return (
      <div className="login__container">
        <h2 >Login</h2>
        <form className="login">
          <div className="login__form" >
            <label htmlFor="email">Email</label>
            <input type="email" name="email"  />
            <label htmlFor="password">Password</label>
            <input type="password" name="password"  />
            <button  onClick={ login }>login</button>   
          </div>   
        </form>
      </div>
    )
  }
  
  export default Login