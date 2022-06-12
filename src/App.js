import React from 'react'
//import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import 'bootstrap-icons/font/bootstrap-icons.css'

import Navbar from './components/Navbar';
import Carousel from './components/Carosel';
import Sidebar from './components/SideBar.jsx'
import MainText from './components/MainText';
import RecentCourses from './components/RecentCourses';
import OurColleagues from './components/OurColleagues';
import Footer from './components/Footer';
import WhyIeltsEase from './components/WhyIeltsEase';
import AnswerToWhy from './components/AnswerToWhy';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <div className='Archiv'>
        <div className='container d-flex my-3'>
          <MainText/>
          <Sidebar/>
        </div>
      </div>
      <WhyIeltsEase/>
      <RecentCourses/>
      <AnswerToWhy/>
      <OurColleagues/>
      <Footer/>
    </div>
  );
}

export default App;
