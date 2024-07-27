import React from 'react';
import './UpcomingProducts.css'; // Import your CSS file
import upimg1 from "../NewHomePage/NewHomePageImages/upcomingproducts1.png";
import upimg2 from "../NewHomePage/NewHomePageImages/upcomingproducts2.png";
import upimg3 from "../NewHomePage/NewHomePageImages/upcomingproducts3.png";
import upimg4 from "../NewHomePage/NewHomePageImages/upcomingproducts4.png";

import NavBar from './NavBar';
import NewCityFooter from './newCityFooter';
import NewHomePageFooter from './NewHomePageFooter';

const UpcomingProducts = () => {
    return (
        <>
            <NavBar />
            <div className="UP-container">
                <div className="text-section1">
                    <h1>UPCOMING PRODUCTS OF <span style={{ color: "#3e2780"}}>CreditHaat</span></h1>
                </div>
                <div className="image-section">
                    <img src={upimg1} alt="CreditHaat Image" />
                </div>
            </div>

            <div className="UP-container">
                <div className="image-section">
                    <img src={upimg2} alt="CreditHaat Image" />
                </div>
                <div className="text-section1">
                    <h2>Loan Against Property</h2>
                    <p>Unlock the value of your property with our new Loan Against Property, offering low interest rates and flexible repayment options.</p>
                </div>
            </div>

            <div className="UP-container">
                <div className="image-section">
                    <img src={upimg3} alt="CreditHaat Image" />
                </div>
                <div className="text-section1">
                    <h2>Gold Loan</h2>
                    <p>Introducing our new Gold Loan – quick approvals, attractive interest rates, and flexible repayment plans to meet your financial needs.</p>
                </div>
            </div>

            <div className="UP-container">
                <div className="image-section">
                    <img src={upimg4} alt="CreditHaat Image" />
                </div>
                <div className="text-section1">
                    <h2>Investment Product</h2>
                    <p>Earn attractive returns through digital fixed deposit investments through CreditHaat. Start journey <a href="#">here.</a><br />
                    Build a corpus by investing in digital gold. Start journey <a href="#">here.</a></p>
                </div>
            </div>

            <div>
                <NewHomePageFooter />
                <NewCityFooter />
            </div>
        </>
    );
}

export default UpcomingProducts;
