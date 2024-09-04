import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import './App.css';
import Auth from './pages/Login';
import { LoginSignup } from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signup" element={<LoginSignup />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  );
}

export default App;
