import React from "react";
import './PartnerList.css'; // Import CSS for styling
import ABFL from "../NewHomePage/NewHomePageImages/abfl.png";
import Incred from "../NewHomePage/NewHomePageImages/Incred 1.png";
import Ltfs from "../NewHomePage/NewHomePageImages/lt.png";
import tatacapitalimage from "../NewHomePage/NewHomePageImages/tatacapitalimage.png";
import fibe from "../NewHomePage/NewHomePageImages/fibeimage.png";
import iiflimage from '../NewHomePage/NewHomePageImages/iiflimage.jpg';
import prefr from "../NewHomePage/NewHomePageImages/prefr.png";
import smartcoin from "../NewHomePage/NewHomePageImages/smart_coin_logo.png";
import moneyview from "../NewHomePage/NewHomePageImages/MoneyView-logo.png";
import kreditbee from "../NewHomePage/NewHomePageImages/KreditBee.png";

function PartnerList() {
    const images = [
        ABFL, Incred, Ltfs, tatacapitalimage, fibe, prefr, smartcoin, moneyview,
    ];

    return (
        <div className="ppartner-list-container">
        <h1 className="ppartner-heading" style={{ fontWeight: "normal" }}>45+ Partner lenders including</h1>
        <div className="pmarquee-container">
            <div className="pmarquee">
                <div className="pmarquee-content">
                    {/* Original images */}
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={ABFL} alt="ABFL" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={Incred} alt="Incred" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={Ltfs} alt="LTFS" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={tatacapitalimage} alt="Tata Capital" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={fibe} alt="Fibe" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={iiflimage} alt="iifl" />
                    </div>
                    
                    {/* Duplicate images for seamless effect */}
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={prefr} alt="prefr" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={smartcoin} alt="smartcoin" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={moneyview} alt="moneyview" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={kreditbee} alt="kreditbee" />
                    </div>

                     <div className="pbrandboxes">
                        <img className="pbrand-img" src={ABFL} alt="ABFL" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={Incred} alt="Incred" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={Ltfs} alt="LTFS" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={tatacapitalimage} alt="Tata Capital" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={fibe} alt="Fibe" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={iiflimage} alt="iifl" />
                    </div>
                    
                    {/* Duplicate images for seamless effect */}
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={prefr} alt="prefr" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={smartcoin} alt="smartcoin" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={moneyview} alt="moneyview" />
                    </div>
                    <div className="pbrandboxes">
                        <img className="pbrand-img" src={kreditbee} alt="kreditbee" />
                    </div>
                </div>
            </div>
        </div>
        <div className="pview-all-container">
            <a href="/NewAllPartners" className="pview-all-link">View All</a>
        </div>
    </div>
    
    
    );
}

export default PartnerList;
