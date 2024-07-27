import React from 'react';
import './ContactUs.css'; // Import your CSS file for styling
import contactimg from '../NewHomePage/NewHomePageImages/contactus.png';
import whatsappIcon from '../NewHomePage/NewHomePageImages/whatsappnew.png';
import emailIcon from '../NewHomePage/NewHomePageImages/gmailNewIcon.png';
import callIcon from '../NewHomePage/NewHomePageImages/callimg.png';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import NewCityFooter from './newCityFooter';
import NavBar from './NavBar';

const ContactUs = () => {
  const openWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = '7391043932';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const openCall = () => {
    // Replace with your phone number
    const phoneNumber = '912041257718';
    window.open(`tel:${phoneNumber}`, '_blank');
  };

  const openEmail = () => {
    // Replace with your email address
    const email = 'support@credithaat.com';
    window.open(`mailto:${email}`, '_blank');
  };

  return (
    <>
      <NavBar />
      <div className="contactus-head">
        <h1>Contact us</h1>
      </div>
      <div className="contact-us-container">
        <div className="image-container-contact">
          {/* Image goes here */}
          <img src={contactimg} alt="Contact" />
        </div>
        <div className="form-container-contact">
          <form>
            <h2>Can we help you?</h2>
            <p>Have any queries? We’d love to hear from you</p>
            <div className="form-group-contact">
              <input type="text" id="name" name="name" placeholder="Name" />
            </div>
            <div className="form-group-contact">
              <input type="tel" id="mobile" name="mobile" placeholder="Mobile No." />
            </div>
            <div className="form-group-contact">
              <select id="query" name="query">
                <option value="" disabled selected>
                  Select Query
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className="form-group-contact">
              <textarea id="message" name="message" rows="4" placeholder="Message"></textarea>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{ backgroundColor: '#3e2780', color: '#ffffff', padding: '10px', width: '50%', borderRadius: '5px' }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact icons */}
      <div className="support-options-container">
        <div className="support-option" onClick={openWhatsApp}>
          <img src={whatsappIcon} alt="WhatsApp" />
        </div>
        <div className="support-option" onClick={openCall}>
          <img src={callIcon} alt="Call" />
        </div>
        <div className="support-option" onClick={openEmail}>
          <img src={emailIcon} alt="Email" />
        </div>
      </div>

      <NewHomeFooter />
      <NewCityFooter />
    </>
  );
};

export default ContactUs;
