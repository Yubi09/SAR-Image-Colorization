import './LoginSignup.css';
import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '@/utils/toast';

export const LoginSignup = () => {


  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSignup = async (e) => { 
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError('All fields are required');
    }
    if (password !== confirmPassword) {
      return handleError('Passwords do not match');
    }
    try {
      const url = 'http://localhost:8080/auth/signup';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();

      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  }
  
  

  return (
    <div className="login-container">
      {/* <div className="image-overlay">
        <p className="overlay-text">
          Sign Up today and colorize unlimited SAR images!
        </p>
      </div> */}
      <div className="login-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <img src={user_icon} alt="" />
            <input
              onChange={handleChange}
              type="text"
              name="name"
              id="username"
              autoFocus
              className="top-1"
              placeholder="Enter your name..."
              value={signupInfo.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              className="top-1"
              value={signupInfo.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <img src={password_icon} alt="" />
            <input
              type="password"
              className="top-1"
              id="password"
              name="password"
              placeholder="********"
              onChange={handleChange}
              value={signupInfo.password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <img src={password_icon} alt="" />
            <input
              name="confirmPassword"
              type="password"
              className="top-1"
              id="confirmPassword"
              placeholder="********"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <button type="submit">Sign Up</button>
          <span>
            Already have an account? <Link to={'/login'}>Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};
