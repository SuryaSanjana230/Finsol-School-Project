import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
export const NavBar = () => {
  useEffect(() => {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    const handleToggle = () => {
      navbarLinks.classList.toggle('active');
    };

    toggleButton.addEventListener('click', handleToggle);


    return () => {
      toggleButton.removeEventListener('click', handleToggle);
    };
  }, []);

  return (
    <>
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="brand-title"><img src="./images/oasis.jpg" className="logo" alt=""/></div>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li> <Link className="linkstyle" to="/#About">About Us</Link></li>
            <li>  <Link className="linkstyle" to="/#Programs">Programs</Link></li>
            <li><Link className="linkstyle" to="/#Admissions">Admissions</Link></li>
            <li><Link className="linkstyle" to="/gallery" id="linkstyle1">Gallery</Link></li>
            <li>
            <Link to='/contact'>
            <button className="btn btn-outline-success" type="button" id="buttonstyle">
                    Contact Us
                  </button>
                  </Link></li>
          </ul>
        </div>
      </nav>
      </div>
   <Outlet/>
 
    </>
  );
};
