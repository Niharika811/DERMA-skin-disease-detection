import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { CountrySelect, StateSelect, CitySelect } from 'react-country-state-city';
import { auth, database } from './config';
import '../css/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [countryid, setCountryid] = useState('');
  const [stateid, setStateid] = useState('');
  const [cityid, setCityid] = useState('');

  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Create a user object with additional data (excluding password)
    const userData = {
      fullName,
      mobileNo,
      address,
      email,
      password,
      age,
      countryid,
      stateid,
      cityid,
    };

    // Save user data to Firebase Realtime Database
    const userRef = ref(database, `users/${user.uid}`);
    await set(userRef, userData);

    // Redirect to login page
    navigate("/Signin");
  } catch (error) {
    console.error('Signup error:', error.message);
    // Implement error handling
  }
};


  return (
    <div className='signup-body'>

      <section className='signup-container'>
        <div>
          <h1>SIGN UP</h1>
          <form onSubmit={handleSignup}>
            <div className="row">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
             
                <input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="input-group">
              
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
        
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
      
            </div>

            <div className="row">
              <div className="input-group">
                <CountrySelect
                  className="select-dropdown"
                  onChange={(e) => setCountryid(e.id)}
                  placeHolder="Select Country" 
                />
              </div>
              <div className="input-group">
                <StateSelect
                  className="select-dropdown"
                  countryid={countryid}
                  onChange={(e) => setStateid(e.id)}
                  placeHolder="Select State"
                />
              </div>
              <div className="input-group">
                <CitySelect
                  className="select-dropdown"
                  countryid={countryid}
                  stateid={stateid}
                  onChange={(e) => setCityid(e.id)}
                  placeHolder="Select City"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-group">
            
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
             
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{' '}
            <Link to="/SignIn">Sign in</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Signup;
