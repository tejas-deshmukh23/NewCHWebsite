import React, { useState } from 'react';
import './AllPartners.css'; // Import your external CSS file
import NavBar from './NavBar';
import NewCityFooter from './newCityFooter';
import NewHomePageFooter from './NewHomePageFooter';
import pimage from '../NewHomePage/NewHomePageImages/allpartnerimage.png';
import creditimage from '../NewHomePage/NewHomePageImages/creditimage.png';
import bhaniximage from '../NewHomePage/NewHomePageImages/bhaniximage.png';
import fibeimage from '../NewHomePage/NewHomePageImages/fibeimage.png';
import finnableimage from '../NewHomePage/NewHomePageImages/finnableimage.png';
import finzyimage from '../NewHomePage/NewHomePageImages/finzyimage.png';
import flexiloansimage from '../NewHomePage/NewHomePageImages/flexiloansimage.png';
import fullertonimage from '../NewHomePage/NewHomePageImages/fullertonimage.png';
import homecreditimage from '../NewHomePage/NewHomePageImages/homecreditimage.png';
import iiflblimage from '../NewHomePage/NewHomePageImages/iiflblimage.png';
import iiflplimage from '../NewHomePage/NewHomePageImages/iiflplimage.png';
import incredimage from '../NewHomePage/NewHomePageImages/incredimage.png';
import indifiimage from '../NewHomePage/NewHomePageImages/indifiimage.png';
import kreditbeeimage from '../NewHomePage/NewHomePageImages/kreditbeeimage.png';
import moneytapimage from '../NewHomePage/NewHomePageImages/moneytapimage.png';
import moneyviewimage from '../NewHomePage/NewHomePageImages/moneyviewimage.png';
import mpokketimage from '../NewHomePage/NewHomePageImages/mpokketimage.png';
import niraimage from '../NewHomePage/NewHomePageImages/niraimage.png';
import naviimage from '../NewHomePage/NewHomePageImages/naviimage.png';
import prefrimage from '../NewHomePage/NewHomePageImages/prefrimage.png';
import privoimage from '../NewHomePage/NewHomePageImages/privoimage.png';
import stashfinimage from '../NewHomePage/NewHomePageImages/stashfinimage.png';
import tatacapitalimage from '../NewHomePage/NewHomePageImages/tatacapitalimage.png';
import rupeeimage from '../NewHomePage/NewHomePageImages/rupeeimage.png';
import upwardsimage from '../NewHomePage/NewHomePageImages/upwardsimage.png';
import kisshtimage from '../NewHomePage/NewHomePageImages/kisshtimage.png';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Allpartners = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3,setOpen3]=useState(false);
  const[open4,setOpen4]=useState(false);
  const[open5,setOpen5]=useState(false);
  const[open6,setOpen6]=useState(false);
  const[open7,setOpen7]=useState(false);
  const[open8,setOpen8]=useState(false);
  const[open9,setOpen9]=useState(false);
  const[open10,setOpen10]=useState(false);
  const handleClickOpen = () => {
    setOpen(true);  
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClickOpen4 = () => {
    setOpen4(true);
  };
  const handleClickOpen5 = () => {
    setOpen5(true);
  }
  const handleClickOpen6 = () => {
    setOpen6(true);
  }
  const handleClickOpen7 = () => {
    setOpen7(true);
  }
  const handleClickOpen8 = () => {
    setOpen8(true);
  }
  const handleClickOpen9 = () => {
    setOpen9(true);
  }
  const handleClickOpen10 = () => {
    setOpen10(true);
  }
  const handleClose = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpen5(false);
    setOpen6(false);
    setOpen7(false);
    setOpen8(false);
    setOpen9(false);
    setOpen10(false);
  };
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="allp-container">
        <div className="allp-sect">
          <h1>
            Lending partner of <span className="credit-haat-color">CreditHaat</span>
          </h1>
        </div>
        <div className="allp-image">
          <img src={pimage} className="partner-image" alt="Allp Image" />
        </div>
        </div>
        <div className="partner-details-container">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={creditimage}
          />
              <h5 style={{color:'#3e2780'}}>Credit Saison</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range: ₹20,000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" onClick={handleClickOpen}>
              Know More
            </button>
            <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog>
            </div>
          </div>
          </div> 
        </div>
        
        
        {/* ------------------------second lender--------------------------- */}


        <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={bhaniximage}
          />
              <h5 style={{color:'#3e2780'}}>Bhanix Finance And Investment Limited</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹1,000 - ₹4,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" ><a style={{textDecoration: 'none', color: 'white'}} href='https://bhanixfinance.com/products.html'>
              Know More</a>
            </button>
            
            
            </div>
          </div>
          </div>
        </div>

        {/* ------------------------third lender--------------------------- */}


        <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={fibeimage}
          />
              <h5 style={{color:'#3e2780'}}>Fibe</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹8,0 000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" onClick={handleClickOpen1}>
              Know More
            </button>
            <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open1}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <div  gutterBottom style={{color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Mr. Ankit Sundriyal<br/>
Company name: Social Worth Technologies Private Limited<br/>
Tel: 020- 67639797<br/>
Email: grievance@fibe.in<br/>
CustomerCare: 020- 67639797,care@fibe.in<br/>
Loans on Fibe are provided by RBI regulated NBFCs - a complete list can be found on - https://www.fibe.in/our-lending-partners
          </div> 
        </DialogContent> 
      </BootstrapDialog>
            </div>
          </div>
          </div>
        </div>

 {/* ------------------------forth lender--------------------------- */}


                <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={finnableimage}
          />
              <h5 style={{color:'#3e2780'}}>Finnable</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹50,000 - ₹10,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" >
              Know More
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div>

     {/* ------------------------fifth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={finzyimage}
          />
              <h5 style={{color:'#3e2780'}}>Finzy</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹50,000 - ₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" >
              Know More
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div>


     {/* ------------------------sixth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={flexiloansimage}
          />
              <h5 style={{color:'#3e2780'}}>FlexiLoans</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹50,000-₹1,00,00,000</p>
              <p className="partner-info-text">Features:Unsecured Business Loans for MSMEs</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" onClick={handleClickOpen2}>
              Know More
            </button>
            <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open2}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Mr. Manish Lunia<br/>
Company name: Epimoney Private Limited<br/>
Tel: 022-62603800<br/>
Email: compliance@epimoney.com , nodal.grievance@epimoney.com<br/>
CustomerCare: 02268219595 ,connect@flexiloans.com<br/>
Link- https://flexiloans.com/co-lenders , privacy policy link - https://flexiloans.com/regulatory
          </div> 
        </DialogContent> 
      </BootstrapDialog>
            </div>
          </div>
          </div>
        </div> 


    {/* ------------------------seventh lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={fullertonimage}
          />
              <h5 style={{color:'#3e2780'}}>Fullerton</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹50,000 - ₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button">
              Know More
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div> 


     {/* ------------------------eighth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={homecreditimage}
          />
              <h5 style={{color:'#3e2780'}}>HomeCredit</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹5,000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" >
              Know More
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div>


     {/* ------------------------nineth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={iiflblimage}
          />
              <h5 style={{color:'#3e2780'}}>IIFL-BL</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹50,000-₹30,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" >
              Know More
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div> 


     {/* ------------------------tenth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={iiflplimage}
          />
              <h5 style={{color:'#3e2780'}}>IIFL-PL</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹5,000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" >
              Know More
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div> 


     {/* ------------------------eleventh lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={incredimage}
          />
              <h5 style={{color:'#3e2780'}}>Incred</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹10,000-₹10,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" ><a style={{textDecoration: 'none', color: 'white'}} href="https://www.incred.com/grievance.html">
              Know More</a>
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div>  


    {/* ------------------------twelveth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={indifiimage}
          />
              <h5 style={{color:'#3e2780'}}>Indifi</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹1,00,000-₹2,00,00,000</p>
              <p className="partner-info-text">Features:Business loan</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" onClick={handleClickOpen3}>
              Know More
            </button>
            <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open3}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer:<br/>
Company name: Indifi Technologies<br/>
Tel: 9696555444<br/>
Email: grievances@indifi.com<br/>
CustomerCare: 9696555444,cs@indifi.com<br/>
Loans on Indifi are provided by RBI regulated NBFCs - a complete list along with the lender’s details can be found on the following link - https://www.indifi.com
          </div> 
        </DialogContent> 
      </BootstrapDialog>  
            </div>
          </div>
          </div>
        </div> 


     {/* ------------------------thirteenth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={kreditbeeimage}
          />
              <h5 style={{color:'#3e2780'}}>Kreditbee</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹1,000-₹3,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" onClick={handleClickOpen4}>
              Know More
            </button>
            <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open4}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Ms. Meghana Shah<br/>
Company name: Finnovation Tech Solutions Private Limited<br/>
Tel: 080-44292200<br/>
Email: help@kreditbee.in<br/>
CustomerCare: 080-44292200,help@kreditbee.in<br/>
Loans on KreditBee are provided by RBI regulated NBFCs - a complete list along with the lender’s details can be found on the following link - https://www.kreditbee.in/grievance-
          </div>
          
        </DialogContent> 
      </BootstrapDialog>
            </div>
          </div>
          </div>
        </div>  


     {/* ------------------------forteenth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={moneytapimage}
          />
              <h5 style={{color:'#3e2780'}}>Moneytap</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹3,000-₹5 Lakh</p>
              <p className="partner-info-text">Features:Digital Credit Line</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" >
              Know More
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div>  


    {/* ------------------------fifteenth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={moneyviewimage}
          />
              <h5 style={{color:'#3e2780'}}>MoneyView</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹5,000-₹5,00,000</p>
              <p className="partner-info-text">Features:Personal Loans for Salaried andSelf Employed Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" onClick={handleClickOpen5}>
              Know More
            </button>
            <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open5}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Mr. Venkatraman Narayan<br/>
Company name: Whizdm Innovations Private Limited<br/>
Tel: +91-8045692002<br/>
Email: grievance@moneyview.in<br/>
CustomerCare: +91-8045692002<br/>
Loans on MoneyView are provided by RBI regulated NBFCs - a complete list can be found here - https://moneyview.in/our-lending-partn
          </div>  
        </DialogContent> 
      </BootstrapDialog>
            </div>
          </div>
          </div>
        </div>  


     {/* ------------------------sixteenth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={mpokketimage}
          />
              <h5 style={{color:'#3e2780'}}>Mpocket</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range:₹2,000-₹30,000</p>
              <p className="partner-info-text">Features:Short term personal loan</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" >
              Know More
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div>  


    {/* ------------------------seventeenth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={naviimage}
          />
              <h5 style={{color:'#3e2780'}}>Navi</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range: ₹20,000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" >
              Know More
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div>  


     {/* ------------------------eighteenth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={niraimage}
          />
              <h5 style={{color:'#3e2780'}}>Nira</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range: ₹20,000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" onClick={handleClickOpen6}>
              Know More
            </button>
            <BootstrapDialog
         onClose={handleClose}
         aria-labelledby="customized-dialog-title"
         open={open6}
       >
         <IconButton
           aria-label="close"
           onClick={handleClose}
           sx={{
             position: 'absolute',
             right: 8,
             top: 8,
             color: (theme) => theme.palette.grey[500],
           }}
         >
           <CloseIcon />
         </IconButton>
         <DialogContent dividers>
           <div  gutterBottom style={{color:'#3E2780',fontSize:'18px'}}>
           GrievanceRedressalOfficer: Goutham R<br/>
Company name: Shuhari Tech Ventures Private Limited<br/>
Email: goutham.r@nirafinance.com<br/>
CustomerCare: support@nirafinance.com<br/>
Loans on NIRA are provided by RBI regulated NBFCs - a complete list along with the lender’s details can be found on the following link - https://nirafinance.com/#partners
          </div>
         </DialogContent> 
       </BootstrapDialog>  
            </div>
          </div>
          </div>
        </div>  


    {/* ------------------------Nineteenth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={prefrimage}
          />
              <h5 style={{color:'#3e2780'}}>Prefr</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range: ₹20,000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" onClick={handleClickOpen7}>
              Know More
            </button>
            <BootstrapDialog
         onClose={handleClose}
         aria-labelledby="customized-dialog-title"
         open={open7}
       >
         <IconButton
           aria-label="close"
           onClick={handleClose}
           sx={{
             position: 'absolute',
             right: 8,
             top: 8,
             color: (theme) => theme.palette.grey[500],
           }}
         >
           <CloseIcon />
         </IconButton>
         <DialogContent dividers>
           <div  gutterBottom style={{color:'#3E2780',fontSize:'18px'}}>
           GrievanceRedressalOfficer: Mr. Moksh Jain<br/>
Company name: Shuhari Tech Ventures Private Limited<br/>
Tel: 9341 300 300<br/>
Email: nodal.officer@prefr.com<br/>
CustomerCare: 9341 300 300<br/>
info@prefr.com
          </div>
         </DialogContent> 
       </BootstrapDialog>  
            </div>
          </div>
          </div>
        </div>  


    {/* ------------------------twentynth lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={privoimage}
          />
              <h5 style={{color:'#3e2780'}}>Privo</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range: ₹20,000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" >
              Know More
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div> 


    {/* ------------------------twenty-one lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={stashfinimage}
          />
              <h5 style={{color:'#3e2780'}}>StashFin</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range: ₹20,000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" onClick={handleClickOpen8}>
              Know More
            </button>
            <BootstrapDialog
         onClose={handleClose}
         aria-labelledby="customized-dialog-title"
         open={open8}
       >
         <IconButton
           aria-label="close"
           onClick={handleClose}
           sx={{
             position: 'absolute',
             right: 8,
             top: 8,
             color: (theme) => theme.palette.grey[500],
           }}
         >
           <CloseIcon/>
         </IconButton>
         <DialogContent dividers>
           <div  gutterBottom style={{color:'#3E2780',fontSize:'18px'}}>
          <br/> GrievanceRedressalOfficer: Mr. Sanjeev Walia<br/>
Company name: EQX Analytics Private Limited<br/>
Tel: +91-9953595222<br/>
Email: grievance.officer@stashfin.com<br/>
CustomerCare:info@StashFin.com
          </div>
         </DialogContent> 
       </BootstrapDialog>  
            </div>
          </div>
          </div>
        </div> 


    {/* ------------------------twenty-two lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={tatacapitalimage}
          />
              <h5 style={{color:'#3e2780'}}>Tata Capital</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range: ₹20,000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" onClick={handleClickOpen9}>
              Know More
            </button>
            <BootstrapDialog
         onClose={handleClose}
         aria-labelledby="customized-dialog-title"
         open={open9}
       >
         <IconButton
           aria-label="close"
           onClick={handleClose}
           sx={{
             position: 'absolute',
             right: 8,
             top: 8,
             color: (theme) => theme.palette.grey[500],
           }}
         >
           <CloseIcon/>
         </IconButton>
         <DialogContent dividers>
           <div  gutterBottom style={{color:'#3E2780',fontSize:'18px'}}>
          <br/> GrievanceRedressalOfficer: Rajesh Kumar<br/>
Company name: Tata Capital Limited<br/>
Tel: 022-68219546<br/>
Email: CCRO@tatacapital.com<br/>
CustomerCare: 022-68219546<br/>
connect@flexiloans.com
          </div>
         </DialogContent> 
       </BootstrapDialog> 
            </div>
          </div>
          </div>
        </div>


    {/* ------------------------twenty-three lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={rupeeimage}
          />
              <h5 style={{color:'#3e2780'}}>RupeeReddy</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range: ₹20,000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" >
              Know More
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div>


    {/* ------------------------twenty-four lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={upwardsimage}
          />
              <h5 style={{color:'#3e2780'}}>Upwards</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range: ₹20,000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button" onClick={handleClickOpen10}>
              Know More
            </button>
            <BootstrapDialog
         onClose={handleClose}
         aria-labelledby="customized-dialog-title"
         open={open10}
       >
         <IconButton
           aria-label="close"
           onClick={handleClose}
           sx={{
             position: 'absolute',
             right: 8,
             top: 8,
             color: (theme) => theme.palette.grey[500],
           }}
         >
           <CloseIcon/>
         </IconButton>
         <DialogContent dividers>
           <div  gutterBottom style={{color:'#3E2780',fontSize:'18px'}}>
          <br/> GrievanceRedressalOfficer: Mr. Venkatesh Dontul<br/>
Company name: Upwards Capital Private Limited<br/>
Tel: + 91 98921 56608<br/>
Email: venkatesh.dontul@go-upwards.com<br/>
CustomerCare: +91-77150 98615
          </div>
         </DialogContent> 
       </BootstrapDialog>  
            </div>
          </div>
          </div>
        </div>   


    {/* ------------------------twenty-five lender--------------------------- */}


     <div className="partner-details">
          <div className="partner-info">
            <div className="partner-info-header">
            <img
            alt="logo"
            className="partner-logo"
            src={kisshtimage}
          />
              <h5 style={{color:'#3e2780'}}>Kissht</h5>
            </div>
            <div className="partner-info-content">
              <p className="partner-info-text">Amount range: ₹20,000-₹5,00,000</p>
              <p className="partner-info-text">Features: Personal Loans for Salaried Individuals</p>
          
         
          <div className="partner-buttons">
            <button className="apply-now-button">
              Apply Now
            </button>
            <button className="know-more-button"><a style={{textDecoration: 'none', color: 'white'}} href='https://kissht.com/customer_grievance'>
              Know More</a>
            </button>
            {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div  gutterBottom style={{fontFamily:'Noto Serif',color:'#3E2780',fontSize:'18px'}}>
          GrievanceRedressalOfficer: Preethi Nair<br/>
          Company name: Credit Saison india<br/>
Tel: +919962003070<br/>
Email: grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com<br/>
CustomerCare: support@creditsaison-in.com<br/>
paperless process,money transfer in within 24 hours<br/>
          </div> 
        </DialogContent> 
      </BootstrapDialog> */}
            </div>
          </div>
          </div>
        </div>                                                               
   

      <NewHomePageFooter />
      <NewCityFooter />
    </>
  );
};

export default Allpartners;
