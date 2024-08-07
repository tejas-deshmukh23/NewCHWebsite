import { useState, useEffect } from 'react';
import './HomePage.css'; // Assuming you have a CSS file for styling
import firstimg from '../NewHomePage/NewHomePageImages/undraw_wishes_icyp.png';
import secondimg from '../NewHomePage/NewHomePageImages/undraw_Dreamer_re_9tua.png';
import NewNavBar from '../NewHomePage/NavBar';
import thirdimg from '../NewHomePage/NewHomePageImages/undraw_Meeting_re_i53h.png';
import fourthimg from '../NewHomePage/NewHomePageImages/undraw_Online_payments_re_y8f2.png';
import fifthimg from '../NewHomePage/NewHomePageImages/undraw_fast_loading_re_8oi3 (1).png';
import sixthimg from '../NewHomePage/NewHomePageImages/girlmobile.png';
import NewHKeyPartners from './NewHKeyPartners';
import CustomerReview from './CustomerReview';
import Partnerlist from '../NewHomePage/PartnerList';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import NewCityFooter from './newCityFooter';
import SupportPartner from './SupportPartner';
import { Link } from "react-router-dom";
import Snehal from '../NewHomePage/NewHomePageImages/Snehal.jpeg.jpeg';
import NETHI from '../NewHomePage/NewHomePageImages/NETHI.jpeg';
import HowItWorks from './HowItWorks';

function HomePage() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0); // State to track active review index

  //-------------------------------------------faq-------------------------------
  const faqData = [
    { question: 'Will taking a loan from CreditHaat be costly?', answer: 'CreditHaat has tied up with the best lenders in India. CreditHaat ensures that users find the best loan offer for themselves.' },
    { question: 'Does CreditHaat charge any fees from users?', answer: 'No CreditHaat does not charge any fees from its users.' },
    { question: 'Is sharing personal information safe?', answer: 'Yes, CreditHaat uses the best encryption and security mechanisms to protect user information.' },
    { question: 'Will CreditHaat team help in completing loan application?', answer: 'CreditHaat’s experienced loan executives will provide users all the help to complete the loan application.' }
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Collapse if clicked again
    } else {
      setExpandedIndex(index); // Expand clicked FAQ
    }
  };
  // Toggle function for pagination dots
  const handleDotClick = (index) => {
    setActiveReviewIndex(index);
  };

  // Customer reviews data
  const customerReviews = [
    {
      id: 1,
      messageBefore: "100% Commited to customer satisfaction",
      message: "CreditHaat’s simple application process helped me find the best loan offer. In addition, their helpful loan executives helped me complete the loan application in no time.",
      name: "Snehal",
      image: Snehal,
    },
    {
      id: 2,
      messageBefore: "100% Commited to customer satisfaction",
      message:
        "Applying for a loan from CreditHaat is so easy and hasslefree.x The platform helped me avail a loan of ₹5 Lacs within 4 hours!",
      name: "Nethi",
      image: NETHI,
    },
    {
      id: 3,
      messageBefore: "100% Commited to customer satisfaction",
      message:
        "I needed funds to deal with an emergency. With CreditHaat I received money in my account within minutes.",
      name: "Santosh",
      image: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Santosh.jpeg",


    },
  ];
  // Auto-swapping logic for reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIndex((prevIndex) => (prevIndex + 1) % customerReviews.length);
    }, 4000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, []);




  return (
    <>
      <div className='Nav-Bar'>
        <NewNavBar />
      </div>
      <section className="container banner" style={{ maxWidth: "max-content" }}>
        <div className="row" style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 5%), rgba(0, 0, 0, 0))" }}>
          <div className="col-md-6 py-md-5 px-md-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <div className="text1">
              {/* Text content here */}
              {/* <h1 style={{color:"black", fontWeight:"bold"}}>CreditHaat</h1>*/}
              <h1>Welcome to CreditHaat</h1>
              <p className='textabout'>CreditHaat offers you the best loan offers from multiple Banks and NBFCs </p>
              <div>
                <Link to="/personalLoan">
                  <button type="submit" className="btn-p" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get started</button>
                </Link>
              </div>

            </div>
          </div>
          <div className="col-md-6" >
            <div className="image">
              {/* Image goes here */}
              <img src={firstimg} className="img-fluid banner_img" alt="Your Alt Text" />
            </div>
          </div>
        </div>


        <div className="heading-container-h">
          <span className="section-heading" style={{ color: "#3e2780" }}>Our products</span>

          <style>

            {`
       
       .heading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  margin-top: 40px;
}

.heading-container .heading {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black; /* Adjust the text color as needed */
  width: 100%;
  font-size: 25px;
  position: relative;
}


}
@media(max-width:768px){
.heading-container {
    align-items: flex-start; /* For left alignment on desktop view */
    margin-top: 30px;
  }
  
  .heading-container .heading {
    font-size: 28px;
  }
}
@media (min-width: 768px) {
  .heading-container {
    align-items: flex-start; /* For left alignment on desktop view */
    margin-top: 30px;
  }
  
  .heading-container .heading {
font-size: 2.5rem;
font-weight: 500;
padding-top: 70px;
  }
}

      `}
          </style>


        </div>

        <div className="row">
          <div className="col-md-6 py-md-5 px-md-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <div className="text3">
              <h1>Your ideal personal loan awaits</h1>
              <p>Find the lowest interest rate offers from our extensive network of banks and NBFCs.</p>
              <div>
                <Link to="/personalLoan">
                  <button type="submit" className="btn1" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get started</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image">
              <img src={secondimg} className="img-fluid banner_img" alt="Second Image" />
            </div>
          </div>
        </div>


        {/* Third row (new content) */}
        <div className="row mt-5">
          <div className="col-md-6 order-md-1 order-2">
            <div className="image">
              <img src={thirdimg} className="img-fluid banner_img" alt="Third Image" />
            </div>
          </div>
          <div className="col-md-6 order-md-2 order-1 py-md-5 px-md-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>

            <div className="text" >
              <h1>Business loans made easy</h1>
              <p>Loan with best terms to grow your business.</p>
              <div>
                <Link to="/BusinessLoan">
                  <button type="submit" className="btn1" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get started</button>
                </Link>
              </div>

            </div>
          </div>
        </div>


        {/* forth row */}

        <div className="row mt-5">
          <div className="col-md-6 py-md-5 px-md-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <div className="text">
              <h1>Choose the best credit card for you</h1>
              <p>Discover credit cards with exclusive rewards and perks.</p>
              <div>
                <Link to="/CreditCard">
                  <button type="submit" className="btn1" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get started</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image">
              <img src={fourthimg} className="img-fluid banner_img" alt="Second Image" />
            </div>
          </div>
        </div>

        {/* fifth row (new content) */}
        <div className="row mt-5">
          <div className="col-md-6 order-md-1 order-2">
            <div className="image">
              <img src={fifthimg} className="img-fluid banner_img" alt="Third Image" />
            </div>
          </div>
          <div className="col-md-6 order-md-2 order-1 py-md-5 px-md-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>

            <div className="text2">
              <h1>Check your credit score</h1>
              <p>Free credit scores to plan your finances.</p>
              <div>
                <Link to="/CreditScore">
                  <button type="submit" className="btn1" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get started</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* key partners */}
      </section>

      <NewHKeyPartners />
      <SupportPartner />


      {/* sixth image */}

      <div className="bloan-how-it-works">
        <h1>Simple online process</h1>
      </div>

      <HowItWorks />




      {/* review message */}


      {/* Customer Reviews */}
      <section className="customer-reviews">
        <div className="customer-reviews-grid">
          {customerReviews.map((review, index) => (
            <div className={`review-item ${activeReviewIndex === index ? 'active' : ''}`} key={review.id}>
              <CustomerReview
                messageBefore={review.messageBefore}
                message={review.message}
                name={review.name}
                image={review.image}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Pagination Dots */}
      <div className="pagination-dots text-center">
        {customerReviews.map((review, index) => (
          <span
            key={review.id}
            className={`dot ${activeReviewIndex === index ? 'active' : ''}`}
            onClick={() => setActiveReviewIndex(index)}
          ></span>
        ))}
      </div>


      {/*---------------------------FAQ Section---------------------------------------------------- */}
      <div className="faq-container-home" style={{ padding: "20px" }}>
        <h1 className="faq-home">Frequently asked questions</h1>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item-h">
            <div className="faq-question-h" onClick={() => handleToggle(index)}>
              <span>{faq.question}</span>
              <span className={`arrowh ${expandedIndex === index ? 'expanded' : ''}`}>▼</span>
            </div>
            {expandedIndex === index && (
              <div className="faq-answer-h">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Partnerlist />
      <NewHomeFooter />
      <NewCityFooter />
    </>


  );
}

export default HomePage;

