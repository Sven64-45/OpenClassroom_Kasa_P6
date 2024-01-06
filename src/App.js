import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './pages/404';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* /Home */}
        <Route path="/" element={<Home />} />
        {/* /lodging */}
        <Route path="/logement/:id" element={<Lodging />} />
        {/* 404 page */}
        <Route path="*" element={<Error />} />
        {/* /about */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
