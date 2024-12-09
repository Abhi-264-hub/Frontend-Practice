
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from '../pages/signup';
import { Signin } from '../pages/signin';
import './App.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Welcome to the App!</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
