import React, { useState, useRef } from "react";
import './CreditScore.css'; // Import CSS file for styling
import creditscoreimage from '../NewHomePage/NewHomePageImages/creditscoreimage.png';
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
  const faqData = [
    { question: 'What is a credit score?', answer: 'A credit score is a numerical representation of your creditworthiness, typically ranging from 300 to 850. It is calculated based on your credit history, including your borrowing, repayment behaviors, and other financial activities. Lenders use credit scores to evaluate the risk of lending money to you. A higher credit score indicates a lower risk, which can result in better loan terms and interest rates.' },
    { question: 'Why checking your credit report is important ?', answer: 'You can contact customer support...' },
    { question: 'How is a credit score calculated?', answer: 'Yes, we offer discounts...' },
    { question: 'How can I improve my credit score?', answer: 'To change your password...' }
  ];
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const inputRefs = useRef([]);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Collapse if clicked again
    } else {
      setExpandedIndex(index); // Expand clicked FAQ
    }
  };

  // Function to handle opening of OTP dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to handle closing of OTP dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Dummy function to simulate OTP sending logic
  const handleSendOTP = () => {
    console.log('Send OTP button clicked');
    setOpen(true); // Open the OTP dialog
  };

  const handleOtpInputChange = (index, value) => {
    // Check if the entered value is numeric or empty (for delete/backspace)
    if (/^\d*$/.test(value)) {
      const updatedOtpDigits = [...otpDigits];
      updatedOtpDigits[index] = value;
      setOtpDigits(updatedOtpDigits);
  
      // Automatically focus on the previous OTP input field if deleting a digit
      if (value === '' && index > 0) {
        const prevInput = inputRefs.current[index - 1];
        prevInput.focus();
        // Use setTimeout to ensure the cursor positioning works consistently
        setTimeout(() => {
          prevInput.setSelectionRange(prevInput.value.length, prevInput.value.length);
        }, 0);
      } else if (index < otpDigits.length - 1 && value.length === 1) {
        inputRefs.current[index + 1].focus(); // Move focus to the next input
      }
    }
  };
  
  
  

  // Function to handle OTP form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOTP = otpDigits.join(''); // Combine OTP digits into a single string
    console.log('OTP Submitted:', enteredOTP);
    // Dummy OTP verification logic
    if (enteredOTP === '123456') {
      setOtpStatus('OTP verified successfully!');
    } else {
      setOtpStatus('Invalid OTP. Please try again.');
    }
  };

  // JSX structure of the CreditScoreForm component
  return (
    <>
      <NavBar />
      <section>
        <div className="creditscore-heading">
          <h1>Credit Score</h1>
        </div>
        <div className="container-c">
          <div className="left-side">
            <form className="form1" action="#">
              <h2>Get free credit score report</h2>
              <div className="input-group">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Mobile number"
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="pan"
                  value={pan}
                  onChange={(e) => setPan(e.target.value)}
                  placeholder="PAN"
                />
              </div>
              <div className="input-group mb-2 ">
                                    <p className="terms-text" style={{color:"#000000a6", height: '40px', textAlign:'justify',overflowX: 'hidden', overflowY: 'auto' }}>
                                        By clicking "Send OTP" button and accepting the terms and conditions set out here in, you provide your express consent to Social Worth Technologies Private Limited, Whizdm Innovations Pvt Ltd, Upwards Fintech Services Pvt Ltd, Tata Capital Financial Services Ltd, SmartCoin Financials Pvt Ltd, MWYN Tech Pvt Ltd, L&T Finance Ltd, Krazybee Services Pvt Ltd, Infocredit Services Pvt. Ltd, Incred Financial Services, IIFL Finance Ltd, EQX Analytics Pvt Ltd, EPIMoney Pvt Ltd, Bhanix finance and Investment LTd, Aditya Birla Finance Ltd to access the credit bureaus and credit information report and credit score. You also hereby irrevocably and unconditionally consent to usage of such credit information being provided by credit bureaus
                                    </p>
                                    </div>
              <div className="button-container">
                <button className="send-otp-button" onClick={handleSendOTP}>Send OTP</button>
              </div>
            </form>
          </div>
          <div className="right-side">
            <img src={creditscoreimage} alt="Credit Score" className="image" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bootstrap Dialog for OTP Input */}
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
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
          <img src={otppageimage} alt="OTP Page Image" style={{ marginBottom: '20px', maxWidth: '50%' }} />
          <h2 className="css-h">Fill OTP</h2>
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
            <p className="otp-status">{otpStatus}</p>
            <button type="submit" className="verify-button">
              Verify
            </button>
          </form>
        </DialogContent>
      </BootstrapDialog>

      <VectorBar />
      <BureauPartner />
      <NewHomePageFooter />
      <NewCityFooter />
    </>
  );
}


export default CreditScore;