import React from 'react';
import './App.css';
import Home from './components/Home.tsx';
import Requestify from './components/Requestify.tsx';
import TAAS from './components/TAAS.tsx';
import BackToTop from './components/BackToTop.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/requestify" element={<Requestify />} />
          <Route path="/taas" element={<TAAS />} />
        </Routes>
        <BackToTop/>
      </div>
    </Router>
  );
}

export default App;
