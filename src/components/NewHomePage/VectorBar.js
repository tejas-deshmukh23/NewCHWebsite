// VectorBar.js

import React from 'react';
import './VectorBar.css'; // Ensure correct path to CSS file
import rupeeImage from '../NewHomePage/NewHomePageImages/rupee.png'; // Adjust path to image files
import homeCreditImage from '../NewHomePage/NewHomePageImages/homepng.png'; // Adjust path to image files
import homeCreditLimitImage from '../NewHomePage/NewHomePageImages/highcreditlimitpng.png'; // Adjust path to image files

const VectorBar = () => {
    return (
        <div className="vector-bar">
             <div className="vector-item">
            <img src={rupeeImage} alt="Rupee" className="vector-item" />
            <p>Lower Interest Rates</p>
            </div>
            <div className="vector-item">
            <img src={homeCreditImage} alt="Home Credit" className="vector-item" />
            <p>Easier Renting</p>
            </div>
            <div className="vector-item">
            <img src={homeCreditLimitImage} alt="Home Credit Limit" className="vector-item" />
            <p>Higher Credit Limits</p>
            </div>
        </div>
    );
}

export default VectorBar;
