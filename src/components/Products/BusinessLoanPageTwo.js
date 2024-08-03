import React, { useState } from 'react';
import './BusinessLoanPageTwo.css';
import businessloanimagetwo from './ProductsImages/businessloanimagetwo.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { format } from 'date-fns';

function BusinessLoanPageTwo({ onNext, onPrevious, mainFormData, dobFlag }) {
  const currentYear = new Date().getFullYear(); // Get current year
  const minYear = currentYear-59; // Minimum selectable year

  const [formData, setFormData] = useState({
    dob: null,
    gender: '',
    pan: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    dob: '',
    gender: '',
    pan: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Convert PAN input to uppercase
    const formattedValue = value.toUpperCase();
  
    // Validate PAN format only when changing the 'pan' field
    if (name === 'pan') {
      if (/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formattedValue) || formattedValue === '') {
        setFormData({
          ...formData,
          [name]: formattedValue,
        });
        setErrors({
          ...errors,
          [name]: '',
        });
      } else {
        setFormData({
          ...formData,
          [name]: formattedValue,
        });
        setErrors({
          ...errors,
          [name]: 'Invalid PAN format',
        });
      }
    } else {
      // For other fields (dob, gender, address), simply update formData
      setFormData({
        ...formData,
        [name]: formattedValue,
      });
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      handleBLSecondPageFormSubmit(e);
      onNext();
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
  
    if (dobFlag && !formData.dob) {
      newErrors.dob = 'Date of birth is required';
      valid = false;
    }
  
    if (!formData.gender.trim()) {
      newErrors.gender = 'Gender is required';
      valid = false;
    }
  
    if (!formData.pan.trim()) {
      newErrors.pan = 'PAN is required';
      valid = false;
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) {
      newErrors.pan = 'Invalid PAN format';
      valid = false;
    }
  
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
      valid = false;
    }
  
    setErrors(newErrors);
    return valid;
  };

  // -------------------------------------------------------------------------------------------------------------------

  const handleBLSecondPageFormSubmit = async (e) => {
    // e.preventDefault();
    e.preventDefault();
    try {
  
        const formData1 = new FormData();
        formData1.append('mobileNumber', mainFormData.mobileNumber);
        formData1.append('pan',formData.pan);
        formData1.append('dob',formData.dob);
        formData1.append('gender',formData.gender);
        formData1.append('address',formData.address);
  
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}secondpagebusinessloan`, formData1);
  
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

  const handleDateChange = (date) => {

    console.log("Inside handle date change");
    const formattedDate = date ? format(date, 'yyyy-MM-dd') : null;
    setFormData({ ...formData, dob: formattedDate });
    
    console.log("The changed date is :: ",formattedDate);

    // (date) => setFormData({ ...formData, dob: date }) 
  };

  const today = new Date();
  const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  const sixtyYearsAgo = new Date(today.getFullYear() - 60, today.getMonth(), today.getDate());

  // -------------------------------------------------------------------------------------------------------------------------
  

  return (
    <div className="bbloancontainer">
      <div className="bbloanrow">
        <div className="bbloan-col-md-6">
          <div className="bbloan-text-container">
            <h1>Apply for success, and watch your business progress!</h1>
          </div>
          <div className="bbloan-image-container">
            <img src={businessloanimagetwo} alt="bloanimg" />
          </div>
        </div>
        <div className="bbloan-col-md-6-bl">
            <h2>Check eligibility in 3 steps</h2>
            <form onSubmit={handleSubmit}>
            {dobFlag &&
              <div className="bbloan-form-group">
                <div className={`bbloan-form-control ${errors.dob ? 'is-invalid' : ''}`}>
                <DatePicker
                      selected={formData.dob}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      showYearDropdown
                      scrollableYearDropdown
                      yearDropdownItemNumber={150}
                      maxDate={eighteenYearsAgo}
                      minDate={sixtyYearsAgo}
                      placeholderText="Date of birth"
                      style={{ outline: 'none' }} // Inline style to remove outline
                    />
                </div>
                {errors.dob && <div className="bbloan-invalid-feedback">{errors.dob}</div>}
              </div>
            }
              <div className="bbloan-form-group">
                <select
                  className={`bbloan-form-control ${errors.gender ? 'is-invalid' : ''}`}
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  placeholder="Gender"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && <div className="bbloan-invalid-feedback">{errors.gender}</div>}
              </div>
              <div className="bbloan-form-group">
                <input
                  type="text"
                  className={`bbloan-form-control ${errors.pan ? 'is-invalid' : ''}`}
                  id="pan"
                  name="pan"
                  value={formData.pan}
                  onChange={handleChange}
                  placeholder="PAN"
                  autoCapitalize="characters"
                />
                {errors.pan && <div className="bbloan-invalid-feedback">{errors.pan}</div>}
              </div>
              <div className="bbloan-form-group">
                <input
                  type="text"
                  className={`bbloan-form-control ${errors.address ? 'is-invalid' : ''}`}
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
                {errors.address && <div className="bbloan-invalid-feedback">{errors.address}</div>}
              </div>
              <div className="bbloan-button-container">
                <button type="submit" className="bbloan-btn-btn-primary">
                  Next
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
  );
}

export default BusinessLoanPageTwo;
