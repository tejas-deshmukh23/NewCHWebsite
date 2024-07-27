import React from "react";
import './BlCityPageEligibility.css';

const BlCityPageEligibility = () => {
  return (
    <div className="firstcomp-Bl-city">
      <table class="table-center-bl">
      <thead>
        <tr>
          <th style={{fontWeight:"normal",color:"#3e2780"}}>Eligibility criteria</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <br></br>
              <li style={{fontSize: "18px"}}><p>Age - 21 to 62 years</p></li>
              <li style={{fontSize: "18px"}}><p>Minimum monthly income - ₹18,000</p></li>
              <li style={{fontSize: "18px"}}><p>Interest rate starting from 15% p.a.</p></li>
              <li style={{fontSize: "18px"}}><p>Residence - must be a resident of India</p></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default BlCityPageEligibility;
