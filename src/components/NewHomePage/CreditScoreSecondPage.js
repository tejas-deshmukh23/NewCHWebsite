import React, { useState ,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import './CreditScoreSecondPage.css';
import ccimg from "../../images/EXP.png";
import { Link } from 'react-router-dom';

const CreditScoreSecondPage = ({creditScore2, markVarToSend}) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
      }, []);
  const [creditScore, setCreditScore] = useState(668); // Example credit score

      


  // Calculate values based on credit score
  const scorePercentage = creditScore / 1000 * 100; // Example conversion
  const scoreText = creditScore > 800 ? 'Excellent' : creditScore > 700 ? 'Good' : creditScore > 600 ? 'Average' : 'Bad';

  // Data for the doughnut chart
  const data = {
    datasets: [{
      data: [scorePercentage, 100 - scorePercentage],
      backgroundColor: ['#3E2780', '#ddd'],
      borderWidth: 0,
    }],
  };

  // Options for the doughnut chart
  const options = {
    cutout: '70%', // Adjust to control the thickness of the doughnut
    rotation: -90, // Rotate the chart so the top part is the starting point
    circumference: 180, // Make it a half-doughnut
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      legend: {
        display: false, // Hide the legend if not needed
      },
    },
  };

  const fullUrl = `http://localhost/h5/credit_report?mark=${encodeURIComponent(markVarToSend)}`

  return (
    <>
    <div className="cc-score-container">
      <div className="cc-score-left">
        <h1>Check your credit rating</h1>
        <p>A higher credit score can open doors <br className="desktop-only"/> to better financial opportunities and <br className="desktop-only"/>lower interest rates.</p>
       {/* <Link to="https://loan.credithaat.com/h5/credit_report?mark=">
        <button className="cc-score-download-button">Download report</button>
        </Link> */}
        <Link to={fullUrl}>
        <button className="cc-score-download-button">Download report</button>
        </Link>
      </div>

      <div className="cc-score-right">
        <img src={ccimg} alt="Experian Logo" className="cc-score-logo" />
        <div className="cc-score-chart">
          <Doughnut data={data} options={options} />
        </div>
        <div className="cc-score-info">
          {/* <p className="cc-score-number">{creditScore}</p> */}
          {(creditScore2!=="NA")?(<p className="cc-score-number" >{creditScore2}</p>):(<p className="cc-score-number" >Not Available</p>)}
          <p className="cc-score-text">{scoreText}</p>
          <p className="cc-score-update">Next update in 30 days</p>
        </div>
      </div>
    </div>

    </>
  );
}

export default CreditScoreSecondPage;
