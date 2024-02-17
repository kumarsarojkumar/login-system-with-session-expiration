

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import './App.css';
function App() {
  
  return (
    <>
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </Router>
    
    <ToastContainer />
    </>
  );
}

export default App;
