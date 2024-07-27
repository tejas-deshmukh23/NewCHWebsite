import React from "react";
import './PartnerList.css'; // Import CSS for styling
import ABFL from "../NewHomePage/NewHomePageImages/abfl.png";
import Incred from "../NewHomePage/NewHomePageImages/Incred 1.png";
import Ltfs from "../NewHomePage/NewHomePageImages/lt.png";
import tatacapitalimage from "../NewHomePage/NewHomePageImages/tatacapitalimage.png";
import fibe from "../NewHomePage/NewHomePageImages/fibeimage.png";

function PartnerList() {
    return (
        <div className="partner-list-container">
            <h1 className="partner-heading" style={{fontWeight:"normal"}}>45+ Partner lenders including</h1>
            <div className="lenders">
                <div className="brandcontainer">
                    <div className="brandboxes">
                        <img className="brand-img" src={ABFL} alt="ABFL" />
                    </div>

                    <div className="brandboxes">
                        <img className="brand-img" src={Incred} alt="Incred" />
                    </div>

                    <div className="brandboxes">
                        <img className="brand-img" src={Ltfs} alt="itfs" />
                    </div>

                    <div className="brandboxes">
                        <img className="brand-img" src={tatacapitalimage} alt="tatacapital" />
                     </div>

                    <div className="brandboxes">
                        <img className="brand-img" src={fibe} alt="fibe" />
                    </div>
                </div>
            </div>
            <div className="view-all-container">
                <a href="/Allpartners" className="view-all-link">View All</a>
            </div>
        </div>
    );
}

export default PartnerList;
