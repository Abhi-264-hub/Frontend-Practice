
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from '../pages/signup';
import { Signin } from '../pages/signin';
import { Welcome } from '../pages/Welcome';
import './App.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
