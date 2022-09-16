import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../images/weirdsid3.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);
  console.log(click);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={pic} alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaBars /> : <FaTimes />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
