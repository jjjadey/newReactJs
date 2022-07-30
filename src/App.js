import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//pages
import HomePage from './pages/HomePage';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';

//component
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
