import React, { useState, useEffect, useRef } from 'react';
import './BLoanEMI.css'; // Import external CSS file
import Chart from 'chart.js/auto';
const BLoanEMI = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(8);
  const [loanTerm, setLoanTerm] = useState(12);
  const [chartData, setChartData] = useState({
    labels: ['Principal amount', 'Interest amount'],
    datasets: [{
      data: [50000, 0], // Default values
      backgroundColor: ['rgba(62, 39, 128, 0.29)', '#3E2780'],
      hoverBackgroundColor: ['rgba(62, 39, 128, 0.29)', '#3E2780'],
    }]
  });
  const [editing, setEditing] = useState(null);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const calculateEMI = () => {
    const monthlyInterestRatio = (interestRate / 100) / 12;
    const loanTermMonths = loanTerm;

    if (loanAmount && interestRate && loanTerm) {
      const emi =
        (loanAmount * monthlyInterestRatio * Math.pow(1 + monthlyInterestRatio, loanTermMonths)) /
        (Math.pow(1 + monthlyInterestRatio, loanTermMonths) - 1);

      return emi.toFixed(2);
    }

    return '0.00';
  };

  const calculateTotalAmount = () => {
    const totalPayment = parseFloat(calculateEMI()) * loanTerm;
    return totalPayment.toFixed(2);
  };

  const calculateInterestAmount = () => {
    const totalPayment = parseFloat(calculateTotalAmount());
    const principalAmount = loanAmount;

    if (!isNaN(totalPayment) && !isNaN(principalAmount)) {
      const interestAmount = totalPayment - principalAmount;
      return interestAmount.toFixed(2);
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

    if (JSON.stringify(data) !== JSON.stringify(chartData)) {
      setChartData(data);
    }
  };

  useEffect(() => {
    updateChartData(); // Initialize chart data on component mount
  }, []);

  useEffect(() => {
    if (chartRef.current) {
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
                offsetX: -100,
                offsetY: -50,
                align: 'start',
                itemMargin: {
                  vertical: 10,
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

  const handleChange = (e, setter) => {
    setter(Number(e.target.value));
    updateChartData(); // Update chart data on input change
  };

  const handleBlur = () => {
    setEditing(null);
  };

  const handleInputClick = (field) => {
    setEditing(field);
  };

  const handleFocus = (e) => {
    e.target.select(); // Select the text inside the input field when it gains focus
  };

  const renderInputOrSpan = (field, value, setter, min, max, step) => {
    return editing === field ? (
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e, setter)}
        onBlur={handleBlur}
        autoFocus
        min={min}
        max={max}
        step={step}
        inputMode='numeric'
        className="input-field-e"
        onFocus={handleFocus}
      />
    ) : (
      <span
        className="changeinput"
        onClick={() => handleInputClick(field)}
      >
        {value}
      </span>
    );
  };


  return (
    <>
      {/**----------------------------table Section-------------------------------------------- */}
      <section className="table-Sect">
        <h1>Product features</h1>
  <div class="table-container">
    <table class="table-left">
      <thead>
        <tr>
          <th style={{fontWeight:"normal",color:"#3e2780"}}>Business loans</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <br></br>
              <li style={{fontSize: "18px"}}><p>Loan amount: up to Rs. 1Cr</p></li>
              <li style={{fontSize: "18px"}}><p>Interest rate: starting from 14.99%</p></li>
              <li style={{fontSize: "18px"}}><p>Approval: same day approval</p></li>
              <li style={{fontSize: "18px"}}><p>Disbursal time: within 24 hours of process completion</p></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table-right">
      <thead>
        <tr>
          <th style={{fontWeight:"normal",color:"#3e2780"}}> Business loan eligibility</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
            <br></br>
              <li style={{fontSize: "18px"}}><p>Business type: Sole proprietor, Private Limited, LLP, Partnership, OPC</p></li>
              <li style={{fontSize: "18px"}}><p>Age : 21 to 55 years</p></li>
              <li style={{fontSize: "18px"}}><p>Income : minimum Rs.1Lac monthly turnover</p></li>
              <li style={{fontSize: "18px"}}><p>Credit score : 680+</p></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

{/**---------------------------------------EMI Calculator Section--------------------------------------------- */}
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
                <label>Loan amount in ₹ :</label>
                {renderInputOrSpan('loanAmount', loanAmount, setLoanAmount, 10000, 100000, 1000)}
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="1000"
                  value={loanAmount}
                  onChange={(e) => handleChange(e, setLoanAmount)}
                  className="slider"
                  style={{
                    background: `linear-gradient(to right, #3e2780 0%, #3e2780 ${(loanAmount - 10000) / (100000 - 10000) * 100}%, #ccc ${(loanAmount - 10000) / (100000 - 10000) * 100}%, #ccc 100%)`
                  }}
                />
              </div>

              <div className="slider-label-container">
                <label>Interest rate in % : </label>
                {renderInputOrSpan('interestRate', interestRate, setInterestRate, 1, 36, 0.5)}
                <input
                  type="range"
                  min="1"
                  max="36"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => handleChange(e, setInterestRate)}
                  className="slider"
                />
              </div>

              <div className="slider-label-container">
                <label>Loan term (months):</label>
                {renderInputOrSpan('loanTerm', loanTerm, setLoanTerm, 6, 60, 6)}
                <input
                  type="range"
                  min="6"
                  max="60"
                  step="6"
                  value={loanTerm}
                  onChange={(e) => handleChange(e, setLoanTerm)}
                  className="slider"
                />
              </div>
            </div>

            <button className="emibutton" onClick={updateChartData}>
              Calculate
            </button>
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
        </section>
        {/**---------------------------------------------------------------------------------------------------------- */}
        </>
  );
}
export default BLoanEMI;
