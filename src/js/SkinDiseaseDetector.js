import React, { useState } from 'react';
import '../css/skindetection.css';
const SkinDiseaseDetector = () => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  
  const [response, setResponse] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

   
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3001/detect', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error uploading image');
      }
     
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    
    <div  className='skin-main'>
      <div className='skin-div' >
     
          <img src="image2.png" alt="Logo" className="img" />
       
          <div className='img-choosen'>
            <div className="img-choosen-img">
            {image && <img src={image} id='img-choosen-img2' alt="Chosen" />}
            </div>
          <label htmlFor="file-upload">Choose a Photo</label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        

      <button  className="skin-button"onClick={handleUpload}>Detect</button>
      {response && (
  <div>
    {response.detected ? (
      <div>
        <h2>Response:</h2>
        <p>Disease: {response.disease}</p>
        <p>Accuracy: {response.accuracy}%</p>
        <p>Medicine: {response.medicine}</p>
      </div>
    ) : (
      <p>No disease detected</p>
    )}
  </div>
)}

      </div >
      
    </div>
  );
};

export default SkinDiseaseDetector;
