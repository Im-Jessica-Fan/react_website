import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Private from './components/pages/Private';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/home" exact element={<Home/>} />
        <Route path="/about" exact element={<Home/>} />
        <Route path="/experience" exact element={<Home/>} />
        <Route path="/projects" exact element={<Home/>} />
        <Route path="/contact" exact element={<Home/>} />
        <Route path="/resume" exact element={<Home/>} />
        <Route path="/git-private" exact element={<Private/>} />
        <Route path="*" exact element={<NotFound/>} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
