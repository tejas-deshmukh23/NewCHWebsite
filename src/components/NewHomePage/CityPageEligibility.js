import React from "react";
import './CityPageEligibility.css';

const CityPageEligibility = () => {
  return (
    <div className="firstcomp-city">
      <table class="table-center">
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
              <li style={{fontSize: "18px"}}><p>Above 21 years of age</p></li>
              <li style={{fontSize: "18px"}}><p>Minimum monthly income - ₹12,000</p></li>
              <li style={{fontSize: "18px"}}><p>Residence - must be a resident of India</p></li>
              <li style={{fontSize: "18px"}}><p>Interest rate starting from 10.99% p.a.</p></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default CityPageEligibility;
