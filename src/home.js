// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <>
      <div>
        <div className='header'>
          <img src='DERMA.png' alt='header' className='header-image'/>
          <nav className='header-list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/Signup">Sign up</Link></li>
            <li><Link to="/SignIn">Sign in</Link></li>
          </nav>
        </div>
        <div className='image-container'>
          <img src='image2.png' alt="home1" className='home1' />
        </div>
        <div className='paragraph'>
          <h1>WELCOME!</h1>
          <p>At DERMA, we understand that skin health is more than skin deep. We are dedicated to providing you with expert dermatological care and valuable information to help you achieve healthy, glowing skin.</p> 
        </div>
        <div>
          <img alt='home' src='image-transformed2.png' className='home'></img>
        </div>
      </div>
    </>
  )
}

export default Home;
