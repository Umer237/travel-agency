import React, {useState} from "react";
import "./Header.css";
import {GiGrapes } from "react-icons/gi";
import {HiBars3} from 'react-icons/hi2'
import {ImCross} from "react-icons/im"

const Header = () => {
  const [Mobile, setMobile] = useState(false )
  return (
    <>
      <div className="header-flex">
        <div className="logo">
        <GiGrapes className="logo-icon"/>
          <h5>grapeslab</h5>
        </div>
        <nav className="NavBar">
          <ul className={Mobile? "nav-links-mobile" : "Links"} onClick={() =>setMobile(false)}>
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
        <button className='Mobile-Menu-icon' onClick={() => setMobile(!Mobile)}>
      {Mobile? <ImCross/> : <HiBars3/> }
      
    </button>
      </div>
    </>
  );
};

export default Header;
