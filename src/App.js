import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import 'bootstrap-icons/font/bootstrap-icons.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IeltsEaseMainPage from './Pages/IeltsEaseMainPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<IeltsEaseMainPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
