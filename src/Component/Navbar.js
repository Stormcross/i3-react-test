import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [clickMobile, setClickMobile] = useState(true);

  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function onClickMoblie() {
    setClickMobile(!clickMobile);
    if (clickMobile) {
      setDropdown(true);
    } else {
      setDropdown(false);
      setClick(false);
    }
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          I3_React
          <i className="fab fa-react"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* button when mobile screen */}
          <li className="nav-item">
            <Link
              to="/"
              className={
                clickMobile ? "nav-links-mobile" : "nav-links-mobile active"
              }
              onClick={onClickMoblie}
            >
              2020 Annual Report
              <i
                className={dropdown ? "fas fa-caret-up" : "fas fa-caret-down"}
              />
              {dropdown && <Dropdown />}
                         
            </Link>
          </li>
          {/* end button when mobile screen */}
          <li
            className="nav-item"
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
          >
            <Link to="/annualReport" className="nav-links" onClick={closeMobileMenu}>
              2020 Annual Report
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/financialHighlights" className="nav-links" onClick={closeMobileMenu}>
              Financial Highlights
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Letter to Shareowners
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Downloads
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
