// NewPersonalLoanProduct.js

import React, { useState, useRef, useEffect } from 'react';
import './PersonalLoanProduct.css';
import newploanimageone from './ProductsImages/newploanimageone.png';
import CustomerReview from '../NewHomePage/CustomerReview';
import otpimage from './ProductsImages/otpimage.png';
import NewNavBar from '../NewHomePage/NavBar';
import Partnerlist from '../NewHomePage/PartnerList';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import NewCityFooter from '../NewHomePage/newCityFooter';
import PLoanSecondPage from './PLoanSecondPage';
import PLoanThirdPage from './PLoanThirdPage';
import PersonalLoan from './PLoanEMI';
import PersonalLoanInfo from './PersonalLoanInfo';
import Members from './Members';

function PersonalLoanProduct() {

  const faqData = [
    { question: 'What is a credit score?', answer: 'A credit score is a numerical representation of your creditworthiness, typically ranging from 300 to 850. It is calculated based on your credit history, including your borrowing, repayment behaviors, and other financial activities. Lenders use credit scores to evaluate the risk of lending money to you. A higher credit score indicates a lower risk, which can result in better loan terms and interest rates.' },
    { question: 'Why checking your credit report is important ?', answer: 'You can contact customer support...' },
    { question: 'How is a credit score calculated?', answer: 'Yes, we offer discounts...' },
    { question: 'How can I improve my credit score?', answer: 'To change your password...' }
];

const [expandedIndex, setExpandedIndex] = useState(-1);

const handleToggle = (index) => {
    if (expandedIndex === index) {
        setExpandedIndex(-1); // Collapse if clicked again
    } else {
        setExpandedIndex(index); // Expand clicked FAQ
    }
};
  const [otpVerified, setOtpVerified] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    profession: '',
  });
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [activeContainer, setActiveContainer] = useState('otpVerification');
  const [activeSecondForm, setActiveSecondForm] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otpInputs, setOtpInputs] = useState(['', '', '', '', '', '']);
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    profession: '',
  });

  const otpInputRefs = useRef([]);

  useEffect(() => {
    // Initialize refs array with refs to each OTP input field
    otpInputRefs.current = otpInputs.map((_, i) => otpInputRefs.current[i] || React.createRef());
  }, [otpInputs]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (validateForm()) {
      setShowOTPModal(true);
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      profession: '',
    };

    // First Name validation
    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
      valid = false;
    } else if (!/^[a-zA-Z]*$/g.test(formData.firstName.trim())) {
      errors.firstName = 'First Name should contain only letters';
      valid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
      valid = false;
    } else if (!/^[a-zA-Z]*$/g.test(formData.lastName.trim())) {
      errors.lastName = 'Last Name should contain only letters';
      valid = false;
    }

    // Mobile Number validation
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile Number is required';
      valid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim())) {
      errors.mobileNumber = 'Mobile Number should start with a digit between 6 to 9 and be 10 digits long';
      valid = false;
    }

    // Profession validation
    if (!formData.profession.trim()) {
      errors.profession = 'Profession is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };
// Function to handle OTP modal close
const handleCloseOTPModal = () => {
  setShowOTPModal(false);
  // Clear OTP inputs when modal is closed
  setOtpInputs(['', '', '', '', '', '']);
};
  const handleVerifyOTP = () => {
    setOtpVerified(true);
    setActiveContainer('formUpdated');
    setShowOTPModal(false);
  };
  const handleOtpInputChange = (index, value) => {
    // Update the OTP inputs state with the current input value
    const updatedOtpInputs = [...otpInputs];
    updatedOtpInputs[index] = value;
    setOtpInputs(updatedOtpInputs);
  
    // Always move cursor to the end of the current input field after any change
    otpInputRefs.current[index].current.setSelectionRange(value.length, value.length);
  
    // Handle automatic focus based on user input
    if (value === '') {
      // If the current input is deleted, focus on the previous OTP input field if available
      if (index > 0) {
        // Use setTimeout to ensure the focus happens after the deletion event
        setTimeout(() => {
          otpInputRefs.current[index - 1].current.focus();
          // Move cursor to the end of the previous input field after focusing
          otpInputRefs.current[index - 1].current.setSelectionRange(
            otpInputs[index - 1].length, // Move cursor to the end of the previous input
            otpInputs[index - 1].length
          );
        }, 0);
      }
    } else {
      // If the current input is not empty, move focus to the next OTP input field if available
      if (index < otpInputs.length - 1) {
        otpInputRefs.current[index + 1].current.focus();
      }
    }
  };
  
  const handleNext = () => {
    setActiveContainer('formUpdatedSecond');
    setActiveSecondForm(true);
  };

  const handlePrevious = () => {
    setActiveSecondForm(false);
    setActiveContainer('formUpdated');
  };

  const handleFirstNameChange = (e) => {
    // Remove any digits from the input value
    const value = e.target.value.replace(/\d/g, '');
    setFormData({ ...formData, firstName: value });
  
    // Clear error message when user starts typing valid input
    if (formErrors.firstName) {
      setFormErrors({ ...formErrors, firstName: '' });
    }
  };
  
  const handleLastNameChange = (e) => {
    // Remove any digits from the input value
    const value = e.target.value.replace(/\d/g, '');
    setFormData({ ...formData, lastName: value });
  
    // Clear error message when user starts typing valid input
    if (formErrors.lastName) {
      setFormErrors({ ...formErrors, lastName: '' });
    }
  };
  
  const handleMobileNumberChange = (e) => {
    // Remove any non-digit characters from the input value
    const value = e.target.value.replace(/\D/g, '').slice(0, 10); // Keep only the first 10 digits
    setFormData({ ...formData, mobileNumber: value });
  
    // Clear error message when user starts typing valid input
    if (formErrors.mobileNumber) {
      setFormErrors({ ...formErrors, mobileNumber: '' });
    }
  };
  
  const handleFirstNameBlur = (e) => {
    setFormData({ ...formData, firstName: e.target.value.trim() });
  };
  
  const handleLastNameBlur = (e) => {
    setFormData({ ...formData, lastName: e.target.value.trim() });
  };
  
  const handleMobileNumberBlur = (e) => {
    setFormData({ ...formData, mobileNumber: e.target.value.trim() });
  };

 
 // Toggle function for pagination dots
 const handleDotClick = (index) => {
  setActiveReviewIndex(index);
};

// Customer reviews data
const customerReviews = [
  {
    id: 1,
    messageBefore: "100% Commited to customer satisfaction",
    message:"CreditHaat’s simple application process helped me find the best loan offer. In addition, their helpful loan executives helped me complete the loan application in no time.",
    name: "Ekta",
    image: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Ekta.jpeg",
  },
  {
    id: 2,
    messageBefore: "100% Commited to customer satisfaction",
    message:
      "Applying for a loan from CreditHaat is so easy and hasslefree. The platform helped me avail a loan of ₹5 Lacs within 4 hours!",
    name: "Deepak",
    image: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Deepak.jpeg",
  },
  {
    id: 3,
    messageBefore: "100% Commited to customer satisfaction",
    message:
      "I needed funds to deal with an emergency. With CreditHaat I received money in my account within minutes.",
    name: "Santosh",
    image: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Santosh.jpeg",

   
  },
];
// Auto-swapping logic for reviews
useEffect(() => {
const interval = setInterval(() => {
  setActiveReviewIndex((prevIndex) => (prevIndex + 1) % customerReviews.length);
}, 4000); // Change review every 5 seconds

return () => clearInterval(interval);
}, []);

  return (
    <>
      <div className='Nav-Bar'>
        <NewNavBar/>
      </div>
      <div className="ploancontainer">
        {activeContainer === 'otpVerification' && !otpVerified && (
          <div className="ploanrow">
            <div className="ploan-col-md-6">
              <div className="ploan-text-container">
                <h1>Your ideal personal loan awaits!</h1>
              </div>
              <div className="ploan-image-container">
                <img src={newploanimageone} alt="Placeholder" />
              </div>
            </div>
            <div className="ploan-col-md-6-pl">
            <form onSubmit={handleSubmit}>
                  <h2>Check eligibility in 3 steps</h2>
                  <div className="ploan-form-group">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleFirstNameChange}
                      onBlur={handleFirstNameBlur}
                    />
                    {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                  </div>
                  <div className="ploan-form-group">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleLastNameChange}
                      onBlur={handleLastNameBlur}
                    />
                    {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
                  </div>
                  <div className="ploan-form-group">
                    <input
                      type="text"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Mobile number"
                      value={formData.mobileNumber}
                      onChange={handleMobileNumberChange}
                      onBlur={handleMobileNumberBlur}
                      inputMode="numeric"
                    />
                    {formErrors.mobileNumber && <span className="error">{formErrors.mobileNumber}</span>}
                  </div>
                  <div className="ploan-form-group">
                    <select
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={(e) => {
                        setFormData({ ...formData, profession: e.target.value });
                        setFormErrors({ ...formErrors, profession: '' }); // Clear profession error on change
                      }}
                      onBlur={(e) => setFormErrors({ ...formErrors, profession: e.target.value ? '' : 'Profession is required' })}
                    >
                      <option value="">Profession</option>
                      <option value="Salaried">Salaried</option>
                      <option value="Self Employed">Self employed</option>
                      <option value="Business">Business</option>
                    </select>
                    {formErrors.profession && <span className="error">{formErrors.profession}</span>}
                  </div>
                  <div className="input-group mb-2 ">
                                    <p className="terms-text" style={{color:"#000000a6", height: '40px', textAlign:'justify',overflowX: 'hidden', overflowY: 'auto' }}>
                                        By clicking "Send OTP" button and accepting the terms and conditions set out here in, you provide your express consent to Social Worth Technologies Private Limited, Whizdm Innovations Pvt Ltd, Upwards Fintech Services Pvt Ltd, Tata Capital Financial Services Ltd, SmartCoin Financials Pvt Ltd, MWYN Tech Pvt Ltd, L&T Finance Ltd, Krazybee Services Pvt Ltd, Infocredit Services Pvt. Ltd, Incred Financial Services, IIFL Finance Ltd, EQX Analytics Pvt Ltd, EPIMoney Pvt Ltd, Bhanix finance and Investment LTd, Aditya Birla Finance Ltd to access the credit bureaus and credit information report and credit score. You also hereby irrevocably and unconditionally consent to usage of such credit information being provided by credit bureaus
                                    </p>
                                    </div>

                  <button type="submit" className="ploan-btn-btn-primary">Send OTP</button>
                </form>
              </div>
            </div>
          
        )}

   {/* OTP Verification Modal */}
   {showOTPModal && (
          <div className="modal-background">
            <div className="modal-container" style={{width:"350px"}}>
              <div className="loan-modal-content">
                 {/* Close button */}
                 <button className="otpclose" onClick={handleCloseOTPModal}>X</button>
                <h3>Verify OTP</h3>
                <img src={otpimage} alt='otpimage'></img>
                <p>An OTP has been sent to your mobile number. Please enter the OTP to proceed.</p>
                <div className="otp-input-container">
                  {otpInputs.map((otp, index) => (
                    <input
                      key={index}
                      ref={otpInputRefs.current[index]}
                      type="text"
                      maxLength="1"
                      value={otp}
                      onChange={(e) => handleOtpInputChange(index, e.target.value)}
                      className="otp-input"
                      inputMode="numeric" 
                    />
                  ))}
                </div>
                <div>
                  <button onClick={handleVerifyOTP} className="ploan-btn-btn-primary">Verify OTP</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeContainer === 'formUpdated' && otpVerified && !activeSecondForm && (
          <PLoanSecondPage formData={formData} onNext={handleNext} />
        )}

        {/* Conditionally render NewFormUpdatedSecond */}
        {activeContainer === 'formUpdatedSecond' && activeSecondForm && (
          <PLoanThirdPage onNext={() => setActiveContainer('review')} onPrevious={handlePrevious} />
        )}
<Members/>
<PersonalLoanInfo/>       
<PersonalLoan/>
    
{/*---------------------------FAQ Section---------------------------------------------------- */}
<div className="faq-container-ploan" style={{padding:"20px"}}>
              <h1 className="faq-ploan">Frequently asked questions</h1>
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item-pl">
                        <div className="faq-question-pl" onClick={() => handleToggle(index)}>
                            <span>{faq.question}</span>
                            <span className={`arrowpl ${expandedIndex === index ? 'expanded' : ''}`}>▼</span>
                        </div>
                        {expandedIndex === index && (
                            <div className="faq-answer-pl">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

 {/*-------------------------------Customer Reviews---------------------------------------*/}
 <section className="customer-reviews">
        <div className="customer-reviews-grid">
          {customerReviews.map((review, index) => (
            <div className={`review-item ${activeReviewIndex === index ? 'active' : ''}`} key={review.id}>
              <CustomerReview
                messageBefore={review.messageBefore}
                message={review.message}
                name={review.name}
                image={review.image}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Pagination Dots */}
      <div className="pagination-dots text-center">
        {customerReviews.map((review, index) => (
          <span
            key={review.id}
            className={`dot ${activeReviewIndex === index ? 'active' : ''}`}
            onClick={() => setActiveReviewIndex(index)}
          ></span>
        ))}
      </div>

        <Partnerlist />
        <div>
          <NewHomeFooter />
          <NewCityFooter />
        </div>
      </div>
    </>
  );
}
 export default PersonalLoanProduct;
