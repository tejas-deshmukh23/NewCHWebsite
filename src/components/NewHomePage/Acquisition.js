import React from 'react';
import './Acquisition.css'; // Import your CSS file
import NavBar from './NavBar';
import NewCityFooter from './newCityFooter';
import NewHomePageFooter from './NewHomePageFooter';
import Acq from '../NewHomePage/NewHomePageImages/acqimage.png';
import ilogo from '../NewHomePage/NewHomePageImages/India1Logo.png';

const Acquisition = () => {
    return (
        <div className='acq-page'>
            <NavBar />
            <div className="acq-container" >
                <div className="logo-sect">
                    <h1>Acquisition <br />partner</h1>
                    <div className='acq content' style={{fontSize:"20px", padding:"10px"}}>
            <p>We are proud to partner with India1, a leader in CreditHaat. With a commitment to excellence and a track record of success, India1 brings unparalleled expertise and innovative solutions to our collaborative efforts. Together, we aim to drive growth, enhance customer satisfaction, and achieve new milestones in our journey.</p>

            </div>
                </div>
                <div className="acqi-sect">
                    <img src={ilogo} style={{ height:"70%" , width:"100%",  paddingTop:"10px"}} alt="India1 Image"  />
                </div>
            </div>
           
            <NewHomePageFooter />
            <NewCityFooter />
        </div>
    );
}

export default Acquisition;
