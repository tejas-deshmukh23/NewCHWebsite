import React, { useState } from 'react';
import './CityPages.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

import NewNavBar from '../NewHomePage/NavBar';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import creditscoreimages from './NewHomePageImages/banglurucity.png'; // Import your city image
import StepIndicator from './StepIndicator';
import CityPageInfo from './CityPageInfo';
import Partnerlist from '../NewHomePage/PartnerList';
import SecondLast from './SecondLast';
import CityPageEligibility from './CityPageEligibility';
import MoreInformation from './MoreInformation';


const CityPages = () => {
    const faqData = [
        { question: 'Will taking a loan from credithaat be costly?', answer: 'CreditHaat has tied up with the best lenders in India. CreditHaat ensures that users find the best loan offer for themselves.' },
        { question: 'Does CreditHaat Charge any fees from users ?', answer: 'No, CreditHaat does not charge any fees from its users.' },
        { question: 'Is sharing Personal information is safe ?', answer: 'Yes, CreditHaat uses the best encryption and security mechanisms to protect user information.' },
        { question: 'Will CreditHaat team help in completing loan application ?', answer: 'CreditHaat’s experienced loan executives will provide users all the help to complete the loan application.' }, 
    ];
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleToggle = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1); // Collapse if clicked again
        } else {
            setExpandedIndex(index); // Expand clicked FAQ
        }
    };
  return (
    <>
      <div className="Nav-Bar">
        <NewNavBar />
      </div>
      <section className="city-sect">
      <div className="city-page-container">
        <div className="city-text-section">
          <h1>Getting a personal loan in .....</h1>
          <p>Apply for personal loan up to ₹50 lacs in ......</p>
          <p>Salaried | Self employed | Business</p>
          <button className="apply-button-city">Apply personal loan</button>
          <div className="safe-secure">
            <FontAwesomeIcon icon={faShieldAlt} /> Safe secure and protected
          </div>
        </div>
        <div className="city-image-section">
                        <div className="image-container-city">
                            <img
                                src={creditscoreimages} // Replace with your city image path
                                alt="City Image"
                            />
                            <div className="gradient-overlay"></div>
                        </div>
                    </div>
                </div>
      
      <div className="content-of-city">
        <h1>CreditHaat -Your quick path to personal loans in.....</h1>
      </div>
      <CityPageInfo/>
      
      <StepIndicator/>
      
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
            <CityPageEligibility/>
            <MoreInformation/>
            <SecondLast/>
            <Partnerlist/>
      </section>
      <NewHomeFooter />
    </>
  );
};

export default CityPages;
