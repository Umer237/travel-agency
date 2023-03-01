import React from "react";
import "./Header.css";
import {GiGrapes } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className="header-flex">
        <div className="logo">
        <GiGrapes/>
          <h5>grapeslab</h5>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="legal">Legal</a>
            </li>
            <li>
              <a href="support">Support</a>
            </li>
          </ul>
        </nav>
        <div className="header-btn">
          <button>Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Header;
