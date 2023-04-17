import React, { useState } from 'react'
import './style/login.css'
import logingirl from '../Images/loginImage2.png'
import axios from 'axios'
import Home from './Home'
import { Link } from 'react-router-dom'

export default function Login() {

  const [lemail,setEmail]=useState("")
  const [lpassword,setPassword]=useState("")


  const onEmailChange=(e)=>{
      const val=e.target.value;
      setEmail(val)
  }
  const onPassChange=(e)=>{
      const val=e.target.value;
      setPassword(val)
  }
  const form=document.querySelector('form')
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:4000/login',({email:lemail,password:lpassword})).then((response)=>{
      console.log(response.data)
      if(response.data.success){
        alert('Logged In Successfully');
      }
      else{
        alert(response.data.message);
      }
    }).catch((err)=>{
      console.log('There is error',err)
    })
  }

  return (
    <div className='login'>
      <div className="login-card">
          <div className="lcard">
            <div className="login-photo">
              <img className='login-image' src={logingirl} alt="" />
            </div>
            <div className="login-details">
              <h1>Login</h1>
              <form action="http://localhost:4000/login" method='post' onSubmit={handleSubmit}>
              <input type='email' name="email" value={lemail} placeholder='Email' onInput={onEmailChange} />
              <input type='password' name="password" value={lpassword} placeholder='Password' onInput={onPassChange}/>
              <button className='login-detail-submit'>Submit</button>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}
