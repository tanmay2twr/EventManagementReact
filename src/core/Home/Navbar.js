import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { isAutheticated } from "../../auth";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            FME
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {isAutheticated() && (
              <>
              <li className="nav-item">
                  <Link
                    to="/user/dashboard"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/addevents"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Add Event
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/myevents"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    My Events
                  </Link>
                </li>
              </>
            )}
            {!isAutheticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/signin"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signup"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Sign up
                  </Link>
                </li>
              </Fragment>
            )}
            {isAutheticated() && (
              <li className="nav-item">
                <Link to="/signout" className="" onClick={closeMobileMenu}>
                  <ExitToAppIcon
                    style={{ fontSize: 60, color: "white", paddingTop: "19px" }}
                  />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
