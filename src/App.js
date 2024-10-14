import React from 'react';
import {Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import './App.css';
import './styles.scss';



function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </HashRouter>
  );
}

export default App;