import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { ToastContainer } from "react-toastify";

import './App.css';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
