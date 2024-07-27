import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const NewHomePageFooter = () => {
  return (
    <footer class="footer" style={{backgroundColor:"#3e2780", marginTop:"50px",paddingTop:"30px",paddingBottom:"30px"}}>
    <section class="container">
      <div class="row" style={{flexDirection:'row'}}>
    
  <div class="col-lg-4 col-md-6">
     <ul class="footer-link" style={{display:"flex", listStyleType:"none",gap:"20px",padding:"0"}} >
            <li class="footer-link_item" >
              <a class="footer-link_item" href="https://www.facebook.com/CreditHaat"><FontAwesomeIcon icon={faFacebook} size='3x'/> </a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href="https://www.linkedin.com/company/credithaat/"><FontAwesomeIcon icon={faLinkedin} size='3x' /></a>
            </li>
          </ul>
  </div>
  <div class="col-lg-4 col-md-6">
            <ul class="footer-link" style={{listStyleType:"none",padding:"0"}}>
            <b style={{color:"white", fontSize:"20px"}}>Product</b>

            <li class="footer-link_item">
                <a class="footer-link_item"  href="/PersonalLoan">Personal loan</a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href="/BusinessLoan" >Business loan</a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href="/creditcard">Credit card</a>
            </li>
            {/* <li class="footer-link_item">
              <a class="footer-link_item" href="/UpcomingProducts">Upcoming products</a>
            </li> */}
          </ul>
        </div>
  <div class="col-lg-4 col-md-6">
          <ul class="footer-link" style={{listStyleType:"none",textDecoration:"none",padding:"0"}}>
          <b style={{color:"white", fontSize:"20px"}}>Resource</b>

            <li class="footer-link_item">
              <a class="footer-link_item" href="/faq">FAQs</a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href='/Allpartners' >Lending partners</a> 
                          </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href="/acq" >Acquisition partners</a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href="/gro">Grievance redressal process</a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href="/CreditScore">Credit score</a>
            </li>
          </ul>
  </div>


 <style>
    {`
      
     .footer-link_item {
     color: #fff;
     }

    `}
    </style>   
          
      

 </div>
</section>
    
    
    <div class="copy-right container">
      <div class="row" >
 
        <div class="col-sm" style={{color:"white"}}>All rights reserved
        </div>
        <div class="col-sm text-right">
          <a href="/termsC" style={{color:"white" ,textDecoration:"none"}}>Terms of service</a>
        </div>
        <div class="col-sm text-right" >
          <a href="/privacy" style={{color:"white",textDecoration:"none"}}>Privacy policy</a>
        </div>
        <div class="col-sm text-right" >
          <a href="/ContactUs" style={{color:"white",textDecoration:"none"}}>Contact us</a>
        </div>
      </div>
    </div>
  </footer>



  )
}

export default NewHomePageFooter;

