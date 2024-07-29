import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './CreditCardList.css'; // Ensure this file is correctly imported and styled
import hdfclogo from './ProductsImages/hdfclogo.png';
import hdfccard from './ProductsImages/hdfccard.png';


function CreditCardLenders({ companies }) {

    const storedUserData = sessionStorage.getItem('sucessData');
    const mydata = JSON.parse(storedUserData);

    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowConfetti(false);
        }, 50000); // Stop confetti after 3 seconds

        return () => clearTimeout(timeout);
    }, []);

    // Handle undefined or null companies prop
    // if (!companies || companies.length === 0) {
    //     return (
    //         <div className="credit-congratulations-container">
    //             <div className="credit-congratulations-message">
    //                 <h3>🎉 Congrats, Money Maestro! 🎉</h3><br></br>
    //                 <p>Form filled flawlessly! Pick your champion and let's <br></br>get that cash dash started! 💸🏃‍♂️</p>
    //             </div>
    //             <div className="credit-company-names">
    //                 <div className='allclass' style={{ display: 'flex', textAlign: 'center' }}>
    //                     <div className='credit-company-names-first'>
    //                         <img src={hdfccard} alt='Lenderimage'></img>
    //                     </div>
    //                     <div className='logoc'>
    //                         <img src={hdfclogo} alt='Lenderimage' style={{ width: '120%' }}></img>
    //                     </div>
    //                 </div>
    //                 <div className='credit-company-names-second'>
    //                     <hr className="credit-credit-company-divider" />
    //                     <p> Intrest free credit</p>
    //                     <p>Greate travel benefits</p>
    //                     <p>Complementry insurence</p>
    //                     <p>improve your credit score.</p>
    //                 </div>

    //                 <div>
    //                     <button className="credit-congraths-button">Continue</button>
    //                 </div>
    //             </div>
    //             {/* Render celebratory confetti */}
    //             {showConfetti && (
    //                 <div className="credit-confetti-container">
    //                     {[...Array(100)].map((_, index) => (
    //                         <div key={index} className="confetti-piece" style={{ left: `${Math.random() * 100}vw`, top: `${Math.random() * 100}vh`, backgroundColor: getRandomColor(), transform: `rotate(${Math.random() * 360}deg)` }} />
    //                     ))}
    //                 </div>
    //             )}
    //         </div>
    //     );
    // }


    // Render when there are loan providers
    return (
        <div className="credit-congratulations-container">
            <div className="credit-congratulations-message">
                <h1>🎉 Congrats, Money Maestro! 🎉</h1>
                <p>Form filled flawlessly! Pick your champion and let's get that cash dash started! 💸🏃‍♂️</p>
            </div>
            <div className="credit-company-names">
                <h2>Postpaid Cards:</h2>
                <ul style={{listStyleType: 'none', padding:'0px'}}>
                    {mydata.data.lender_details.filter(lender => lender.card_type === 1).map((company, index) => (
                        
                        <li key={index}>
                            <div className="credit-company-names">
                     <div className='allclass' style={{ display: 'flex', textAlign: 'center' }}>
                         <div className='credit-company-names-first'>
                             <img src={company.card_img} alt='Lenderimage' style={{ width: '200%' }}></img>
                         </div>
                         <div className='logoc'>
                             <img src={company.logo} alt='Lenderimage' style={{ width: '100%' }}></img>
                         </div>
                     </div>
                     <div className='credit-company-names-second'>
                         <hr className="credit-credit-company-divider" />
                         <p>{company.point_one}</p>
                         <p>{company.point_two}</p>
                         <p>{company.point_three}</p>
                         <p>{company.point_four}</p>
                     </div>

                     <div>
                         <button onClick={() => window.location.href = company.applicationlink} className="credit-congraths-button">Continue</button>
                     </div>
                 </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="credit-company-names">
                <h2>Prepaid Cards:</h2>
                <ul style={{listStyleType: 'none', padding:'0px'}}>
                    {mydata.data.lender_details.filter(lender => lender.card_type === 0).map((company, index) => (
                        
                        <li key={index}>
                            <div className="credit-company-names">
                     <div className='allclass' style={{ display: 'flex', textAlign: 'center' }}>
                         <div className='credit-company-names-first'>
                             <img src={company.card_img} alt='Lenderimage' style={{ width: '200%' }}></img>
                         </div>
                         <div className='logoc'>
                             <img src={company.logo} alt='Lenderimage' style={{ width: '100%' }}></img>
                         </div>
                     </div>
                     <div className='credit-company-names-second'>
                         <hr className="credit-credit-company-divider" />
                         <p>{company.point_one}</p>
                         <p>{company.point_two}</p>
                         <p>{company.point_three}</p>
                         <p>{company.point_four}</p>
                     </div>

                     <div>
                        {console.log("app link : ",company.applicationlink)}
                         <button onClick={() => window.location.href = company.applicationlink} className="credit-congraths-button"  >Continue</button>
                     </div>
                 </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Render celebratory confetti */}
            {showConfetti && (
                <div className="credit-confetti-container">
                    {[...Array(100)].map((_, index) => (
                        <div key={index} className="confetti-piece" style={{ left: `${Math.random() * 100}vw`, top: `${Math.random() * 100}vh`, backgroundColor: getRandomColor(), transform: `rotate(${Math.random() * 360}deg)` }} />
                    ))}
                </div>
            )}
        </div>
    );
}

// Function to generate random colors for confetti
function getRandomColor() {
    const colors = ['#FFD700', '#FF6347', '#ADFF2F', '#8A2BE2', '#FF69B4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

export default CreditCardLenders;
