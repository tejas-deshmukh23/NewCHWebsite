import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/NewHomePage/HomePage';
import Footer from './components/Footer';
import ContactUs from './components/NewHomePage/ContactUs';
import TermsAndConditions from './components/NewHomePage/TermsAndConditions';
import GRO from './components/NewHomePage/GRO';
import PrivacyPolicy from './components/NewHomePage/PrivacyPolicy';
import Acquisition from './components/NewHomePage/Acquisition';
import EMICalculator from './components/NewHomePage/EMICalculator';
import AllPartners from './components/NewHomePage/AllPartners';
import CreditScore from './components/NewHomePage/CreditScore';
import TechnicalErrorPage from './components/NewHomePage/TechnicalErrorPage';

import CityPages from './components/NewHomePage/CityPages'; import CityPageInfo from './components/NewHomePage/CityPageInfo';
import PersonalLoanProduct from './components/Products/PersonalLoanProduct';
import BusinessLoan from './components/Products/BusinessLoan';
import CreditCard from "./components/Products/CreditCard";
import CreditCardPageTwo from "./components/Products/CreditCardPageTwo";
import BlCityPage from './components/NewHomePage/BlCityPage';
import MoreInformation from './components/NewHomePage/MoreInformation';
import PersonalLoanInfo from './components/Products/PersonalLoanInfo';
import HowItWorks from './components/NewHomePage/HowItWorks';
import CreditScoreSecondPage from './components/NewHomePage/CreditScoreSecondPage';
import NewAllPartners from './components/Products/NewAllPartners';

// import AboutPage from './components/AboutPage';
// import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/termsC" element={<TermsAndConditions />} />
        <Route path="/gro" element={<GRO />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/Acq" element={<Acquisition />} />
        <Route path="/Allpartners" element={<AllPartners />} />
        <Route path="/emicalci" element={<EMICalculator />} />
        <Route path="/CreditScore" element={<CreditScore />} />
        <Route path="/technicalError" element={<TechnicalErrorPage />} />
        {/* <Route path="/PersonalLoanCity" element={<CityPages />} /> */}
        <Route path="/cityinfo" element={<CityPageInfo />} />
        <Route path="/PersonalLoan" element={<PersonalLoanProduct />} />
        <Route path="/BusinessLoan" element={<BusinessLoan />} />
        <Route path="/creditcard" element={<CreditCard />} />
        <Route path="/creditcardpagetwo" element={<CreditCardPageTwo />} />
        <Route path="/BusinessLoanCity" element={<BlCityPage />} />
        <Route path="/moreinfo" element={<MoreInformation />} />
        <Route path="/plinfo" element={<PersonalLoanInfo />} />
        <Route path="/hiw" element={<HowItWorks />} />
        <Route path="/NewAllPartners" element={<NewAllPartners/>}/>
        

        {/* Dynamic Route for PersonalLoan with citypages */}
        <Route path="/PersonalLoanCity/:city" element={<CityPages/>} />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

        <Route path="/CreditScoreSecondPage" element={<CreditScoreSecondPage/>}/>

        {/* Dynamic Route for PersonalLoan with citypages */}
        <Route path="/BusinessLoanCity/:city" element={<BlCityPage/>} />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
