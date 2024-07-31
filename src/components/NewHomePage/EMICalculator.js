import React, { useState, useEffect, useRef } from 'react';
import './EMICalculator.css'; // Import external CSS file
import Chart from 'chart.js/auto';
import emipageimage from './NewHomePageImages/emipageimage.png';
import NewNavBar from '../NewHomePage/NavBar';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import NewCityFooter from './newCityFooter';


const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(8);
  const [loanTerm, setLoanTerm] = useState(12);
  const [chartData, setChartData] = useState({});
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    updateChartData();
  }, [loanAmount, interestRate, loanTerm]);

  const handleLoanAmountChange = (e) => {
    const amount = parseInt(e.target.value, 10);
    setLoanAmount(amount);
  };

  const handleInterestRateChange = (e) => {
    const rate = parseFloat(e.target.value);
    setInterestRate(rate);
  };

  const handleLoanTermChange = (e) => {
    const term = parseInt(e.target.value, 10);
    setLoanTerm(term);
  };

  const handleLoanAmountInputChange = (e) => {
    const amount = parseInt(e.target.value, 10);
    setLoanAmount(amount);
  };

  const handleInterestRateInputChange = (e) => {
    const rate = parseFloat(e.target.value);
    setInterestRate(rate);
  };

  const handleLoanTermInputChange = (e) => {
    const term = parseInt(e.target.value, 10);
    setLoanTerm(term);
  };

  const calculateEMI = () => {
    const monthlyInterestRatio = (interestRate / 100) / 12;
    const loanTermMonths = loanTerm;

    if (loanAmount && interestRate && loanTerm) {
      const emi =
        (loanAmount * monthlyInterestRatio * Math.pow(1 + monthlyInterestRatio, loanTermMonths)) /
        (Math.pow(1 + monthlyInterestRatio, loanTermMonths) - 1);

      return emi.toFixed(2); // Convert to fixed decimal places
    }

    return '0.00';
  };

  const calculateTotalAmount = () => {
    const totalPayment = parseFloat(calculateEMI()) * loanTerm;

    return totalPayment.toFixed(2); // Convert to fixed decimal places
  };

  const calculateInterestAmount = () => {
    const totalPayment = parseFloat(calculateTotalAmount());
    const principalAmount = loanAmount;

    if (!isNaN(totalPayment) && !isNaN(principalAmount)) {
      const interestAmount = totalPayment - principalAmount;

      return interestAmount.toFixed(2); // Convert to fixed decimal places
    }

    return '0.00';
  };

  const updateChartData = () => {
    const principalAmount = parseFloat(loanAmount) || 0;
    const interestAmount = parseFloat(calculateInterestAmount()) || 0;

    const data = {
      labels: ['Principal amount', 'Interest amount'],
      datasets: [{
        data: [principalAmount, interestAmount],
        backgroundColor: ['rgba(62, 39, 128, 0.29)', '#3E2780'],
        hoverBackgroundColor: ['rgba(62, 39, 128, 0.29)', '#3E2780'],
      }]
    };

    setChartData(data);
  };

  const handleCalculateClick = () => {
    updateChartData();
  };

  useEffect(() => {
    if (chartRef.current && chartData.datasets) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(ctx, {
          type: 'doughnut',
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                callbacks: {
                  label: function(tooltipItem) {
                    return tooltipItem.label + ': ₹' + tooltipItem.raw.toFixed(2);
                  }
                }
              },
              legend: {
                display: true,
                position: 'bottom',
                offsetX: -100, // Adjust horizontal position
                offsetY: -50, // Adjust vertical position
                align: 'start', // Align items in a vertical line
                itemMargin: {
                  vertical: 10, // Adjust vertical spacing between legend items
                  horizontal: 0,
                },
                labels: {
                  font: {
                    size: 14,
                    weight: 'bold'
                  },
                  generateLabels: function(chart) {
                    const data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                      const legendLabels = [];
                      data.labels.forEach((label, index) => {
                        legendLabels.push({
                            text: `${label}: ₹${data.datasets[0].data[index].toFixed(2)}`,
                            fillStyle: data.datasets[0].backgroundColor[index]
                        });
                      });
                      return legendLabels;
                    }
                    return [];
                  }
                }
              }
            }
          }
        });
      }
    }
  }, [chartData]);

  return (
    <>
      <div className='Nav-Bar'>
        <NewNavBar />
      </div>
      <section>
        <div className="emi-calculator-container">
          <div className="emi-left">
            <div className='amountlefta'>
              <div className='amountleft'>
                <span>Principal:<br />₹{loanAmount}</span>
              </div>
              <div className='amountright'>
                <span>Interest: <br />₹{calculateInterestAmount()}</span>
              </div>
            </div>

            <div className="slider-container">
              <div className="slider-label-container">
                <label htmlFor="loanAmountSlider">Loan amount: </label>
                <input
                  type="range"
                  id="loanAmountSlider"
                  min="10000"
                  max="100000"
                  step="1000"
                  value={loanAmount}
                  onChange={handleLoanAmountChange}
                  style={{
                    background: `linear-gradient(to right, #3e2780 0%, #3e2780 ${(loanAmount - 10000) / (100000 - 10000) * 100}%, #ccc ${(loanAmount - 10000) / (100000 - 10000) * 100}%, #ccc 100%)`
                  }}
                />
              </div>

              <div className="slider-label-container">
                <label htmlFor="interestRateSlider">Interest rate (% per annum): </label>
                <input
                  type="range"
                  id="interestRateSlider"
                  min="1"
                  max="20"
                  step="0.5"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                />
              </div>

              <div className="slider-label-container">
                <label htmlFor="loanTermSlider">Loan term (months): </label>
                <input
                  type="range"
                  id="loanTermSlider"
                  min="6"
                  max="60"
                  step="6"
                  value={loanTerm}
                  onChange={handleLoanTermChange}
                />
                </div>
            </div>

            <button className="emibutton" onClick={handleCalculateClick}>Calculate</button>
          </div>

          <div className="emi-right">
            <h1>EMI Calculator</h1>
            <div className="chart-container">
              <canvas ref={chartRef} />
            </div>
            <br/>
            <p>Total amount: ₹{calculateTotalAmount()}</p>
            <p>Monthly EMI: ₹{calculateEMI()}</p>
          </div>
        </div>

        <div className="additional-content">
          <img src={emipageimage} alt="Additional Image" />
          <h1><span style={{ color: '#3e2780' }}>Top</span> <br />benefits of using a loan emi calculator </h1>
        </div>
        <div className="textcontent" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          <div className="benefitsf">
            <h2 style={{ color: "#3e2780" }}><span className="number-e"> 1 </span> Financial Planning:</h2>
            <p>Helps you budget effectively by knowing the exact monthly outflow.</p>
          </div>
          <div className="benefitss">
            <h2 style={{ color: "#3e2780" }}><span className="number-e"> 2 </span> Stress-Free Decision Making:</h2>
            <p>Make loan decisions with confidence, knowing the financial implications beforehand.</p>
          </div>
          <div className="benefitst">
            <h2 style={{ color: "#3e2780" }}><span className="number-e"> 3 </span> Time-Saving:</h2>
            <p>Quickly calculate EMIs without manual effort or complex formulas.</p>
          </div>
          <div className="benefitsf">
            <h2 style={{ color: "#3e2780" }}><span className="number-e"> 4 </span> Immediate Results:</h2>
            <p>Instant calculations allow you to make informed decisions quickly.</p>
          </div>
        </div>
      </section>
      <NewHomeFooter />
      <NewCityFooter />
    </>
  );
};

export default EMICalculator;
