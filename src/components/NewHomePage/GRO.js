import React from 'react';
import './GRO.css'; // Import your CSS file
import groimg from "../NewHomePage/NewHomePageImages/groimg.png";
import NavBar from './NavBar';
import NewCityFooter from './newCityFooter';
import NewHomePageFooter from './NewHomePageFooter';

const gro = () => {
    return (
        <>
            <div className="gro-page">
                <NavBar/>
            
            <div className="gro-container">
                <div className="text-content-gro" >
                    <h1 style={{fontWeight:"normal"}}>Grievance redressal process of <span style={{ color: "#3e2780" }}>CreditHaat</span></h1>
                </div>
                <div className="image-section-gro">
                    <img src={groimg} alt="gro Image" />
                </div>
            </div>
            <div className='text-part-gro' style={{ padding: "20px" }}>
                <div className="content-of-gro" >
                    
                    <p>We aim to delight our customers and work hard to make sure that we help our customers avail the best credit solutions from our vast network of lending partners. However we understand that even with our best efforts we may get it wrong some times. If you have a complaint or would like us to address any concerns please reach out to us at <span style={{color:"#3e2780"}}> support@credithaat.com </span> or send a letter to -</p>
                    </div>

                <div className="content-of-gro">
                    <h2 style={{fontWeight:"normal"}}>Vibhuprada services private limited</h2>
                    <p>Office No.  6 to 12, 7th Floor, Tower B,<br></br>Downtown City Vista, Survey number 58/2,<br></br>Fountain road,<br></br>Kharadi Pune MH 411014 IN.</p>
                </div>
                <div className="content-of-gro">
                    <h2 style={{fontWeight:"normal"}}>Escalation process:</h2>
                    <p>If your query/complaint has not been addressed within 7 working days; please reach out to our Grievance Redressal Officer as provided below -</p>
                </div>
                <div className="content-of-gro1">
                    <h2 style={{fontWeight:"normal"}}>Grievance redressal officer : </h2><span className="additional-info"> Monika Kaushik</span>
                </div>

                <div className="content-of-gro1">
                    <h2 style={{fontWeight:"normal"}}>Tel : </h2><span className="additional-info">  020-4125-7718</span>
                </div>
                <div className="content-of-gro1">
                    <h2 style={{fontWeight:"normal"}}>Designation : </h2><span className="additional-info">  GRO</span>
                </div>

                <div className="content-of-gro1">
                    <h2 style={{fontWeight:"normal"}}>Office address : </h2><span className="additional-info"> HO</span>
                </div>

         </div>
         
                   
                
                    <NewHomePageFooter/>
                    <NewCityFooter/>
                    </div>
                   
                </>
    );
}

export default gro;