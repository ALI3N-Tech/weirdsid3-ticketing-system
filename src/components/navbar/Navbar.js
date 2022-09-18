import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pic from "../../images/weirdsid3.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(true);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(true);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="div-1">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={pic} alt="" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaBars /> : <FaTimes />}
            </div>
          </div>
          <ul className={click ? "nav-menu" : "nav-menu active"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links nav-signup"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--primary">Login</Button>}
          {button && <Button buttonStyle="btn--secondary">Sign up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
