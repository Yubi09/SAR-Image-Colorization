import { useState } from 'react';
import './Login.css';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '@/utils/toast';
import { ToastContainer } from 'react-toastify';

const Auth = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError('All fields are required');
    }
    try {
      const url = 'http://localhost:8080/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();

      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="login-container">
      {/* <div className="image-overlay">
        <p className="overlay-text">
          Login today and colorize unlimited SAR images!
        </p>
      </div> */}
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <img src={email_icon} alt="" />
            <input
              name="email"
              type="email"
              id="email"
              className="top-1"
              placeholder="Email"
              onChange={handleChange}
              value={loginInfo.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <img src={password_icon} alt="" />
            <input
              name="password"
              type="password"
              id="password"
              className="top-1"
              placeholder="Password"
              onChange={handleChange}
              value={loginInfo.password}
            />
          </div>
          <button type="submit">Login</button>
          <span>
            Do not have an account? <Link to={'/signup'}>Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Auth;
