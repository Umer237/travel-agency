import React from "react";
import "./Section6.css";
import Traveller from "../images/Traveler.jpg";
import Laptop from "../images/Laptop.jpg";
import Mirror from "../images/Mirror.jpg";
import { TbMessages } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";

const Section5 = () => {
  return (
    <>
      <div className="Section-5-Top-Text">
        <h2>Our Blogs And Articals</h2>
      </div>
      <div className="Section-5-Flex">
        <div>
          <div className="Section5-hover">
            <img className="Img-1" src={Traveller} alt="" />
            <div className="overlay-2">
              <div className="content-2">
                <button>Read More</button>
              </div>
            </div>
          </div>
          <h3>inspiration</h3>
          <h2>Travel Tips & Inspiration</h2>
          <div className="Icons-Div">
            <div className="Views-Comments">
              <TbMessages />
              <h5>150</h5>
            </div>
            <div className="Views-Comments">
              <AiOutlineEye />
              <h5>9k+ view</h5>
            </div>
          </div>
        </div>
        <div>
          <div className="Section5-hover">
            <img className="Img-2" src={Laptop} alt="" />
            <div className="overlay-2">
              <div className="content-2">
                <button>Read More</button>
              </div>
            </div>
          </div>
          <h3>Travel</h3>
          <h2>Travel Marketing</h2>
          <div className="Icons-Div">
            <div className="Views-Comments">
              <TbMessages />
              <h5>150</h5>
            </div>
            <div className="Views-Comments">
              <AiOutlineEye />
              <h5>9k+ view</h5>
            </div>
          </div>
        </div>
        <div>
          <div className="Section5-hover">
            <img className="Img-3" src={Mirror} alt="" />
            <div className="overlay-2">
              <div className="content-2">
                <button>Read More</button>
              </div>
            </div>
          </div>
          <h3>Vaccation</h3>
          <h2>Effective Vaccation Trip</h2>
          <div className="Icons-Div">
            <div className="Views-Comments">
              <TbMessages />
              <h5>150</h5>
            </div>
            <div className="Views-Comments">
              <AiOutlineEye />
              <h5>9k+ view</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
