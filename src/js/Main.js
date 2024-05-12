import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Main.css';

function Main() {
    const navigate = useNavigate();

    const handleDetectClick = () => {
        navigate('/SkinDiseaseDetector'); // navigate to '/detection' route
    };

    return (
        <main className='main-body'>
            <div className="container">
                <h1 className="welcome-msg">Welcome to the Skin Disease Website</h1>
                <img src='image2.png' alt="main-img" className='main-img' />
                <p className="info-text">Find information about various skin diseases here.</p>
                <button className="get-started-btn" onClick={handleDetectClick}>Start detect</button>
            </div>
        </main>
        
    );
}

export default Main;

