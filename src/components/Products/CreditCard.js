import React, { useState, useRef, useEffect } from 'react';
import './CreditCard.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import bootstrap-icons CSS
import  creditcardimageone from'../NewHomePage/NewHomePageImages/undraw_Online_payments_re_y8f2.png';

import otpimage from './ProductsImages/otpimage.png';

import CustomerReview from '../NewHomePage/CustomerReview';
import NewNavBar from '../NewHomePage/NavBar';
import Partnerlist from '../NewHomePage/PartnerList';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import NewCityFooter from '../NewHomePage/newCityFooter';
import CreditCardPageTwo from './CreditCardPageTwo';
import CcardInfo from './CcardInfo';
import Members from './Members';
import CcardEMI from './CcardEMI';
import axios from 'axios';
import {  useLocation, useNavigate } from 'react-router-dom';
import Loader from './Toader';
import OtpVerifyLoader from './OtpVerifyLoader';
import CreditCardLenders from './CreditCardList';


function CreditCard() {

  const navigate=useNavigate();
    
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
  });

  // --------------------------------------------Variables for senfing data o backend ------------------------------------------------------------------------------

  const location = useLocation();
  
  const urllink=location.search?.split('?')[1] || 'null';
  
  // Split the URL string by '&' to get individual key-value pairs
  const keyValuePairs = urllink.split("&");

  const [stgOneHitId, setStgOneHitId] = useState(null);
  const [stgTwoHitId, setstgTwoHitId] = useState(null);
  const [t_experian_log_id, sett_experian_log_id] = useState(null);

  let source = null;
  let dsa = null;
  let channel=null;
  let sub_source=null;
  let sub_dsa=null;
  let phone=null;
  let query=null;

  const [otpStatus, setOtpStatus] = useState(null);
  const [otpLoader, setOtpLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------

  const otpInputRefs = useRef([]);

  useEffect(() => {
    otpInputRefs.current = otpInputs.map((_, i) => otpInputRefs.current[i] || React.createRef());
  }, [otpInputs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.firstName);
    console.log(formData.mobileNumber);
    if (validateForm()) {
      handleOTPSubmit(e);
      setShowOTPModal(true);
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      firstName: '',
      lastName: '',
      mobileNumber: '',
    };

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
      valid = false;
    } else if (!/^[a-zA-Z]*$/g.test(formData.firstName.trim())) {
      errors.firstName = 'First name should contain only letters';
      valid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
      valid = false;
    } else if (!/^[a-zA-Z]*$/g.test(formData.lastName.trim())) {
      errors.lastName = 'Last name should contain only letters';
      valid = false;
    }

    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile number is required';
      valid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim())) {
      errors.mobileNumber = 'Mobile number should start with a digit between 6 to 9 and be 10 digits long';
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
    // setOtpVerified(true);
    // setActiveContainer('formUpdated');
    // setShowOTPModal(false);

    handleVerification();

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

  const handleFirstNameChange = (e) => {
    const value = e.target.value.replace(/\d/g, '');
    setFormData({ ...formData, firstName: value });
    if (formErrors.firstName) {
      setFormErrors({ ...formErrors, firstName: '' });
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value.replace(/\d/g, '');
    setFormData({ ...formData, lastName: value });
    if (formErrors.lastName) {
      setFormErrors({ ...formErrors, lastName: '' });
    }
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, mobileNumber: value });
    if (formErrors.mobileNumber) {
      setFormErrors({ ...formErrors, mobileNumber: '' });
    }
  };

  const handleNext = () => {
    setActiveContainer('creditcardpagetwo');
  };

  const handlePrevious = () => {
    setActiveContainer('otpVerification');
    setActiveSecondForm(false);
    setOtpVerified(false); // Reset OTP verification state
    setShowOTPModal(false); // Close OTP modal if open
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

  const handleOTPSubmit= async (e)=>{
    e.preventDefault();
    try{
    sessionStorage.setItem('userPhoneNumber',formData.mobileNumber);
    const formData1 = new FormData();
    formData1.append('userPhoneNumber',formData.mobileNumber);
    formData1.append('firstName',formData.firstName);
    formData1.append('lastName',formData.lastName);
    formData1.append('dsa',dsa);
    formData1.append('campaign',urllink);
    formData1.append('channel',channel);
    formData1.append('source',source);
    formData1.append('sub_source',sub_source);
    formData1.append('sub_dsa',sub_dsa);
    formData1.append('phone',phone);
    formData1.append('query',query);
    
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}chfronetendotpgenerator`, formData1);
    if(response.data.code === 0){
    
     setStgOneHitId(response.data.obj.stgOneHitId);
     setstgTwoHitId(response.data.obj.stgTwoHitId);
      sett_experian_log_id(response.data.obj.t_experian_log_id);
    }
    }catch(error){
      console.log('Error:',error)
    }
    };

    keyValuePairs.forEach(pair => {
      // Split the key-value pair by '=' to get the key and value
      const [key, value] = pair.split("=");
      
      // Check the key and assign the value to the corresponding variable
      if (key === "source") {
        source = value || null; // Use null if value is empty
      } else if (key === "dsa") {
        dsa = value || null; // Use null if value is empty
      }
      else if (key === "sub_source") {
       sub_source = value || null; // Use null if value is empty
      }
      else if (key === "sub_dsa") {
        sub_dsa = value || null; // Use null if value is empty
      }
      else if (key === "channel") {
        channel = value || null; // Use null if value is empty
      }
      else if (key === "query") {
        query = value || null; // Use null if value is empty
      }
      else if (key === "phone") {
        phone = value || null; // Use null if value is empty
      }
      
    });

    const handleVerification = async () => {
      setOtpLoader(true);
      console.log('1st in');
      try {
        // Combine the updated OTP values into a single string
       // const userOTP = updatedOtpValues.join('');
       //console.log(upotp)
        // Create form data to send to the backend
        const formData1 = new FormData();
       // formData.append('userPhoneNumber', upotp); // Assuming you have userPhoneNumber available
      //  const formData = new FormData();
       formData1.append('mobileNumber', formData.mobileNumber);
       formData1.append('otp', otpInputs.join(""));
      formData1.append('stgOneHitId',stgOneHitId);
      formData1.append('stgTwoHitId',stgTwoHitId);
      formData1.append('t_experian_log_id',t_experian_log_id);

       // Send the OTP verification request to the backend
   const response1 = await axios.post(`${process.env.REACT_APP_BASE_URL}verifyOTP`, formData1);

   console.log("After response1");
  
   // Handle the response from the backend
   if (response1.data.code == 0) {
     console.log("When is 0")
     sessionStorage.setItem('userData', JSON.stringify(response1.data.obj));
     console.log("after when is 0")
     setOtpVerified(true);
    setActiveContainer('formUpdated');
    setShowOTPModal(false);
    // setOtpLoader(false);
                
    // navigate('/secondpage',);
     console.log('OTP verification successful');
   } else if(response1.data.code == -1) {
     console.log('Invalid OTP');
     setOtpStatus("Incorrect OTP! Try Again..");
    setOtpInputs(Array(6).fill(''));
    // setOtpLoader(false);
    console.log("When is false or -1")
   }else{
    console.log('Invalid OTP');
     setOtpStatus("Incorrect OTP! Try Again..");
    setOtpInputs(Array(6).fill(''));
   }
  
  //  else if(response1.data.code == -288){
  //    handleCloseSnackbar();
  //  }
 } catch (error) {
   console.error('Error:', error);
 }
};

const fetchData = async () => {
  try {
    // Create a FormData object
/*const formData = new FormData();
formData.append('userPhoneNumber', userPhoneNumber);*/


// Add data to the FormData
setIsLoading(true);
const userPhoneNumber = sessionStorage.getItem('userPhoneNumber');


// Convert FormData to JSON object
const data = {
mobilenumber: userPhoneNumber 
};

    
    console.log("hitting api");
  
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}api/creditcard/submit`, data, {
      headers: {
        'Content-Type': 'application/json',
        'token': 'Y3JlZGl0aGFhdHRlc3RzZXJ2ZXI=' // Add your token here
      }
    });
  
    console.log(response.data);
    if(response.data.code ===200)
    {
      sessionStorage.setItem('sucessData',JSON.stringify(response.data));
      // console.log(response);
      //  navigate('/list')
      setIsLoading(false);
      setActiveContainer("creditCardLenders");
    }
    else{
      
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
  
  return (
    <>
    {/* {otpLoader && <OtpVerifyLoader/>} */}
    {isLoading && <Loader/>}

      <div className='Nav-Bar'>
        <NewNavBar />
      </div>
      <div className="credit-card-container">
        {activeContainer === 'otpVerification' && !otpVerified && (
          <div className="credit-cardrow">
            <div className="credit-card-col-md-6">
              <div className="credit-card-text-container">
                <h1>Choose the best credit <br/>card for you!</h1>
              </div>
              <div className="credit-card-image-container">
                <img src={creditcardimageone} alt="Placeholder" />
              </div>
            </div>
            <div className="credit-card-col-md-6-cc">
                <form onSubmit={handleSubmit}>
                <h2>Check eligibility in 2 steps</h2>
                    <div className="credit-card-form-group">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleFirstNameChange}
                        />
                            {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                        </div>
                        <div className="credit-card-form-group">
                            <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleLastNameChange}
                            />
                            {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
                        </div>
                        <div className="credit-card-form-group">
                            <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            placeholder="Mobile number"
                            value={formData.mobileNumber}
                            onChange={handleMobileNumberChange}
                            inputMode="numeric"
                            />
                            {formErrors.mobileNumber && <span className="error">{formErrors.mobileNumber}</span>}
                        </div>
                        <div className="input-group mb-2">
                            <p className="terms-text" style={{ height: '40px',color:"#000000a6", textAlign: 'justify', overflowX: 'hidden', overflowY: 'auto' }}>
                            By clicking "Send OTP" button and accepting the terms and conditions set out here in, you provide your express consent to Social Worth Technologies Private Limited, Whizdm Innovations Pvt Ltd, Upwards Fintech Services Pvt Ltd, Tata Capital Financial Services Ltd, SmartCoin Financials Pvt Ltd, MWYN Tech Pvt Ltd, L&T Finance Ltd, Krazybee Services Pvt Ltd, Infocredit Services Pvt. Ltd, Incred Financial Services, IIFL Finance Ltd, EQX Analytics Pvt Ltd, EPIMoney Pvt Ltd, Bhanix finance and Investment LTd, Aditya Birla Finance Ltd to access the credit bureaus and credit information report and credit score. You also hereby irrevocably and unconditionally consent to usage of such credit information being provided by credit bureaus
                            </p>
                        </div>
                        <button type="submit" className="credit-card-btn-btn-primary">Send OTP</button>
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
                <p style={{color:'red', textAlign:'center'}}>{otpStatus}</p>
                <div>
                  <button onClick={handleVerifyOTP} className="credit-card-btn-btn-primary">Verify OTP</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeContainer === 'formUpdated' && otpVerified && !activeSecondForm && (
          <CreditCardPageTwo formData={formData} onPrevious={handlePrevious} activeContainer={activeContainer} setActiveContainer={setActiveContainer} fetchData={fetchData} />
        )}

        {activeContainer === 'creditCardLenders' && <CreditCardLenders/> }
        <Members/>
        <CcardEMI/>
  <CcardInfo/>
{/*--------------------------------------------3rd sect----------------------------------------*/}
        {/* <div className="credit-card-works">
          <h1>Meet our cool features</h1>
          <div className="credit-card-features">
            <div className="credit-card-feature">
              <img src={creditcardimagethree} alt="Feature 1" />
              <h4>Always with you</h4>
              <p>Safeguarding your finances with top-notch security measures at every step of your journey.</p>
            </div>
            <div className="credit-card-feature">
              <img src={creditcardimagefour} alt="Feature 2" />
              <h4>Safe and secure</h4>
              <p>Ensuring your financial transactions are protected with the highest security standards at every step.</p>
            </div>
            <div className="credit-card-feature">
              <img src={creditcardimagefive} alt="Feature 3" />
              <h4>Card delivery</h4>
              <p>Swift and secure delivery of your new card right to your doorstep.</p>
            </div>
          </div>
        </div> */}

{/*------------------------------------------faq---------------------------------------------* */}
<div className="faq-container-ccard" style={{padding:"20px"}}>
              <h1 className="faq-ccard">Frequently asked questions</h1>
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item-ccard">
                        <div className="faq-question-ccard" onClick={() => handleToggle(index)}>
                            <span>{faq.question}</span>
                            <span className={`arrowcc ${expandedIndex === index ? 'expanded' : ''}`}>▼</span>
                        </div>
                        {expandedIndex === index && (
                            <div className="faq-answer-ccard">
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

      {/*-----------------------Pagination Dots-----------------------------------------*/}
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

export default CreditCard;
