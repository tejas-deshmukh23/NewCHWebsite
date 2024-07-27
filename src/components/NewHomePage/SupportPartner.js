
import React from "react";
import  './SupportPartner.css';
import support from "../NewHomePage/NewHomePageImages/ciieimage.png";

function SupportPartner(){
    return (
        // <footer style={{backgroundColor:"#F2EDFF80",marginTop:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
        <>
        <div className="Support-s">    
          <h1 style={{ marginTop : '15px',textAlign :' center', fontFamily:'Open Sans, sans-serif'}}>Supported by</h1>
        
        
    <div className="gridContainer-s">
          {/* Grid items (columns) */}
          {/* <div className={styles.gridItem}>All rights reserved</div> */}
          <div className="gridItem-s">
          <div><img className="support-partner-img" src={support} /></div>
        </div>
        </div>

         
         
        </div>
        
        
        
        </>
        
      );
    };

export default SupportPartner;