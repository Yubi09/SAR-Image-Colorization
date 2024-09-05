import React from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const LoginSignup = () => {
  return (
    <div className="login-container">
        <div className="image-overlay">
        <p className="overlay-text">Sign Up today and colorize unlimited SAR images!</p>
      </div>
    <div className="login-form">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <img src={user_icon} alt="" />
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <img src={email_icon} alt="" />
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <img src={password_icon} alt="" />
          <input type="password" id="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
  )
}
