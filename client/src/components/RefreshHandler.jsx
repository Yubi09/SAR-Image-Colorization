import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RefreshHandler = ({ setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
      if (
        location.pathname === '/login' ||
        location.pathname === '/signup' ||
        location.pathname === '/'
      ) {
        navigate('/home');
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
};

export default RefreshHandler;
