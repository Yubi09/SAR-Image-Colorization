import React from 'react'
import './Login.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const Login = () => {
  return (
    <div className="login-container">
        <div className="image-overlay">
        <p className="overlay-text">Login today and colorize unlimited SAR images!</p>
      </div>
    <div className="login-form">
      <h2>Login</h2>
      <form>
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
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  )
}
