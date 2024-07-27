import React from 'react';
import './TechnicalErrorPage.css'; // Import your CSS file for styling
import creditscoreimages from './NewHomePageImages/creditscoreimages.png';
import NewNavBar from '../NewHomePage/NavBar';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import NewCityFooter from './newCityFooter';
const TechnicalErrorPage = () => {
  return (
    <>
    <div className="tech-err">
    <NewNavBar />
    <div className="technical-error-container">
      <div className="tr-text-section">
        <h1>Technical Error</h1>
       <div className='tech-err-content'>
        <p>
        We are unable to locate your bureau score.It could be one of the following reason.<br></br>
        1) There is a technical error<br></br>2) You have entered incorrect details.  <span style={{color:'#3e2780'}}>Retry</span><br></br>
        To avail loans apply now
        </p>
        <button className="apply-button-t">Apply</button>
      </div>
      </div>
      <div className="image-section-t">
        <img
          src={creditscoreimages} // Replace with your image path
          alt="Technical Error Image"
        />
      </div>
      </div>
   
   
    <NewHomeFooter/>
    <NewCityFooter/>
    </div>
    </>
  );
};

export default TechnicalErrorPage;
