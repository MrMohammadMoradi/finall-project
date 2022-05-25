import React from 'react'
//import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import 'bootstrap-icons/font/bootstrap-icons.css'

import Navbar from './components/Navbar';
import Carousel from './components/Carosel';
import Sidebar from './components/SideBar.jsx'
import MainText from './components/MainText';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <div className='container d-flex my-3'>
        <MainText/>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
