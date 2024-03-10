import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database'; 
import { Link } from 'react-router-dom';

const Signup = ({ auth, database }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      };

      // Save user data to Firebase Realtime Database
      const userRef = ref(database, `skin-app-b814e-default-rtdb.firebaseio.com/${user.uid}`);
      await set(userRef, userData);

      console.log('User created successfully:', user);
      navigate('/SignIn'); // Redirect to login page
    } catch (error) {
      console.error('Signup error:', error.message);
      // Implement robust error handling (e.g., display user-friendly messages)
    }
  };

  return (
    <main>
      <section>
        <div>
          <h1>SKINAPP</h1>
          <form onSubmit={handleSignup}>
            <div>
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="mobile-no">Mobile Number</label>
              <input
                type="tel" // Input type for phone numbers
                id="mobile-no"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email-address">Email address</label>
              <input
                type="email"
                id="email-address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{' '}
            <Link to="/SignIn">Sign in</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;