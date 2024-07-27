import React, { useState } from 'react';
import './CreditCardPageTwo.css';
import creditcardimagesix from './ProductsImages/creditcardimagesix.png';

function CreditCardPageTwo({ onPrevious }) {
  const [formData, setFormData] = useState({
    pincode: '',
    monthlyincome: '',
    employmenttype: '',
    companyName: '',
  });

  const [errors, setErrors] = useState({
    pincode: '',
    monthlyincome: '',
    employmenttype: '',
    companyName: '',
  });

  const [showCompanyName, setShowCompanyName] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    let formattedValue = value;
  
    if (name === 'pincode') {
      formattedValue = formattedValue.replace(/\D/g, '').slice(0, 6); // Remove non-digits and limit to 6 digits
    } else if (name === 'monthlyincome') {
      // Allow only digits for Monthly Income
      formattedValue = value.replace(/\D/g, '');
    }
  
    // Update formData and clear errors for the current field
    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  
    // Clear error for the current field
    setErrors({
      ...errors,
      [name]: '',
    });
  
    // Handle visibility of Company Name based on Employment Type
    if (name === 'employmenttype') {
      if (value === 'Salaried') {
        setShowCompanyName(true);
      } else {
        setShowCompanyName(false);
      }
    }
  };
  

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.pincode.trim() || formData.pincode.length !== 6) {
      newErrors.pincode = 'Pincode must be exactly 6 digits';
      valid = false;
    }

    if (!formData.monthlyincome.trim()) {
      newErrors.monthlyincome = 'Monthly income is required';
      valid = false;
    } else if (!/^\d+$/.test(formData.monthlyincome)) {
      newErrors.monthlyincome = 'Monthly income should contain only digits';
      valid = false;
    }

    if (!formData.employmenttype.trim()) {
      newErrors.employmenttype = 'Employment type is required';
      valid = false;
    }

    if (showCompanyName && !formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="credit-card-c-container">
      <div className="credit-card-c-row">
        <div className="credit-card-c-col-md-6">
          <div className="credit-card-c-text-container">
            <h1>Get your card fast, and make your limits last!</h1>
          </div>
          <div className="credit-card-c-image-container">
            <img src={creditcardimagesix} alt="Placeholder" />
          </div>
        </div>
        <div className="credit-card-c-col-md-6-cc">
          <div className="credit-card-c-form-container">
            <h2>Check eligibility in 2 steps</h2>
            <form onSubmit={validateForm}>
              <div className="credit-card-c-form-group">
                {/* Removed label and added placeholder */}
                <input
                  type="text"
                  className={`credit-card-c-form-control ${errors.pincode ? 'is-invalid' : ''}`}
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  maxLength={6} // Limit to 6 characters
                  placeholder="Enter pincode"
                  inputMode="numeric"
                />
                {errors.pincode && <div className="credit-card-c-invalid-feedback">{errors.pincode}</div>}
              </div>
              <div className="credit-card-c-form-group">
                <input
                  type="text"
                  className={`credit-card-c-form-control ${errors.monthlyincome ? 'is-invalid' : ''}`}
                  id="monthlyincome"
                  name="monthlyincome"
                  value={formData.monthlyincome}
                  onChange={handleChange}
                  placeholder="Monthly income"
                  inputMode="numeric"
                />
                {errors.monthlyincome && <div className="credit-card-c-invalid-feedback">{errors.monthlyincome}</div>}
              </div>
              <div className="credit-card-c-form-group">
                <select
                  className={`credit-card-c-form-control ${errors.employmenttype ? 'is-invalid' : ''}`}
                  id="employmenttype"
                  name="employmenttype"
                  value={formData.employmenttype}
                  onChange={handleChange}
                  placeholder="Emloyment type"
                >
                  <option value="">Select Employment Type</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Self Employed">Self Employed</option>
                  <option value="Business">Business</option>
                </select>
                {errors.employmenttype && <div className="credit-card-c-invalid-feedback">{errors.employmenttype}</div>}
              </div>
              {showCompanyName && (
                <div className="credit-card-c-form-group">
                  <input
                    type="text"
                    className={`credit-card-c-form-control ${errors.companyName ? 'is-invalid' : ''}`}
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                  {errors.companyName && <div className="credit-card-c-invalid-feedback">{errors.companyName}</div>}
                </div>
              )}
              <div className="credit-card-c-button-container">
                <button type="button" className="credit-card-c-prv-btn-btn-primary" onClick={onPrevious}> Previous</button>
                <button type="submit" className="credit-card-c-btn-btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCardPageTwo;
