import React from 'react'
//import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import 'bootstrap-icons/font/bootstrap-icons.css'

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-info">
      <Navbar/>
    </div>
  );
}

export default App;
