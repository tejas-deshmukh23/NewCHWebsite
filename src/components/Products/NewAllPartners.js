import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './NewAllPartners.css'; // Ensure this file is correctly imported and styled
import pimage from "../NewHomePage/NewHomePageImages/allpartnerimage.png";
import creditimage from "../NewHomePage/NewHomePageImages/creditimage.png";
import bhaniximage from "../NewHomePage/NewHomePageImages/bhaniximage.png";
import fibeimage from "../NewHomePage/NewHomePageImages/fibeimage.png";
import finnableimage from "../NewHomePage/NewHomePageImages/finnableimage.png";
import finzyimage from "../NewHomePage/NewHomePageImages/finzyimage.png";
import flexiloansimage from "../NewHomePage/NewHomePageImages/flexiloansimage.png";
import fullertonimage from "../NewHomePage/NewHomePageImages/fullertonimage.png";
import homecreditimage from "../NewHomePage/NewHomePageImages/homecreditimage.png";
import iiflblimage from "../NewHomePage/NewHomePageImages/iiflblimage.png";
import iiflplimage from "../NewHomePage/NewHomePageImages/iiflplimage.png";
import incredimage from "../NewHomePage/NewHomePageImages/incredimage.png";
import indifiimage from "../NewHomePage/NewHomePageImages/indifiimage.png";
import kreditbeeimage from "../NewHomePage/NewHomePageImages/kreditbeeimage.png";
import moneytapimage from "../NewHomePage/NewHomePageImages/moneytapimage.png";
import moneyviewimage from "../NewHomePage/NewHomePageImages/moneyviewimage.png";
import mpokketimage from "../NewHomePage/NewHomePageImages/mpokketimage.png";
import niraimage from "../NewHomePage/NewHomePageImages/niraimage.png";
import naviimage from "../NewHomePage/NewHomePageImages/naviimage.png";
import prefrimage from "../NewHomePage/NewHomePageImages/prefrimage.png";
import privoimage from "../NewHomePage/NewHomePageImages/privoimage.png";
import stashfinimage from "../NewHomePage/NewHomePageImages/stashfinimage.png";
import tatacapitalimage from "../NewHomePage/NewHomePageImages/tatacapitalimage.png";
import rupeeimage from "../NewHomePage/NewHomePageImages/rupeeimage.png";
import upwardsimage from "../NewHomePage/NewHomePageImages/upwardsimage.png";
import kisshtimage from "../NewHomePage/NewHomePageImages/kisshtimage.png";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import NavBar from '../NewHomePage/NavBar';
import NewCityFooter from '../NewHomePage/newCityFooter';
import NewHomePageFooter from '../NewHomePage/NewHomePageFooter';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));


function NewAllPartners({ companies }) {

    const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
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
  };
  const handleClickOpen6 = () => {
    setOpen6(true);
  };
  const handleClickOpen7 = () => {
    setOpen7(true);
  };
  const handleClickOpen8 = () => {
    setOpen8(true);
  };
  const handleClickOpen9 = () => {
    setOpen9(true);
  };
  const handleClickOpen10 = () => {
    setOpen10(true);
  };
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
    <NavBar/>
  </div>
    <div className="lending-partner-list">

      <div className="lending-content">
        <div className="lending-text">
        <h1>
            Lending partner of <span className="credit-haat-color">CreditHaat</span>
          </h1>
        </div>
        <div className="lending-image">
          <img src={pimage} alt="Lending Partners" />
        </div>
      </div>
    </div>
        
      <div className='newallcontainer'>
        {/* ---------------------------------------1--------------------------------- */}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={creditimage} alt='Lenderimage'></img>
            <p>  Credit Saison</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton" onClick={handleClickOpen}>Know More</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Preethi Nair
                    <br />
                    Company name: Credit Saison india
                    <br />
                    Tel: +919962003070
                    <br />
                    Email:
                    grievance@creditsaison-in.com,preethi.nair@creditsaison-in.com
                    <br />
                    CustomerCare: support@creditsaison-in.com
                    <br />
                    paperless process,money transfer in within 24 hours
                    <br />
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* ---------------------------2-------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={bhaniximage} alt='Lenderimage'></img>
            <p>   Bhanix Finance And Investment Limited</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹1,000 - ₹4,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton"> <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://bhanixfinance.com/products.html"
                >
                  Know More
                </a></button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------3----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={fibeimage} alt='Lenderimage'></img>
            <p>  Fibe</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹8,0 000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton" onClick={handleClickOpen1}>Know More</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open1}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Mr. Ankit Sundriyal
                    <br />
                    Company name: Social Worth Technologies Private Limited
                    <br />
                    Tel: 020- 67639797
                    <br />
                    Email: grievance@fibe.in
                    <br />
                    CustomerCare: 020- 67639797,care@fibe.in
                    <br />
                    Loans on Fibe are provided by RBI regulated NBFCs - a
                    complete list can be found on -
                    https://www.fibe.in/our-lending-partners
                  </div>
                </DialogContent>
              </BootstrapDialog>
            </div>
          </div>
           </div>

        {/* --------------------------------4----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={finnableimage} alt='Lenderimage'></img>
            <p>  Finnable</p> 
            </div>
           <div className='secondonetext'>
           <p> Amount range:₹50,000 - ₹10,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton">Know More</button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------5----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={finzyimage} alt='Lenderimage'></img>
            <p>Finzy</p> 
            </div>
           <div className='secondonetext'>
           <p> Amount range:₹50,000 - ₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton">Know More</button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------6----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={flexiloansimage} alt='Lenderimage'></img>
            <p>  FlexiLoans</p> 
            </div>
           <div className='secondonetext'>
           <p> Amount range:₹50,000-₹1,00,00,000</p>
           <p>  Features:Unsecured Business Loans for MSMEs</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton" onClick={handleClickOpen2}>Know More</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open2}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Mr. Manish Lunia
                    <br />
                    Company name: Epimoney Private Limited
                    <br />
                    Tel: 022-62603800
                    <br />
                    Email: compliance@epimoney.com ,
                    nodal.grievance@epimoney.com
                    <br />
                    CustomerCare: 02268219595 ,connect@flexiloans.com
                    <br />
                    Link- https://flexiloans.com/co-lenders , privacy policy
                    link - https://flexiloans.com/regulatory
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------7----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={fullertonimage} alt='Lenderimage'></img>
            <p>  Fullerton</p> 
            </div>
           <div className='secondonetext'>
           <p> Amount range:₹50,000 - ₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton">Know More</button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------8----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={homecreditimage} alt='Lenderimage'></img>
            <p>  HomeCredit</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹5,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton">Know More</button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------9----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={iiflblimage} alt='Lenderimage'></img>
            <p> IIFL-BL</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹50,000-₹30,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton">Know More</button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------10----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={iiflplimage} alt='Lenderimage'></img>
            <p>  IIFL-PL</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹5,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton">Know More</button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------11----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={incredimage} alt='Lenderimage'></img>
            <p>  Incred</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹10,000-₹10,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton"><a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://www.incred.com/grievance.html"
                >
                  Know More
                </a></button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------12----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={indifiimage} alt='Lenderimage'></img>
            <p> Indifi</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹1,00,000-₹2,00,00,000</p>
           <p> Features:Business loan</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton" onClick={handleClickOpen3}>Know More</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open3}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer:
                    <br />
                    Company name: Indifi Technologies
                    <br />
                    Tel: 9696555444
                    <br />
                    Email: grievances@indifi.com
                    <br />
                    CustomerCare: 9696555444,cs@indifi.com
                    <br />
                    Loans on Indifi are provided by RBI regulated NBFCs - a
                    complete list along with the lender’s details can be found
                    on the following link - https://www.indifi.com
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------13----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={kreditbeeimage} alt='Lenderimage'></img>
            <p>  Kreditbee</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹1,000-₹3,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton" onClick={handleClickOpen4}>Know More</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open4}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Ms. Meghana Shah
                    <br />
                    Company name: Finnovation Tech Solutions Private Limited
                    <br />
                    Tel: 080-44292200
                    <br />
                    Email: help@kreditbee.in
                    <br />
                    CustomerCare: 080-44292200,help@kreditbee.in
                    <br />
                    Loans on KreditBee are provided by RBI regulated NBFCs - a
                    complete list along with the lender’s details can be found
                    on the following link - https://www.kreditbee.in/grievance-
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------14----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={moneytapimage} alt='Lenderimage'></img>
            <p>  Moneytap</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹3,000-₹5 Lakh</p>
           <p>Features:Digital Credit Line</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton">Know More</button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------15----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={moneyviewimage} alt='Lenderimage'></img>
            <p> MoneyView</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹5,000-₹5,00,000</p>
           <p> Features:Personal Loans for Salaried andSelf Employed Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton" onClick={handleClickOpen5}>Know More</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open5}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Mr. Venkatraman Narayan
                    <br />
                    Company name: Whizdm Innovations Private Limited
                    <br />
                    Tel: +91-8045692002
                    <br />
                    Email: grievance@moneyview.in
                    <br />
                    CustomerCare: +91-8045692002
                    <br />
                    Loans on MoneyView are provided by RBI regulated NBFCs - a
                    complete list can be found here -
                    https://moneyview.in/our-lending-partn
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------16----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={mpokketimage} alt='Lenderimage'></img>
            <p>  Mpocket</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹2,000-₹30,000</p>
           <p>   Features:Short term personal loan</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton">Know More</button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------17----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={naviimage} alt='Lenderimage'></img>
            <p> Navi</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton">Know More</button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------18----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={niraimage} alt='Lenderimage'></img>
            <p>  Nira</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton" onClick={handleClickOpen6}>Know More</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open6}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Goutham R<br />
                    Company name: Shuhari Tech Ventures Private Limited
                    <br />
                    Email: goutham.r@nirafinance.com
                    <br />
                    CustomerCare: support@nirafinance.com
                    <br />
                    Loans on NIRA are provided by RBI regulated NBFCs - a
                    complete list along with the lender’s details can be found
                    on the following link - https://nirafinance.com/#partners
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------19----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={prefrimage} alt='Lenderimage'></img>
            <p> Prefr</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton" onClick={handleClickOpen7}>Know More</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open7}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Mr. Moksh Jain
                    <br />
                    Company name: Shuhari Tech Ventures Private Limited
                    <br />
                    Tel: 9341 300 300
                    <br />
                    Email: nodal.officer@prefr.com
                    <br />
                    CustomerCare: 9341 300 300
                    <br />
                    info@prefr.com
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------20----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={privoimage} alt='Lenderimage'></img>
            <p>Privo</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton">Know More</button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------21----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={stashfinimage} alt='Lenderimage'></img>
            <p>StashFin</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton" onClick={handleClickOpen8}>Know More</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open8}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Mr. Sanjeev Walia
                    <br />
                    Company name: EQX Analytics Private Limited
                    <br />
                    Tel: +91-9953595222
                    <br />
                    Email: grievance.officer@stashfin.com
                    <br />
                    CustomerCare:info@StashFin.com
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------22----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={tatacapitalimage} alt='Lenderimage'></img>
            <p>  Tata Capital</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton" onClick={handleClickOpen9}>Know More</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open9}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Rajesh Kumar
                    <br />
                    Company name: Tata Capital Limited
                    <br />
                    Tel: 022-68219546
                    <br />
                    Email: CCRO@tatacapital.com
                    <br />
                    CustomerCare: 022-68219546
                    <br />
                    connect@flexiloans.com
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------23----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={rupeeimage} alt='Lenderimage'></img>
            <p>RupeeReddy</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton">Know More</button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------24----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={upwardsimage} alt='Lenderimage'></img>
            <p>  Upwards</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton" onClick={handleClickOpen10}>Know More</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open10}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Mr. Venkatesh Dontul
                    <br />
                    Company name: Upwards Capital Private Limited
                    <br />
                    Tel: + 91 98921 56608
                    <br />
                    Email: venkatesh.dontul@go-upwards.com
                    <br />
                    CustomerCare: +91-77150 98615
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------25----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={kisshtimage} alt='Lenderimage'></img>
            <p>Kissht</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">Apply Now</button><span>
           <button className="secondonebutton"><a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://kissht.com/customer_grievance"
                >
                  Know More
                </a></button></span>
           </div>
        </div>
        </div>
      </div>
      <NewHomePageFooter/>
      <NewCityFooter/>
      </>
    );
  }

export default NewAllPartners;
