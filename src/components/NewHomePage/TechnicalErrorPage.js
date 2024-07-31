import React from 'react';
import './TechnicalErrorPage.css'; // Import your CSS file for styling
import creditscoreimages from './NewHomePageImages/creditscoreimages.png';
import { useNavigate } from 'react-router-dom';

const TechnicalErrorPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/PersonalLoan'); // The path you want to navigate to
  };
  
  
  return (
    <>
    <div className="tech-err">
    <div className="technical-error-container">
      <div className="tr-text-section">
        <h1>Technical Error</h1>
       <div className='tech-err-content'>
        <p>
        We are unable to locate your bureau score.It could be one of the following reason.<br></br>
        1) There is a technical error<br></br>2) You have entered incorrect details.  <span style={{color:'#3e2780'}}><a href='/CreditScore' style={{textDecoration:"none",color:"#3e2780"}}> Retry</a></span><br></br>
        To avail loans apply now
        </p>
        <button onClick={handleClick} className="apply-button-t">Apply</button>
      </div>
      </div>
      <div className="image-section-t">
        <img
          src={creditscoreimages} // Replace with your image path
          alt="Technical Error Image"
        />
      </div>
      </div>
  
    </div>
    </>
  );
};

export default TechnicalErrorPage;
