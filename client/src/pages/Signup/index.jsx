import './LoginSignup.css';
import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import { useState } from 'react';
import Axios from 'axios';
export const LoginSignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

  };

  return (
    <div className="login-container">
      <div className="image-overlay">
        <p className="overlay-text">
          Sign Up today and colorize unlimited SAR images!
        </p>
      </div>
      <div className="login-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <img src={user_icon} alt="" />
            <input
              type="text"
              id="username"
              className='top-1'
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <img src={email_icon} alt="" />
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className='top-1'
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <img src={password_icon} alt="" />
            <input
              type="password"
              className='top-1'
              id="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="top-1">
            Already Signed up? <a href="/auth/login">Login</a>
          </p>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
