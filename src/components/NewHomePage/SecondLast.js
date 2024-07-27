import React from 'react';
import './SecondLast.css'; // Import CSS file for styling
import image1 from './NewHomePageImages/lastone.png';
import image2 from './NewHomePageImages/lasttwo.png';
import image3 from './NewHomePageImages/lastthree.png';
import image4 from './NewHomePageImages/lastfive.png';

const imageFiles = [
  { src: image1, text: "Personal loan EMI calculator" },
  { src: image2, text: "Gold loan EMI calculator" },
  { src: image3, text: "Business loan EMI calculator" },
  { src: image4, text: "Education loan EMI calculator" },
];

const SecondLast = () => {
  return (
    <div className="image-grid-sec">
      {/* First row */}
      <div className="row1">
        {imageFiles.slice(0, 2).map((image, index) => (
          <div key={index} className="image-container-sec">
            <img src={image.src} alt={`Image ${index + 1}`} />
            <p className="image-text-sec"><a href="/emiCalci" style={{ textDecoration: 'none',color:"#000000a6" }}>{image.text}</a></p>
          </div>
        ))}
      </div>

      {/* Second row */}
      <div className="row1">
        {imageFiles.slice(2, 4).map((image, index) => (
          <div key={index + 2} className="image-container-sec">
            <img src={image.src} alt={`Image ${index + 3}`} />
            <p className="image-text-sec"><a href="/emiCalci" style={{ textDecoration: 'none',color:"#000000a6" }}>{image.text}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondLast;
