// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Signup from './Signup';
import SignIn from './SignIn';

function App() {
  return (
    <div>
      <Router>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/SignIn" element={<SignIn />} />
            </Routes>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
