import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./NewIcons";
import credithattlogo from '../NewHomePage/NewHomePageImages/logoCH.png';
import { Link } from "react-router-dom";


function NavBar() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container" style={{fontFamily:'Open Sans, sans-serif'}}>
       <Link to="/">
        <img className="nav-logo.icon" src={credithattlogo} alt="logo_pic"/>
        </Link>
          <NavLink  className="nav-logo">
              
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick} style={{color:'black'}}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="nav-links" onClick={toggleDropdown}>
                Products
                {showDropdown && (
                  <ul className="dropdown-content" style={{listStyleType:"none"}}>
                    <li>
                      <NavLink to="/PersonalLoan" activeClassName="active">
                        Personal loan
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/BusinessLoan" activeClassName="active">
                        Business loan
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/creditcard" activeClassName="active">
                        Credit cards
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ContactUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}  style={{color:'black'}}
              >
              Contact us
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
