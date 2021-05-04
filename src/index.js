import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import AboutUs from './components/AboutUs';
import Carousel from './components/Carousel';
import Results from './components/Results';
import Booking from './components/Booking';
import AdminPanel from './components/Admin/AdminPanel';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <SearchBar/>
    <AboutUs/>
        <img src="./img/landing.JPG" alt=""/>
        <hr/>
        <h1 style={{fontSize:'25px',marginLeft:'50px'}}><b>POPULAR PACKAGES</b></h1>
    <Carousel/>
        <hr/>
        <h1 style={{fontSize:'25px',marginLeft:'50px'}}><b>THINGS TO DO</b></h1>
    <Carousel/>
    <Footer/>
    <AdminPanel/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
