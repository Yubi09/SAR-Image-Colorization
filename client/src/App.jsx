import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import HomePage from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
