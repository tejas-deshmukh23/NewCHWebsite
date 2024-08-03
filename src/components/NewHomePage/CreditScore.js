import React, { useState, useRef } from "react";
import './CreditScore.css'; // Import CSS file for styling
import creditscoreimage from '../NewHomePage/NewHomePageImages/undraw_fast_loading_re_8oi3 (1).png';
import otppageimage from '../Products/ProductsImages/otpimage.png';
import VectorBar from './VectorBar';
import BureauPartner from './BureauPartner';
import NavBar from './NavBar';
import NewHomePageFooter from './NewHomePageFooter';
import NewCityFooter from './newCityFooter';
import { styled } from '@mui/material/styles'; // Import styled component from Material-UI
import Dialog from '@mui/material/Dialog'; // Import Material-UI components
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import CreditScoreSecondPage from "./CreditScoreSecondPage";
import TechnicalErrorPage from "./TechnicalErrorPage";

// Define styled component using Material-UI's styled
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "350px"
  },
}));

const CreditScore = () => {
  // State variables using React hooks
  const [open, setOpen] = useState(false); // State for dialog open/close
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [otpStatus, setOtpStatus] = useState(''); // State for OTP verification status
  const [firstName, setFirstName] = useState(''); // State for first name input
  const [lastName, setLastName] = useState(''); // State for last name input
  const [mobileNumber, setMobileNumber] = useState(''); // State for mobile number input
  const [email, setEmail] = useState(''); // State for email input
  const [pan, setPan] = useState(''); // State for PAN input
  const [errors, setErrors] = useState({}); // State for error messages

  const [stgOneHitId, setStgOneHitId] = useState(null);
  const [stgTwoHitId, setstgTwoHitId] = useState(null);
  const [t_experian_log_id, sett_experian_log_id] = useState(null);

  const [activeContainer, setActiveContainer] = useState('');

  const [markVarToSend, setMarkVarToSend] = useState(null);

  const faqData = [
    { question: 'Why is your credit score important?', answer: 'Your credit score is one of the first things that a lender Bank or NBFC will look at while evaluating your loan or credit card application. In case your Credit score or Credit score is low, the lender might reject the application without even considering it further. If the credit score is high, the lender will look into other details to determine if the applicant is creditworthy. Thus, a good credit score increases the chances of your loan application being approved. However, your credit score is not the only factor considered for a person’s ability to secure new credit. Lenders also take into consideration your income, debt to income ratio, employment history, profession, etc. before approving or rejecting the application. A strong credit score would not only help you access credit, but it may also help reduce your interest outgo for a loan. Many Banks and NBFCs provide preferential low interest rates to applicants with a good credit score.' },
    { 
      question: 'How is your credit score calculated?', 
      answer: `Your credit score depends on a lot of factors that a credit bureau takes into consideration while calculating your Credit score. These factors depict your credit behaviour in the past and are reported to Banks and NBFCs every time you apply for a credit product. Some of the key factors that influence your credit score are:
      
      <br />
      <b>Loan Repayment History:</b> Timely payments can boost up your credit score and help in improving it significantly. Defaulting on your EMIs or making late payments negatively affects your Credit score. Your loan repayment history has a high impact on your Credit score calculation.
      
      <br />
      <b>Duration of Credit History:</b> The duration or age of your credit history also affects your credit score. If you have used credit cards/loans for a long period of time and made timely payments on them, then it's a sign of disciplined credit behaviour. It has a medium impact on your credit score.
      
      <br />
      <b>Number of Hard Inquiries:</b> Every time you apply for a new credit product, the lender makes an inquiry about your credit score. Such inquiries by lenders and financial institutions are known as hard inquiries. Too many hard inquiries may negatively affect your credit score as it shows you to be credit hungry. Multiple hard enquiries at the same time may have a considerable short-term impact on your credit score.
      
      <br />
      <b>Credit Utilization Ratio:</b> The ratio of the credit amount you spend to the credit amount available to you is known as the credit utilization ratio. You should try to refrain from utilising more than 30% of your available credit on a regular basis to have a good credit utilization ratio. Even though having CUR in the range of 60-70% barely has an impact on credit score but having a high credit utilization ratio or maxing out your credit limit frequently indicates a higher dependency on credit and a potentially high repayment burden, which may negatively impact your credit score.
      
      <br />
      <b>Credit Mix:</b> If you have taken different kinds of loans like personal loan, auto loan, home loan and have responsibly paid it back, it shows your ability to handle different kinds of credit. Also, if you have taken too many unsecured loans like personal loans, it shows you are credit hungry and are too dependent on credit. This may work against you. However, credit mix has a low impact on your credit score and it’s unlikely that a lender will reject you just because you do not have an optimum mix of credit products.` 
    },
    { 
      question: 'Benefits of maintaining a high credit score?', 
      answer: `Though credit score is not the only thing that lenders look at when considering a loan or credit card application, it is arguably one of the most important ones. Maintaining a good credit score comes with several benefits that include:
      
      <ul>
        <li>Greater chances of your loan applications being approved, as a high Credit score indicates higher creditworthiness and lower risk for the lender</li>
        <li>You are more likely to receive lower interest rates on loans</li>
        <li>You can get easy and quick approval for your loan and credit card applications</li>
        <li>Access to pre-approved loans based on your eligibility</li>
        <li>You can avail higher limit on your credit cards</li>
        <li>Discount on processing fees and other charges</li>
      </ul>`
    },
    {question:'What to do if your credit score is low?',  answer: `A low credit score can make it difficult for you to get your loan or credit card applications approved. You can take the following steps and adhere strictly to it to improve your credit score again:<br/>
    <br/>
      <p>Start paying your loan EMIs and credit card bills on time. Do not miss payments under any circumstances.</p><br/>
      <p>Reduce your excessive dependency on credit and try to reduce your credit utilization ratio, especially if you max out your credit card limit regularly.</p><br/>
      <p>In case of errors in your credit report, get it rectified at the earliest from the credit bureau. For this, you should check your credit score online regularly through Paisabazaar and if there’s a fall, do check the report for errors.</p><br/>
      <p>Avoid applying for multiple loans or credit cards very frequently. It is advisable to wait for six months from availing the latest credit instrument before you apply for credit again.</p><br/>
      <p>Avoid closing your oldest credit card. A longer credit history helps lenders take credit-related decisions with more confidence.</p><br/>
      <p>Keep a good mix of secured (e.g., home loan, car loan, etc.) and unsecured credit (personal loan, credit card, etc.) in your profile.</p><br/>
      <p>Seek expert advice from Paisabazaar’s Credit Advisory Services to improve your credit score significantly.</p>`
    }
  ];
  
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const inputRefs = useRef([]);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index); // Toggle FAQ visibility
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendOTP = (e) => {
    if (validateForm()) {
      handleFormSubmit(e);
      console.log('Send OTP button clicked');
      setOpen(true); // Open the OTP dialog
      
    }
  };

  const handleOtpInputChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const updatedOtpDigits = [...otpDigits];
      updatedOtpDigits[index] = value;
      setOtpDigits(updatedOtpDigits);

      if (value === '' && index > 0) {
        const prevInput = inputRefs.current[index - 1];
        prevInput.focus();
        setTimeout(() => {
          prevInput.setSelectionRange(prevInput.value.length, prevInput.value.length);
        }, 0);
      } else if (index < otpDigits.length - 1 && value.length === 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {

    verify_otp_credithaat_from_backend(e);
    // const enteredOTP = otpDigits.join('');
    // console.log('OTP Submitted:', enteredOTP);
    // setOtpStatus(enteredOTP === '123456' ? 'OTP verified successfully!' : 'Invalid OTP. Please try again.');
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate First Name
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }

    // Validate Last Name
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }

    // Validate Mobile Number
    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number should be 10 digits and start with 6 or higher';
      valid = false;
    }

    // Validate Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Validate PAN
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan)) {
      newErrors.pan = 'PAN should be in format AAAAA9999A';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Function to handle PAN input change and format it
  const handlePanChange = (e) => {
    let value = e.target.value.toUpperCase(); // Auto-capitalize input
    value = value.replace(/[^A-Z0-9]/g, ''); // Remove non-alphanumeric characters
    if (value.length > 5) {
      value = value.slice(0, 5) + value.slice(5, 9).replace(/[^0-9]/g, '') + value.slice(9, 10);
    }
    setPan(value);
    
    // Clear PAN error if the input is valid or starts being corrected
    if (/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value) || value.length === 0) {
      setErrors((prevErrors) => ({ ...prevErrors, pan: '' }));
    }
  };

  // Function to handle mobile number input change
  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numeric values
    if (value.length <= 10) {
      setMobileNumber(value);
    }
    
    // Clear mobile number error if the input is valid or starts being corrected
    if (/^[6-9]\d{9}$/.test(value) || value.length === 0) {
      setErrors((prevErrors) => ({ ...prevErrors, mobileNumber: '' }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
  
        const formData1 = new FormData();
        formData1.append('mobileNumber',mobileNumber);
        formData1.append('firstName', firstName);
        formData1.append('lastName', lastName);
        // formData1.append('profession', formData.profession);
        formData1.append('email',email);
        formData1.append('pan', pan);
  
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}creditscoreotpgenerator`, formData1);
  
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

  const encodeToBase64 = (text) => {
    try {
      // Convert text to Base64
      return btoa(unescape(encodeURIComponent(text)));
    } catch (error) {
      console.error('Error encoding to Base64:', error);
      return '';
    }
  };

  const  credit_score_api= async (e) => {

    console.log("Inside credit_score_api");
    e.preventDefault();
    try {

      console.log("Before encodeToBase64")
      const mno = encodeToBase64(mobileNumber);

   console.log("after encodeToBase64")
        const formData1 = new FormData();
        console.log("befre mark")
        formData1.append('mark',mno);
        console.log("after encodeToBase64")


        // formData1.append('firstName', firstName);
        // formData1.append('lastName', lastName);
        // // formData1.append('profession', formData.profession);
        // formData1.append('email',email);
        // formData1.append('pan', pan);
  
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}credit_score`, formData1, {
          headers: {
              'Content-Type': 'application/json',
              'token': 'Y3JlZGl0aGFhdHRlc3RzZXJ2ZXI=' // Add your token here
          }
      });

      if(response.code === 200){
        console.log("Credit score api response : ",response);
      }
  
        if (response.data.code === 0) {
  
            setStgOneHitId(response.data.obj.stgOneHitId);
            setstgTwoHitId(response.data.obj.stgTwoHitId);
            sett_experian_log_id(response.data.obj.t_experian_log_id);

            console.log("Credit score api response : ",response);
  
        }

        if(response.data.code === 200){
          console.log("Credit score api response : ",response.data.data.score);
          setActiveContainer("formUpdated");
          setOpen(false);
          setCreditScore(response.data.data.score);
          setMarkVarToSend(response.data.data.mark);
        }else{
          setActiveContainer("technical_error");
          setOpen(false);
        }
  
        if (response.status === 200) {
          // console.log("Credit score api response : ",response.data.data.score);
          // setActiveContainer("formUpdated");
          // setOpen(false);
          // setCreditScore(response.data.data.score);
          
        } else {
            console.error('Submission failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
  };

  const [creditScore, setCreditScore] = useState("NA");


  const verify_otp_credithaat_from_backend = async (e) => {
    e.preventDefault();
    try {
        const formData1 = new FormData();
        formData1.append('mobileNumber', mobileNumber);
        formData1.append('otp', otpDigits.join(""));
        formData1.append('stgOneHitId', stgOneHitId);
        formData1.append('stgTwoHitId', stgTwoHitId);
        formData1.append('t_experian_log_id', t_experian_log_id);
  
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}verifyOTPNewPersonalloan`, formData1);
  
        console.log("Otp response code is : ",response.data.code)
  
        if (response.data.code === 0) {
          console.log("verified");
          credit_score_api(e);
        }
        else if (response.data.code === 1) {
          credit_score_api(e);
        }
  
        else if (response.data.code === 2) {
          credit_score_api(e);
        }
        else if (response.data.code === 3) {
          credit_score_api(e);
        }
        else {
          setOtpStatus('Invalid OTP. Please try again.');
        }
  
  
        if (response.status === 200) {
        } else {
            console.error('Submission failed:', response.statusText);
            setOtpDigits(Array(6).fill(''));
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <NavBar />

      {(activeContainer === "technical_error") ? (<TechnicalErrorPage/>): (

      (activeContainer === 'formUpdated')?(  <CreditScoreSecondPage creditScore2={creditScore} markVarToSend={markVarToSend} />):(

      <section>
        <div className="creditscore-heading">
          <h1>Credit Score</h1>
        </div>
        <div className="container-c">
          <div className="left-side">
            <form className="form1" onSubmit={(e) => e.preventDefault()}>
              <h2>Get free credit score report</h2>
              <div className="input-group">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (e.target.value.trim()) {
                      setErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
                    }
                  }}
                  placeholder="First name"
                  className={`input-field ${errors.firstName ? 'is-invalid' : ''}`}
                />
                {errors.firstName && <span className="invalid-feedback-cs">{errors.firstName}</span>}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    if (e.target.value.trim()) {
                      setErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
                    }
                  }}
                  placeholder="Last name"
                  className={`input-field ${errors.lastName ? 'is-invalid' : ''}`}
                />
                {errors.lastName && <span className="invalid-feedback-cs">{errors.lastName}</span>}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  placeholder="Mobile number"
                  className={`input-field ${errors.mobileNumber ? 'is-invalid' : ''}`}
                  maxLength="10"
                />
                {errors.mobileNumber && <span className="invalid-feedback-cs">{errors.mobileNumber}</span>}
              </div>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) || e.target.value.length === 0) {
                      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
                    }
                  }}
                  placeholder="Email"
                  className={`input-field ${errors.email ? 'is-invalid' : ''}`}
                />
                {errors.email && <span className="invalid-feedback-cs">{errors.email}</span>}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="pan"
                  value={pan}
                  onChange={handlePanChange}
                  placeholder="PAN"
                  className={`input-field ${errors.pan ? 'is-invalid' : ''}`}
                  maxLength="10"
                />
                {errors.pan && <span className="invalid-feedback-cs">{errors.pan}</span>}
              </div>
              <div className="input-group mb-2 ">
                <p className="terms-text" style={{color:"#000000a6", height: '40px', textAlign:'justify', overflowX: 'hidden', overflowY: 'auto' }}>
                  By clicking "Send OTP" button and accepting the terms and conditions set out here in, you provide your express consent to Social Worth Technologies Private Limited, Whizdm Innovations Pvt Ltd, Upwards Fintech Services Pvt Ltd, Tata Capital Financial Services Ltd, SmartCoin Financials Pvt Ltd, MWYN Tech Pvt Ltd, L&T Finance Ltd, Krazybee Services Pvt Ltd, Infocredit Services Pvt. Ltd, Incred Financial Services, IIFL Finance Ltd, EQX Analytics Pvt Ltd, EPIMoney Pvt Ltd, Bhanix finance and Investment LTd, Aditya Birla Finance Ltd to access the credit bureaus and credit information report and credit score. You also hereby irrevocably and unconditionally consent to usage of such credit information being provided by credit bureaus.
                </p>
              </div>
              <button type="button" onClick={handleSendOTP} className="send-otp-button">Send OTP</button>
            </form>
          </div>
          <div className="right-side">
            <img src={creditscoreimage} alt="Credit Score" />
          </div>
        </div>
      </section>

) 
)}
       {/*-----------------------------------FAQ Section--------------------- */}
       <div className="faq-container1" style={{ padding: "10px" }}>
        <h1 className="faq-creditscore">Frequently asked questions</h1>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item1">
            <div className="faq-question1" onClick={() => handleToggle(index)}>
              <span>{faq.question}</span>
              <span className={`arrow ${expandedIndex === index ? 'expanded' : ''}`}>▼</span>
            </div>
            {expandedIndex === index && (
              <div className="faq-answer1">
                <p dangerouslySetInnerHTML={{__html: faq.answer}}/>
              </div>
            )}
          </div>
        ))}
      </div>
{/**------------------------br partner------------------------------- */}
<VectorBar/>
<BureauPartner/>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <h2 className="css-h">Verify OTP</h2>
          <img src={otppageimage} alt="OTP Page Image" style={{ marginBottom: '20px', maxWidth: '50%' }} />
          <h4 className="terms-text-cs">
            Please enter the 6 digit code sent to your mobile number for verification.
          </h4>
           {/* OTP form */}
           <form className="otp-form" onSubmit={handleSubmit}>
            <div className="otp-input-container">
              {otpDigits.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpInputChange(index, e.target.value)}
                  className="otp-input"
                  maxLength="1"
                  autoFocus={index === 0} // Focus first input initially
                  ref={(input) => inputRefs.current[index] = input} // Assign ref to input element
                  inputMode="numeric"
                />
              ))}
            </div>
            {/* <p className="otp-status">{otpStatus}</p> */}
            <p className="otp-status" style={{color:'red', textAlign:'center'}}>{otpStatus}</p>
            <button type="submit" className="verify-button">
              Verify
            </button>
          </form>
          {/* {otpStatus && <div className={`otp-status ${otpStatus === 'OTP verified successfully!' ? 'success' : 'error'}`}>{otpStatus}</div>} */}
        </DialogContent>
      </BootstrapDialog>

      <NewHomePageFooter />
      <NewCityFooter />
    </>
  );
};

export default CreditScore;
