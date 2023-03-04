import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GiGrapes } from "react-icons/gi";
import { BsSnapchat } from "react-icons/bs";

import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <div className="Footer-Flex">
          <div className="First-Section">
            <h5>
              <GiGrapes />
              grapeslab
            </h5>
            <p className="p-1">
              Throughout our lives. people have to thought that because we keep
              do we are focused on travel.
            </p>
          </div>
          <div className="Second-Section">
            <h2>Home</h2>
            <p className="p-2">About us</p>
            <p className="p-2">Destinatination</p>
            <p className="p-2">Community</p>
            <p className="p-2">Contact Us</p>
          </div>
          <div className="Third-Section">
            <h2>Legal</h2>
            <p className="p-2">Discover</p>
            <p className="p-2">Special deals</p>
            <p className="p-2">Community</p>
            <p className="p-2">Blog</p>
          </div>
          <div className="Footer-Icons">
            <h4>Follow Us</h4>
            <FaFacebookF className="Footer-Icon-1" />
            <BsTwitter className="Footer-Icon-1" />
            <BsSnapchat className="Footer-Icon-1" />
            <AiFillYoutube className="Footer-Icon-1" />
          </div>
        </div>
        <div className="Footer-End">
          <h6>@2023 Design by GrapesLabteam. All rights reserved</h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
