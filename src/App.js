import React from 'react'
//import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import 'bootstrap-icons/font/bootstrap-icons.css'

import Navbar from './components/Navbar';
import Carousel from './components/Carosel';

function App() {
  return (
    <div className="App bg-info">
      <Navbar/>
      <Carousel/>
    </div>
  );
}

export default App;
