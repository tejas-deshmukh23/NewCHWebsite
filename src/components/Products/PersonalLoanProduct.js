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
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import LendersList from './LendersList';
import Loader from './Toader';
import OtpVerifyLoader from './OtpVerifyLoader';

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

  // ----------------------------This varibles are used to send data to backend -----------------------------------------------

  const [stgOneHitId, setStgOneHitId] = useState(null);
  const [stgTwoHitId, setstgTwoHitId] = useState(null);
  const [t_experian_log_id, sett_experian_log_id] = useState(null);

  const location = useLocation();
  const [upotp, setUpotp] = useState('');
  const [dobFlag, setDobFlag] = useState(true);
  const [ResidentialPincodeFlag, setResidentialPincodeFlag] = useState(true);
  const [otpStatus, setOtpStatus] = useState('');

  const [pan, setPan] = useState('');
  const [dob, setDob] = useState('');
  const [income, setIncome] = useState('');
  const [salaryType, setSalaryType] = useState('');

  const [lenderDetails, setLenderDetails] = useState([]);
  var json = null;
  const [setLendersList, setShowLendersList] = useState(false);
  const [showPloanSecondPage, setShowPloanSecondPage] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const [otpLoader, setOtpLoader] = useState(false);
  // --------------------------------------------------------------------------------------------------------------------------

  const resetOtp = () => {
    // setOtp(new Array(6).fill(""));
    setOtpInputs(new Array(6).fill(""));
  };

  useEffect(() => {
        if (otpStatus === "Incorrect OTP! Try Again..") {
          resetOtp();

        }
      }, [otpStatus]);
  
  useEffect(() => {
    // Initialize refs array with refs to each OTP input field
    otpInputRefs.current = otpInputs.map((_, i) => otpInputRefs.current[i] || React.createRef());
  }, [otpInputs]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (validateForm()) {
      handleFormSubmit(e);//This will save the data to the backend
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
    console.log("Inside handle next")
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


const handleFormSubmit = async (e) => {
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
      formData1.append('userPhoneNumber', formData.mobileNumber);
      formData1.append('firstName', formData.firstName);
      formData1.append('lastName', formData.lastName);
      formData1.append('profession', formData.profession);
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

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}chfronetendotpgenerator_new`, formData1);

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

      console.log("Otp response code is : ",response.data.code)

      if (response.data.code === 0) {
        setDobFlag(false);
        setOtpVerified(true);
        setActiveContainer('formUpdated');
        setShowOTPModal(false);
        setResidentialPincodeFlag(false);
        setOtpLoader(false);
      }
      else if (response.data.code === 1) {
        setDobFlag(true);
        setOtpVerified(true);
        setActiveContainer('formUpdated');
        setShowOTPModal(false);
        setResidentialPincodeFlag(false);
        setOtpLoader(false);
      }

      else if (response.data.code === 2) {
        setDobFlag(false);
        setOtpVerified(true);
        setActiveContainer('formUpdated');
        setShowOTPModal(false);
        setResidentialPincodeFlag(true);
        setOtpLoader(false);
      }
      else if (response.data.code === 3) {
        setDobFlag(true);
        setOtpVerified(true);
        setActiveContainer('formUpdated');
        setShowOTPModal(false);
        setResidentialPincodeFlag(true);
        setOtpLoader(false);
      }
      else {
          setOtpLoader(false);
          setOtpStatus("Incorrect OTP! Try Again..");
          console.log("Otp incorrect");
      }


      if (response.status === 200) {
      } else {
          console.error('Submission failed:', response.statusText);
      }
  } catch (error) {
      console.error('Error submitting form:', error);
  }
};

const handleAddInfoFormSubmit = async (e) => {
  // e.preventDefault();
  e.preventDefault();
  try {

      const formData1 = new FormData();
      formData1.append('mobileNumber', formData.mobileNumber);
      formData1.append('pan',pan);
      formData1.append('dob',dob);
      formData1.append('income',income);
      formData1.append('salaryType',salaryType);

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}secondpageNewpersonalloan`, formData1);

      if (response.data.code === 0) {

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

  return (
    <>
      {
        isLoading && <Loader/>
      }
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

        {otpLoader && <OtpVerifyLoader/>}

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
                  <button onClick={handleVerifyOTP} className="ploan-btn-btn-primary">Verify OTP</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeContainer === 'formUpdated' && otpVerified && !activeSecondForm && (
          <PLoanSecondPage onNext={handleNext} dobFlag={dobFlag} mainFormData={formData} />
        )}

        {/* Conditionally render NewFormUpdatedSecond */}
        {activeContainer === 'formUpdatedSecond' && activeSecondForm && (
          <PLoanThirdPage onPrevious={handlePrevious} mainFormData={formData} getLendersList={getLendersList} setIsLoadingforLoader={setIsLoading} ResidentialPincodeFlag={ResidentialPincodeFlag} />
        )}

        {
          activeContainer === 'LendersList' && <LendersList companies={lenderDetails} formData={formData}/>
        }
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
