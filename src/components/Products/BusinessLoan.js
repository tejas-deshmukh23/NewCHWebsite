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
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from './Toader';
import OtpVerifyLoader from './OtpVerifyLoader';
import LendersList from './LendersList';
import {Link} from 'react-router-dom';
import HowItWorks from '../NewHomePage/HowItWorks';

function BusinessLoan() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  // -------------------This variables are used to send data to bckend -----------------------------------------------------
  const [stgOneHitId, setStgOneHitId] = useState(null);
  const [stgTwoHitId, setstgTwoHitId] = useState(null);
  const [t_experian_log_id, sett_experian_log_id] = useState(null);

  const location = useLocation();
  const [upotp, setUpotp] = useState('');
  const [dobFlag, setDobFlag] = useState(true);
  const [ResidentialPincodeFlag, setResidentialPincodeFlag] = useState(true);
  const [otpStatus, setOtpStatus] = useState('');
  const [otpLoader, setOtpLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  var json = null;
  const [lenderDetails, setLenderDetails] = useState([]);
  // -----------------------------------------------------------------------------------------------------------------------

  //--------------------------faq----------------------------------------
  const faqData = [
    { question: 'What is the qualification criteria for business loans?',  answer: (
      <>
        <p>
          1. You can check out the lenders where your eligibility is matched from the <Link to="/businessloan">business loan eligibility form</Link>. 
          You can also check your credit score from the <Link to="/creditscore">check credit score page</Link>.
        </p>
      </>
    )
  },
  { question: 'How can I find out if I am qualified for a business loan?', answer: (
      <>
          <p>1. Documents required for a business loan may differ depending on your profession. For salaried individuals the following documents are required - </p>
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
  {question:'What affects the credit score of an individual in most cases?', answer:'1. Failing to pay your loan dues and your credit bills in time results in your credit score dipping below optimum. A good credit score is anything above 750; however CreditHaat works with multiple lending partners that can provide loan on a lower credit score as well.'}
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
      message: "CreditHaat’s simple application process helped me find the best loan offer. In addition, their helpful loan executives helped me complete the loan application in no time.",
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
    console.log("Inside handle submit");
    e.preventDefault();

    // Validate form fields
    if (validateForm()) {
      console.log("Inside validate form");
      setShowOTPModal(true);
      handleFormSubmit(e);
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
    

    verify_otp_credithaat_from_backend();
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

  // ---------------------------------------------------------------------------------------------------------------

  const handleFormSubmit = async (e) => {
    console.log("Inside handleFormSubmit");
    e.preventDefault();
    try {

      const queryParams = new URLSearchParams(location.search);

      // Retrieve values for the specified parameters
      const channel = queryParams.get('channel') || '';
      const dsa = queryParams.get('dsa') || '';
      const source = queryParams.get('source') || '';
      const subSource = queryParams.get('sub_source') || '';
      const subDsa = queryParams.get('sub_dsa') || '';

      const urllink = location.search?.split('?')[1] || 'null';

      const formData1 = new FormData();
      console.log("Formdata.email is : ",formData.email);
      formData1.append('userPhoneNumber', formData.mobileNumber);
      console.log("after");
      formData1.append('firstName', formData.firstName);
      formData1.append('lastName', formData.lastName);
      formData1.append('email', formData.email);
      formData1.append('dsa', dsa);
      formData1.append('channel', channel);
      formData1.append('source', source);
      formData1.append('sub_source', subSource);
      formData1.append('campaign', urllink);
      formData1.append('sub_dsa', subDsa);


      // const response = await axios.post(`${process.env.REACT_APP_BASE_URL}chfronetendotpgenerator`, formData1, {
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      // });

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}chbusinessotpgenerator`, formData1);

      if (response.data.code === 0) {

        setStgOneHitId(response.data.obj.stgOneHitId);
        setstgTwoHitId(response.data.obj.stgTwoHitId);
        sett_experian_log_id(response.data.obj.t_experian_log_id);

      }

      if (response.status === 200) {
      } else {
        console.error('Submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const verify_otp_credithaat_from_backend = async (e) => {
    // e.preventDefault();
    setOtpLoader(true);
    try {
      const formData1 = new FormData();
      formData1.append('mobileNumber', formData.mobileNumber);
      formData1.append('otp', otpInputs.join(""));
      formData1.append('stgOneHitId', stgOneHitId);
      formData1.append('stgTwoHitId', stgTwoHitId);
      formData1.append('t_experian_log_id', t_experian_log_id);

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}verifyOTPNewPersonalloan`, formData1);

      console.log("Otp response code is : ", response.data.code)

      if (response.data.code === 0) {
        // setDobFlag(false);
        setOtpVerified(true);
        setActiveContainer('formUpdated');
        setShowOTPModal(false);
        // setResidentialPincodeFlag(false);
        setOtpLoader(false);
      }
      else if (response.data.code === 1) {
        // setDobFlag(true);
        setOtpVerified(true);
        setActiveContainer('formUpdated');
        setShowOTPModal(false);
        // setResidentialPincodeFlag(false);
        setOtpLoader(false);
      }

      else if (response.data.code === 2) {
        // setDobFlag(false);
        setOtpVerified(true);
        setActiveContainer('formUpdated');
        setShowOTPModal(false);
        // setResidentialPincodeFlag(true);
        setOtpLoader(false);
      }
      else if (response.data.code === 3) {
        // setDobFlag(true);
        setOtpVerified(true);
        setActiveContainer('formUpdated');
        setShowOTPModal(false);
        // setResidentialPincodeFlag(true);
        setOtpLoader(false);
      }
      else {
        setOtpLoader(false);
        setOtpStatus("Incorrect OTP! Try Again..");
        console.log("Otp incorrect");
        setOtpInputs(Array(6).fill(''));
      }


      if (response.status === 200) {
      } else {
        console.error('Submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const getLendersList = async (e) => {

    e.preventDefault();
    try {
  
        const formData1 = new FormData();
        formData1.append('mobilenumber', formData.mobileNumber);
  
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}lenderslist`, formData1, {
            headers: {
                'Content-Type': 'application/json',
                'token': 'Y3JlZGl0aGFhdHRlc3RzZXJ2ZXI=' // Add your token here
            }
        });
  
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
  
        if (response.data.code === 200) {
            json = response.data.data;
            setLenderDetails(json);
  
            // // setShowAddInfo(false);
            // setShowLendersList(true);
            setActiveContainer("LendersList");
        }
  
        if (response.status === 200) {
  
        } else {
            console.error('Submission failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
  };

  const handleOnNextLendersList=()=>{
    setActiveContainer("LendersListContainer");
  }

  // -----------------------------------------------------------------------------------------------------------------

  return (
    <>
      {
        isLoading && <Loader/>
      }
      {
        otpLoader && <OtpVerifyLoader/>
      }
      <div className='Nav-Bar'>
        <NewNavBar />
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
                  <p className="terms-text" style={{ color: "#000000a6", height: '40px', textAlign: 'justify', overflowX: 'hidden', overflowY: 'auto' }}>
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
            <div className="modal-container" style={{ width: "350px" }}>
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
                  <button onClick={handleVerifyOTP} className="bloan-btn-btn-primary">Verify OTP</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeContainer === 'formUpdated' && otpVerified && !activeSecondForm && (
          <BusinessLoanPageTwo mainFormData={formData} onNext={handleNext} />
        )}

        {/* Conditionally render NewFormUpdatedSecond */}
        {activeContainer === 'formUpdatedSecond' && activeSecondForm && (
          <BusinessLoanPageFour onNext={handleOnNextLendersList} onPrevious={handlePrevious} mainFormData={formData} setIsLoadingforLoader={setIsLoading} getLendersList={getLendersList} />
        )}
        {/* () => setActiveContainer('review') */}
        {
          activeContainer === 'LendersList' && 
          <LendersList companies={lenderDetails} formData={formData}/>
        }
        <Members />
        <BusinessLoanInfo />
        <BLoanEMI />
        {/*-------------------------------how it works--------------------------------------------*/}
        
{/*-------------------------------how it works--------------------------------------------*/ }
<div className="bloan-how-it-works">
          <h1>How it works</h1>
        </div>
        <HowItWorks/>
{/* -------------------------------------------------------------------- */}

        {/*---------------------------FAQ Section---------------------------------------------------- */}
        <div className="faq-container-bloan" style={{ padding: "20px" }}>
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
