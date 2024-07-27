import React, { useState, useEffect, useRef } from 'react';
import './PLoanEMI.css'; // Import external CSS file
import Chart from 'chart.js/auto';
const PersonalLoan = () => {
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

  const calculateInterestAmount = () => {
    const totalPayment = parseFloat(calculateEMI()) * loanTerm;
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
      labels: ['Principal amount', 'Interest'],
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
      {/**----------------------------table Section-------------------------------------------- */}
      <section className="table-Sect">
        <h1>Product features</h1>
  <div class="table-container">
    <table class="table-left">
      <thead>
        <tr>
          <th style={{fontWeight:"normal",color:"#3e2780"}}>Personal loans</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <br></br>
              <li style={{fontSize: "18px"}}><p>Loan amount: up to ₹50 Lac</p></li>
              <li style={{fontSize: "18px"}}><p>Interest rate: starting from 10.99% p.a.</p></li>
              <li style={{fontSize: "18px"}}><p>Approval: same day approval</p></li>
              <li style={{fontSize: "18px"}}><p>Disbursal time: disbursal within 48 hours.</p></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table-right">
      <thead>
        <tr>
          <th style={{fontWeight:"normal",color:"#3e2780"}}> Personal loan eligibility</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
            <br></br>
              <li style={{fontSize: "18px"}}><p>Employment : salaried, self-employed and business owners</p></li>
              <li style={{fontSize: "18px"}}><p>Age : 21 to 55 years</p></li>
              <li style={{fontSize: "18px"}}><p>Income : minimum ₹20,000 per month</p></li>
              <li style={{fontSize: "18px"}}><p>Credit score : 680+</p></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

{/**---------------------------------------EMI Calculator Section--------------------------------------------- */}
      <section className="emi-calci">
      <div><h1 style={{textAlign:"center", marginBottom:"30px"}}>EMI calculator</h1></div>
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
              <label htmlFor="loanAmount">Loan amount: ₹{loanAmount}</label>
              <input
                type="range"
                id="loanAmount"
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

            <div className="slider-container">
              <label htmlFor="interestRate">Interest rate (% per annum): {interestRate}%</label>
              <input
                type="range"
                id="interestRate"
                min="1"
                max="20"
                step="0.5"
                value={interestRate}
                onChange={handleInterestRateChange}
              />
            </div>

            <div className="slider-container">
              <label htmlFor="loanTerm">Loan term (months): {loanTerm}</label>
              <input
                type="range"
                id="loanTerm"
                min="6"
                max="60"
                step="6"
                value={loanTerm}
                onChange={handleLoanTermChange}
              />
            </div>

            <button className="emibutton" onClick={handleCalculateClick}>Calculate</button>
          </div>

          <div className="emi-right">
            <div className="chart-container">
              <canvas ref={chartRef} />
            </div>
            <br/>
            <p>Total amount:₹{calculateEMI() * loanTerm}</p>
            <p>Monthly EMI: ₹{calculateEMI()}</p>
          </div>
        </div>
        </section>
        {/**---------------------------------------------------------------------------------------------------------- */}
        </>
  );
}
export default PersonalLoan;
