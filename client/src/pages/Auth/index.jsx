import { useState } from 'react';
import './Login.css';
import { toast } from 'sonner';
import { apiClient } from '../../lib/api-client';
import { LOGIN_ROUTE } from '../../../utils/constants';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = () => {
    if (!email.length) {
      toast.error('Email is required.');
      return false;
    }
    if (!password.length) {
      toast.error('Password is required.');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (validateLogin()) {
      const response = await apiClient.post(LOGIN_ROUTE, { email, password });
    }
  };

  return (
    <div className="login-container">
      <div className="image-overlay">
        <p className="overlay-text">
          Login today and colorize unlimited SAR images!
        </p>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <img src={email_icon} alt="" />
            <input
              type="email"
              id="email"
              className="top-1"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <img src={password_icon} alt="" />
            <input
              type="password"
              id="password"
              className="top-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="top-1">
            Do not have an account? <a href="/auth/signup">Signup</a>
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
