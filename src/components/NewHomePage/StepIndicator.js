import React from 'react';
import './StepIndicator.css'; // Import your CSS file for styling

const StepIndicator = () => {
  return (
    <section className="step-sect">
      <div className="Step-c">
        <h1 style={{marginBottom:'20px', fontWeight:"normal"}}>How it works</h1>
      </div>
      <div className="step-indicator">
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems:'center' }}>
        <div className="step">
          <div className="step-circle">1</div>
          {/* <div className="step-line"></div> */}
        </div>
            <div style={{color:'white', backgroundColor: '#3e2780', height:'4px',width:'100%' }}>.
            </div>
            <div className="step">
          <div className="step-circle">2</div>
          {/* <div className="step-text">Registration</div> */}
          {/* <div className="step-line"></div> */}
        </div>
        
        <div style={{color:'white', backgroundColor: '#3e2780', height:'4px',width:'100%' }}>.
            </div>
        <div className="step">
          <div className="step-circle">3</div>
          {/* <div style={{marginBottom:'0px'}}>Disbursal</div> */}
        </div>
        </div>

        
        
      </div>
      <div className="step-indicator2">
        <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems:'center',marginTop:'-80px' }}>
        <div className="step">
          {/* <div className="step-circle">1</div> */}
          {/* <div className="step-line"></div> */}
          <div className="step-text">Registration</div>
        </div>
            <div style={{color:'white', backgroundColor: 'white', height:'4px',width:'100%' }}>.
            </div>
            <div className="step">
          <div className="step-text">Verification</div>
        </div>
        
        <div style={{color:'white', backgroundColor: 'white', height:'4px',width:'100%' }}>.
            </div>
        <div className="step">
          <div className="step-text">Disbursal</div>
        </div>
        </div>

        
        
      </div>
    </section>
  );
};

export default StepIndicator;
