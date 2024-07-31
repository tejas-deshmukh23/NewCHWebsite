import React, { useState, useEffect } from 'react';
import './ContactUs.css'; // Import your CSS file for styling
import contactimg from '../NewHomePage/NewHomePageImages/contactus.png';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import NewCityFooter from './newCityFooter';
import NavBar from './NavBar';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa'; // Import react-icons
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    query: '',
    message: ''
  });

  useEffect(()=>{
    console.log("form data name is : ",formData.name);

  },[formData])



  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    email: '',
    query: '',
    message: ''
  });

  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name should contain only letters and spaces';
      isValid = false;
    }

    // Validate Mobile Number
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must start with a digit between 6 and 9 and be exactly 10 digits long';
      isValid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Validate Query
    if (!formData.query) {
      newErrors.query = 'Please select a query';
      isValid = false;
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      contactBacked(e);
      setIsModalVisible(true); // Show modal on successful submission 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear the error for the field being edited
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }

    if (name === 'mobile') {
      // Allow only digits, and limit the length to 10 digits
      setFormData(prev => ({
        ...prev,
        [name]: value.replace(/\D/g, '').slice(0, 10) // Remove non-digits and limit to 10 digits
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // Hide modal
  };

  const contactBacked = async (e) => {
    e.preventDefault();


    const formData1 = new FormData();
      formData1.append('mobileNumber', formData.mobile);
      formData1.append('Name', formData.name);
      formData1.append('email', formData.email);
      formData1.append('selectQuery', formData.query);
      formData1.append('msg',formData.message)
    // e.preventDefault();
    try {
  
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}supportsubmit`, formData1);
  
        // if (response.data.code === 200) {
        //     const json = response.data.data;
        //     setCityDetails(json);
        //     // console.log(json.city_name)
        // }
  
        if (response.status === 200) {
  
        } else {
            console.error('Submission failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={`page-container ${isModalVisible ? 'modal-active' : ''}`}>
      <NavBar />
      <div className="contactus-head">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-us-container">
        <div className="image-container-contact">
          <img src={contactimg} alt="Contact" />
        </div>
        <div className="form-container-contact">
          <form onSubmit={handleSubmit}>
            <h2>Can we help you?</h2>
            <p>Have any queries? We’d love to hear from you</p>
            <div className="form-group-contact">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="form-group-contact">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile No."
                inputMode="numeric"
                pattern="[6-9]\d{9}" // Ensure the input field accepts exactly 10 digits and starts with 6-9
              />
              {errors.mobile && <span className="error-text">{errors.mobile}</span>}
            </div>
            <div className="form-group-contact">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group-contact">
              <select
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
              >
                <option value="" disabled>Select Query</option>
                <option value="CreditHaat application related issues">CreditHaat application related issues</option>
                <option value="General feedback">General feedback</option>
                <option value="Partnership">Partnership</option>
                <option value="Market queries">Market queries</option>
                <option value="DND">DND</option>
              </select>
              {errors.query && <span className="error-text">{errors.query}</span>}
            </div>
            <div className="form-group-contact">
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{ backgroundColor: '#3e2780', color: '#ffffff', padding: '10px', width: '50%', borderRadius: '5px', border: 'none' }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact icons */}
      <div className="support-options-container">
        <div className="support-option" onClick={() => window.open(`https://wa.me/7391043932`, '_blank')}>
          <FaWhatsapp style={{ color: '#3e2780', fontSize: '50px' }} />
        </div>
        <div className="support-option" onClick={() => window.open(`tel:+91 7391043932`, '_blank')}>
          <FaPhoneAlt style={{ color: '#3e2780', fontSize: '50px' }} />
        </div>
        <div className="support-option" onClick={() => window.open(`mailto:contact@credithaat.com`, '_blank')}>
          <FaEnvelope style={{ color: '#3e2780', fontSize: '50px' }} />
        </div>
      </div>

      <NewHomeFooter />
      <NewCityFooter />

      {/* Modal */}
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-checkmark">
              <FaCheckCircle style={{ color: '#28a745', fontSize: '60px' }} />
            </div>
            <h2>Submitted Successfully</h2>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
