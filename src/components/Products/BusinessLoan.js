import './BusinessLoan.css';
import businessloanimageone from '../NewHomePage/NewHomePageImages/undraw_Meeting_re_i53h.png';
import businessloanimagefour from './ProductsImages/businessloanimagefour.png';
import businessloanimagefive from './ProductsImages/businessloanimagefive.png';
import businessloanimagesix from './ProductsImages/businessloanimagesix.png';
import CustomerReview from '../NewHomePage/CustomerReview';
import NewNavBar from '../NewHomePage/NavBar';
import Partnerlist from '../NewHomePage/PartnerList';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import BusinessLoanPageTwo from './BusinessLoanPageTwo';
import BusinessLoanPageFour from './BusinessLoanPageFour';
import React, { useState, useRef, useEffect } from 'react';
import otpimage from './ProductsImages/otpimage.png';
import BusinessLoanInfo from './BusinessLoanInfo';
import CityForBl from '../NewHomePage/CityForBl';
import BLoanEMI from './BLoanEMI';
import Members from './Members';

function BusinessLoan() {
  //--------------------------faq----------------------------------------
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

//-----------------------------review----------------------------------------
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


  const [otpVerified, setOtpVerified] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '', // Added email field
  });
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [activeContainer, setActiveContainer] = useState('otpVerification');
  const [activeSecondForm, setActiveSecondForm] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otpInputs, setOtpInputs] = useState(['', '', '', '', '', '']);
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '', // Added email field in formErrors
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
      email: '', // Added email field in validation
    };

    // First Name validation
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
      valid = false;
    } else if (!/^[a-zA-Z]*$/g.test(formData.firstName.trim())) {
      errors.firstName = 'First name should contain only letters';
      valid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
      valid = false;
    } else if (!/^[a-zA-Z]*$/g.test(formData.lastName.trim())) {
      errors.lastName = 'Last name should contain only letters';
      valid = false;
    }

    // Mobile Number validation
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile number is required';
      valid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim())) {
      errors.mobileNumber = 'Mobile number should start with a digit between 6 to 9 and be 10 digits long';
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = 'Invalid Email address';
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

  return (
    <>
      <div className='Nav-Bar'>
        <NewNavBar/>
      </div>
      <div className="bloancontainer">
        {activeContainer === 'otpVerification' && !otpVerified && (
          <div className="bloanrow">
            <div className="bloan-col-md-6">
              <div className="bloan-text-container">
                <h1>Business loans made easy!</h1>
              </div>
              <div className="bloan-image-container">
                <img src={businessloanimageone} alt="Placeholder" />
              </div>
            </div>
            <div className="bloan-col-md-6-bl">
                <h2>Check eligibility in 3 steps</h2>
                <form onSubmit={handleSubmit}>
                  <div className="bloan-form-group">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFirstNameChange}
                      onBlur={handleFirstNameBlur}
                      placeholder='First name'
                    />
                    {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                  </div>
                  <div className="bloan-form-group">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleLastNameChange}
                      onBlur={handleLastNameBlur}
                      placeholder='Last name'
                    />
                    {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
                  </div>
                  <div className="bloan-form-group">
                    <input
                      type="text"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleMobileNumberChange}
                      onBlur={handleMobileNumberBlur}
                      placeholder='Mobile number'
                      inputMode="numeric"
                    />
                    {formErrors.mobileNumber && <span className="error">{formErrors.mobileNumber}</span>}
                  </div>
                  <div className="bloan-form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onBlur={(e) => setFormErrors({ ...formErrors, email: e.target.value ? '' : 'Email is required' })}
                      placeholder='Email'
                    />
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                  </div>
                  <div className="input-group mb-2 ">
                                    <p className="terms-text" style={{color:"#000000a6", height: '40px', textAlign:'justify',overflowX: 'hidden', overflowY: 'auto' }}>
                                        By clicking "Send OTP" button and accepting the terms and conditions set out here in, you provide your express consent to Social Worth Technologies Private Limited, Whizdm Innovations Pvt Ltd, Upwards Fintech Services Pvt Ltd, Tata Capital Financial Services Ltd, SmartCoin Financials Pvt Ltd, MWYN Tech Pvt Ltd, L&T Finance Ltd, Krazybee Services Pvt Ltd, Infocredit Services Pvt. Ltd, Incred Financial Services, IIFL Finance Ltd, EQX Analytics Pvt Ltd, EPIMoney Pvt Ltd, Bhanix finance and Investment LTd, Aditya Birla Finance Ltd to access the credit bureaus and credit information report and credit score. You also hereby irrevocably and unconditionally consent to usage of such credit information being provided by credit bureaus
                                    </p>
                                    </div>
                  <button type="submit" className="bloan-btn-btn-primary">Send OTP</button>
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
                  <button onClick={handleVerifyOTP} className="bloan-btn-btn-primary">Verify OTP</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeContainer === 'formUpdated' && otpVerified && !activeSecondForm && (
          <BusinessLoanPageTwo formData={formData} onNext={handleNext} />
        )}

        {/* Conditionally render NewFormUpdatedSecond */}
        {activeContainer === 'formUpdatedSecond' && activeSecondForm && (
          <BusinessLoanPageFour onNext={() => setActiveContainer('review')} onPrevious={handlePrevious} />
        )}
<Members/>
<BusinessLoanInfo/>
<BLoanEMI/>
{/*-------------------------------how it works--------------------------------------------*/ }
        <div className="bloan-how-it-works">
          <h1>How it works</h1>
          <div className="bit-loan-features">
            <div className="bit-loan-feature">
              <img src={businessloanimagefour} alt="Feature 1" />
              <p>Provide basic details</p>
            </div>
            <div className="bit-loan-feature">
              <img src={businessloanimagefive} alt="Feature 2" />
              <p>Complete application online</p>
            </div>
            <div className="bit-loan-feature">
              <img src={businessloanimagesix} alt="Feature 3" />
              <p>Get money in your wallet</p>
            </div>
          </div>
        </div>

{/*---------------------------FAQ Section---------------------------------------------------- */}
<div className="faq-container-bloan" style={{padding:"20px"}}>
              <h1 className="faq-bloan">Frequently asked questions</h1>
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item-bl">
                        <div className="faq-question-bl" onClick={() => handleToggle(index)}>
                            <span>{faq.question}</span>
                            <span className={`arrowbl ${expandedIndex === index ? 'expanded' : ''}`}>▼</span>
                        </div>
                        {expandedIndex === index && (
                            <div className="faq-answer-bl">
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
          <CityForBl />
        </div>
      </div>
    </>
  );
}

export default BusinessLoan;
