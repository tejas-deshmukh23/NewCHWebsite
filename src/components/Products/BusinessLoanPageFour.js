import React, { useState } from 'react';
import './BusinessLoanPageFour.css';
import businessloanimageseven from './ProductsImages/businessloanimageseven.png';

function BusinessLoanPageFour({ onNext, onPrevious }) {
  const [formData, setFormData] = useState({
    monthlyIncome:'',
    loanAmount: '',
    employmentType: '',
    businessType: '',
    pincode:'',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from e.target
    
    if (name === 'pincode' && !/^\d{0,6}$/.test(value)) {
      return;
    }
  
    if (name === 'monthlyIncome' && !/^\d*$/.test(value)) {
      return;
    }
  
    // Update formData with the new value
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      onNext();
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = (formData) => {
    const { monthlyIncome, loanAmount, employmentType, businessType, pincode } = formData;
    const newErrors = {};

    if (!monthlyIncome.trim()) {
        newErrors.monthlyIncome = 'Monthly income is required';
      } else if (!/^\d*$/.test(monthlyIncome)) {
        newErrors.monthlyIncome = 'Monthly income must be a number';
      }

    if (!loanAmount.trim()) {
      newErrors.loanAmount = 'Loan amount is required';
    } else if (isNaN(loanAmount)) {
      newErrors.loanAmount = 'Loan amount must be a number';
    }

    if (!employmentType.trim()) {
      newErrors.employmentType = 'Employment type is required';
    }

    if (!businessType.trim()) {
      newErrors.businessType = 'Business type is required';
    }

    if (!pincode.trim()) {
        newErrors.pincode = 'Pincode is required';
      } else if (!/^\d{6}$/.test(pincode)) {
        newErrors.pincode = 'Pincode must be a valid 6-digit number';
      }

    return newErrors;
  };

  return (
    <div className="sbbloancontainer">
      <div className="sbbloanrow">
        <div className="sbbloan-col-md-6">
          <div className="sbbloan-text-container">
            <h1>Quick apply, and reach for the sky!</h1>
          </div>
          <div className="sbbloan-image-container">
            <img src={businessloanimageseven} alt="bblimg" />
          </div>
        </div>
        <div className="sbbloan-col-md-6-bl">
            <h2>Check eligibility in 3 steps</h2>
            <form onSubmit={handleSubmit}>
            <div className="sbbloan-form-group">
                <input
                  type="text"
                  className={`bpploan-form-control ${errors.monthlyIncome ? 'is-invalid' : ''}`}
                  id="monthlyIncome"
                  name="monthlyIncome"
                  placeholder="Monthly income"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  inputMode="numeric"
                />
                {errors.monthlyIncome && <div className="sbbloan-invalid-feedback">{errors.monthlyIncome}</div>}
              </div>
              <div className="sbbloan-form-group">
                <input
                  type="text" // Change type to "number"
                  className={`sbbloan-form-control ${errors.loanAmount ? 'is-invalid' : ''}`}
                  id="loanAmount"
                  name="loanAmount"
                  placeholder="Loan amout"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  inputMode="numeric"
                />
                {errors.loanAmount && <div className="sbbloan-invalid-feedback">{errors.loanAmount}</div>}
              </div>
              <div className="sbbloan-form-group">
                <select
                  className={`sbbloan-form-control ${errors.employmentType ? 'is-invalid' : ''}`}
                  id="employmentType"
                  name="employmentType"
                  placeholder="Employment type"
                  value={formData.employmentType}
                  onChange={handleChange}
                >
                  <option value="">Select employment type</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Self Employed">Self employed</option>
                  <option value="Business">Business</option>
                </select>
                {errors.employmentType && <div className="sbbloan-invalid-feedback">{errors.employmentType}</div>}
              </div>
              <div className="sbbloan-form-group">
                <select
                  className={`sbbloan-form-control ${errors.businessType ? 'is-invalid' : ''}`}
                  id="businessType"
                  name="businessType"
                  placeholder="Business type"
                  value={formData.businessType}
                  onChange={handleChange}
                >
                  <option value="">Select business type</option>
                  <option value="Proprietary Firm">Proprietary firm</option>
                  <option value="Partnership">Partnership</option>
                  <option value="One Person Company">One person company</option>
                  <option value="Private Limited Company">Private limited company</option>
                  <option value="LLP">LLP</option>
                  <option value="Other">Other</option>
                </select>
                {errors.businessType && <div className="sbbloan-invalid-feedback">{errors.businessType}</div>}
              </div>
              <div className="sbbloan-form-group">
                <input
                  type="text"
                  className={`sbbloan-form-control ${errors.pincode ? 'is-invalid' : ''}`}
                  id="pincode"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  inputMode="numeric"
                />
                {errors.pincode && <div className="sbbloan-invalid-feedback">{errors.pincode}</div>}
              </div>
              <div className='sbbloan-button-container'>
                <button type="button" className="sbbloan-prev-btn-primary" onClick={onPrevious}>Previous</button>
                <button type="submit" className="sbbloan-btn-btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default BusinessLoanPageFour;
