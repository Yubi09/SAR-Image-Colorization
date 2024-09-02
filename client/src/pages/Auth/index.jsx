import { useState } from 'react';
import { toast } from 'sonner';
import { apiClient } from '../../lib/api-client';
import { SIGNUP_ROUTE } from '../../../utils/constants';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateSignup = () => {
    if (!email.length)
    {
      toast.error('Email is required.');
      return false;
    }
    if (!password.length)
    {
      toast.error('Password is required.');
      return false;
    }
    if (password !== confirmPassword)
    {
      toast.error('Passwords do not match.');
      return false;
    }
    return true;
  }


  const handleSignup = async () => {
    if (validateSignup())
    {
      const response = await apiClient.post(SIGNUP_ROUTE, { email, password });
    }
  };


  return (
    <div>
      <h3>AUTHENTICATION PAGE HERE!!!</h3>
    </div>
  );
};

export default Auth;
