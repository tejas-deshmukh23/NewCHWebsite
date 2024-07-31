import React from "react";
import './BusinessPartnerList.css'; // Import CSS for styling
import ABFL from "../NewHomePage/NewHomePageImages/abfl.png";
import Incred from "../NewHomePage/NewHomePageImages/Incred 1.png";
import Ltfs from "../NewHomePage/NewHomePageImages/lt.png";
import tatacapitalimage from "../NewHomePage/NewHomePageImages/tatacapitalimage.png";
import fibe from "../NewHomePage/NewHomePageImages/fibeimage.png";
import iiflimage from '../NewHomePage/NewHomePageImages/iiflimage.jpg';
import indifiimage from '../NewHomePage/NewHomePageImages/indifiimage.png';
import flexiloanimage from '../NewHomePage/NewHomePageImages/flexiLoanimage.png';

function BusinessPartnerList() {
    const images = [
        ABFL, Incred, Ltfs, tatacapitalimage, fibe,
        iiflimage, indifiimage, flexiloanimage
    ];

    return (
        <div className="partner-list-container">
        <h1 className="partner-heading" style={{ fontWeight: "normal" }}>45+ Partner lenders including</h1>
        <div className="marquee-container">
            <div className="marquee">
                <div className="marquee-content">
                    {/* Original images */}
                    <div className="brandboxes">
                        <img className="brand-img" src={ABFL} alt="ABFL" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={Incred} alt="Incred" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={Ltfs} alt="LTFS" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={tatacapitalimage} alt="Tata Capital" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={fibe} alt="Fibe" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={iiflimage} alt="IIFL" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={indifiimage} alt="Indifi" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={flexiloanimage} alt="Flexi Loan" />
                    </div>
                    
                    {/* Duplicate images for seamless effect */}
                    <div className="brandboxes">
                        <img className="brand-img" src={ABFL} alt="ABFL" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={Incred} alt="Incred" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={Ltfs} alt="LTFS" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={tatacapitalimage} alt="Tata Capital" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={fibe} alt="Fibe" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={iiflimage} alt="IIFL" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={indifiimage} alt="Indifi" />
                    </div>
                    <div className="brandboxes">
                        <img className="brand-img" src={flexiloanimage} alt="Flexi Loan" />
                    </div>

                    
                </div>
            </div>
        </div>
        <div className="view-all-container">
            <a href="/Allpartners" className="view-all-link">View All</a>
        </div>
    </div>
    
    
    );
}

export default BusinessPartnerList;
