import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="content-container">
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
