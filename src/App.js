import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;