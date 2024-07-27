import React from 'react';
import './HowItWorks.css'; // Import your CSS file
import sixthimg from '../NewHomePage/NewHomePageImages/girlmobile.png';

const HowItWorks = () => {
  return (
    <div className="hiw-container">
      <div className="hiw-text-section">
        <div className="hiw-text-item">
          <h3 style={{ color: "#3e2780",fontFamily:"'Open Sans',  sans-serif" ,fontWeight:"normal" }}>
            <span className="hiw-number">1</span> Complete CreditHaat eligibility form
          </h3>
          <p>Complete the simple form to discover eligible lenders</p>
        </div>
        <div className="hiw-text-item">
          <h3 style={{ color: "#3e2780",fontFamily:"'Open Sans',  sans-serif",fontWeight:"normal" }}>
            <span className="hiw-number">2</span> Choose lender and complete process
          </h3>
          <p>Verify KYC and income proof</p>
        </div>
        <div className="hiw-text-item">
          <h3 style={{ color: "#3e2780",fontFamily:"'Open Sans',  sans-serif",fontWeight:"normal"  }}>
            <span className="hiw-number">3</span> Same day approval
          </h3>
          <p>Same day approval and disbursal within 24 hours</p>
        </div>
      </div>
      <div className="hiw-image-section">
        <img src={sixthimg} className="hiw-img-fluid hiw-banner-img" alt="Second Image" />
      </div>
    </div>
  );
};

export default HowItWorks;
