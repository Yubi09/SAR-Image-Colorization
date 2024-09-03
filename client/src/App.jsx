import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import './App.css';
import Auth from './pages/Auth';
import { LoginSignup } from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<Auth/>} />
        <Route path="/auth/signup" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
