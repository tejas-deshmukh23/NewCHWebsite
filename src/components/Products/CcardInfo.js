import React, { useState } from 'react';
import './CcardInfo.css';
import ploaniagetwo from './ProductsImages/benefit.png';
import ploanimagethree from './ProductsImages/ploanimagethree.png';
import ploanimagefour from './ProductsImages/ploanimagefour.png';
function CcardInfo(){
    return(
        <>

{/**----------------------------why choose us------------------------------ */}
<div className="ploan-why-choose-us">
          <h1>Why choose us?</h1>
          <div className="ploan-features">
            <div className="ploan-feature">
              <img src={ploaniagetwo} alt="Feature 1" />
              <h4>Better rewards</h4>
              <p>Unlock exceptional rewards with our credit card, offering points on every purchase.</p>
            </div>
            <div className="ploan-feature">
              <img src={ploanimagethree} alt="Feature 2" />
              <h4>Quick And easy</h4>
              <p>Hassle free online loan application process. Simple and paperless process with quick approvals.</p>
            </div>
            <div className="ploan-feature">
              <img src={ploanimagefour} alt="Feature 3" />
              <h4>Secure process</h4>
              <p>Your personal and financial information is protected with stringent security measures.</p>
            </div>
          </div>
        </div>

{/**-------------------info section------------------------------------- */}  
    <div className="info">
<h2>Single <span style={{color:"#3e2780"}}> window</span> for multiple <span style={{color:"#3e2780"}}> offers!</span></h2>
<p>CreditHaat is on a mission to enable credit to every creditworthy Indian.
Working with multiple banks and fintechs <br/>CreditHaat helps users avail the best secured and unsecured cards.</p>
</div>
</>
    );
}
export default CcardInfo;
