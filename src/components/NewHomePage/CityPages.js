import React, { useEffect, useState } from 'react';
import './CityPages.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

import NewNavBar from '../NewHomePage/NavBar';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import creditscoreimages from './NewHomePageImages/banglurucity.png'; // Import your city image
import Partnerlist from '../NewHomePage/PartnerList';
import SecondLast from './SecondLast';
import CityPageEligibility from './CityPageEligibility';
import MoreInformation from './MoreInformation';
import {Link} from "react-router-dom";
import PersonalLoan from '../Products/PLoanEMI';
import NewCityFooter from './newCityFooter';
import PersonalLoanInfo from '../Products/PersonalLoanInfo';

import { useParams } from 'react-router-dom';
import axios from 'axios';


const CityPages = () => {

  const [cityDetails, setCityDetails] = useState(null);

  const { city } = useParams(); // Extracts the city from the URL

  // console.log(city);
  useEffect(()=>{
    // const { city } = useParams();
    console.log(city);
    getPersonalLoanCityInfo(city);
  },[])

  const faqData = [
    { question: 'What is the qualification criteria for personal loans?',  answer: (
      <>
        <p>
          1. You can check out the lenders where your eligibility is matched from the <Link to="/newploanproduct" className="no-underline-link" style={{ textDecoration: 'none' }}>personal loan eligibility form</Link>. 
          You can also check your credit score from the <Link to="/creditscore">check credit score page</Link>.
        </p>
      </>
    )
  },
  { question: 'How can I find if I am qualified for a personal loan?',  answer: (
    <>
        <p>1. Documents required for a personal loan may differ depending on your profession. For salaried individuals, the following documents are required:</p>
        <p>1. For Salaried Individual</p>
        <ul>
            <li>Proof of identity:</li>
            <ul>
            <li> Driver’s license, Passport, PAN Card, Aadhaar Card</li>
            </ul>
              
        </ul>
        <ul>
            <li>Proof of income</li>
            <ul>
            <li>Up to six month salary bank statement, salary slips and form 16</li>
            </ul>
              
        </ul>
        <ul>
            <li>Proof of residence</li>
            <ul>
            <li>Driver’s license, Passport, PAN Card, Aadhaar Card</li>
            </ul>
              
        </ul>
        <p>2.For Self-employed Individual</p>
        <ul>
            <li>Proof of identity:</li>
            <ul>
            <li> Driver’s license, Passport, PAN Card, Aadhaar Card</li>
            </ul>
              
        </ul>
        <ul>
            <li>Proof of income</li>
            <ul>
            <li>Up to six month salary bank statement, salary slips and form 16</li>
            </ul>
              
        </ul>
        <ul>
            <li>Proof of residence</li>
            <ul>
            <li>Driver’s license, Passport, PAN Card, Aadhaar Card,maintenance bill, utility bill, property documents, rent agreement</li>
            </ul>      
        </ul>
        <ul>
            <li>Proof of business existence</li>
            <ul>
            <li>Tax registration, Shop Act license, Company registration certificate</li>
            </ul>
              
        </ul>
    </>
)
},
  { question: 'Can I apply for a loan if I already have an existing one?', answer: '1. You can as long as you have a balanced debt-to-income ratio.' },
  { question: 'Will the loan amount be disbursed in stages or all at once?', answer: '1. The loan will be disbursed all at once when the loan is approved.' },
  {question: 'What affects the credit score of an individual in most cases?', answer:'1. Failing to pay your loan dues and your credit bills in time results in your credit score dipping below optimum. A good credit score is anything above 750; however CreditHaat works with multiple lending partners that can provide loan on a lower credit score as well.'}
];

const [expandedIndex, setExpandedIndex] = useState(-1);

const handleToggle = (index) => {
    if (expandedIndex === index) {
        setExpandedIndex(-1); // Collapse if clicked again
    } else {
        setExpandedIndex(index); // Expand clicked FAQ
    }
};

const getPersonalLoanCityInfo = async (city) => {

  // e.preventDefault();
  try {

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}personalloan/citypage/${city}`,{
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.data.code === 200) {
          const json = response.data.data;
          setCityDetails(json);
          // console.log(json.city_name)
      }

      if (response.status === 200) {

      } else {
          console.error('Submission failed:', response.statusText);
      }
  } catch (error) {
      console.error('Error submitting form:', error);
  }
};

const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle1 = () => {
    setIsExpanded(!isExpanded);
  };

 // Define styles as JavaScript objects
 const containerStyle = {
  position: 'relative',
  color:"#000000a6",
  margin: '0',
  textAlign: 'center', // Center text inside the container
};

const contentStyle = {
  transition: 'max-height 0.3s ease',
  overflow: 'hidden',
  position: 'relative',
  color:"#000000a6",
  maxHeight: isExpanded ? 'none' : '4.5em', // Adjust based on your line height
  margin: '0 auto', // Center the content block
  textAlign: 'center', // Center the text inside the block
};

const linkStyle = {
  cursor: 'pointer',
  color: '#007bff',
  fontSize: '16px',
  textDecoration: 'none',
  display: 'inline-block', // Makes sure the span is only as wide as its content
  marginTop: '10px',
};



return (
<>
  {
    (cityDetails != null)?(
      <>
      {console.log(cityDetails.top_city_list)}
      <div className="Nav-Bar">
      <NewNavBar />
    </div>
    <section className="city-sect">
    <div className="city-page-container">
      <div className="city-text-section">
        <h1>Getting a personal loan in {cityDetails.city_name}</h1>
        <p>Apply for personal loan up to ₹50 lacs in {cityDetails.city_name}</p>
        <p>Minimum monthly income ₹20k | Instant approval|</p>
        <Link to="/PersonalLoan">
                <button className="apply-button-city">Apply personal loan</button>
              </Link>
        <div className="safe-secure">
          <FontAwesomeIcon icon={faShieldAlt} /> Safe secure and protected
        </div>
      </div>
      <div className="city-image-section">
                      <div className="image-container-city">
                          <img
                              src={cityDetails.image_url} // Replace with your city image path
                              alt="City Image"
                          />
                          <div className="gradient-overlay"></div>
                      </div>
                  </div>
              </div>

    <div className="content-of-city">
      <h1>CreditHaat -Your ideal personal loan awaits in {cityDetails.city_name}</h1>

      {/* <div className='backenddata'>{cityDetails.city_description}</div> */}

      <div style={containerStyle}>
      <p style={contentStyle}>
      {cityDetails.city_description}
      </p>
      {/* <button onClick={handleToggle1} style={buttonStyle}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button> */}
      <span onClick={handleToggle1} style={linkStyle}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </span>
    </div>

      <div className="samecontent" style={{padding:"10px",color:"#000000a6"}}>
              <p>This has led to an increased demand for <Link to='/PersonalLoan'>personal loans</Link> in {cityDetails.city_name} for needs as diverse as -</p>
              <ul className="samecitycontent">
                  <li>Wedding expenses</li>
                  <li>Home renovation and repairs</li>
                  <li>Higher education</li>
                  <li>Medical expenses</li>
                  <li>Travel expenses</li>
                  <li>Emergency expenses.</li>
              </ul>
              <p>CreditHaat with its large network of lending partners (banks, NBFCs, and fintechs) is able to allow you to easily identify best loan offers and complete the entire loan application process in a 100% digital manner. No paper work, quick approval, no need to visit any branches. With low interest rates, flexible repayment tenures, and high loan amounts, finding the right personal loan in {cityDetails.city_name} just got a whole lot easier.</p>
              <p> Planning to take a personal loan in the future? Check your <Link to='/CreditScore'>credit score</Link> now to plan your finances for the future.</p>
          </div>
    </div>
   
    <PersonalLoanInfo/>
    <PersonalLoan/>
   
     {/* FAQ Section */}
     <div className="faq-container2">
      <h1>Frequently asked questions</h1>
              {faqData.map((faq, index) => (
                  <div key={index} className="faq-item2">
                      <div className="faq-question2" onClick={() => handleToggle(index)}>
                          <span>{faq.question}</span>
                          <span className={`arrowsone ${expandedIndex === index ? 'expanded' : ''}`}>▼</span>
                      </div>
                      {expandedIndex === index && (
                          <div className="faq-answer2">
                              <p>{faq.answer}</p>
                          </div>
                      )}
                  </div>
              ))}
          </div>
          <MoreInformation cityDetails={cityDetails}/>
          <SecondLast/>
          <Partnerlist/>
    </section>
    <NewHomeFooter />
    <NewCityFooter/>

    </>
            
    ):(<div>Loading...</div>)
  }


</>
);
};

export default CityPages;
