import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/home" exact element={<Home/>} />
        <Route path="/about" exact element={<Home/>} />
        <Route path="/experience" exact element={<Home/>} />
        <Route path="/projects" exact element={<Home/>} />
        <Route path="/contact" exact element={<Home/>} />
        <Route path="/resume" exact element={<Home/>} />
        {/* <Route path="*" exact element={<NotFound/>} /> */}
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
