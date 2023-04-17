import React from 'react'
import './style/register.css'
import register from '../Images/registerImage.png'
export default function Register() {
  return (
    <div className='register'>
      <div className="register-card">
        <div className="rcard">
          <div className="register-details">
            <h1>Register</h1>
            <form action="http://localhost:4000/register" method='post'>
            <input name='name' placeholder='Full Name'></input>
            <input name='email' placeholder='Email'></input>
            <input name='phone' placeholder='Phone Number'></input>
            <input name='password' placeholder='Password'></input>
            <input name='cpassword' placeholder='Confirm Password'></input>
            <button type='submit'>Register</button>
            </form>
          </div>
          <div className="register-photos">
            <img src={register} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
