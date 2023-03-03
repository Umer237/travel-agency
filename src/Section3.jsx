import React from "react";
import "./Section3.css";
import section3img1 from "./images/livelove.jpg";
import section3img2 from "./images/montain.jpg";
import section3img3 from "./images/lovelybeach.jpg";
import { BsCalendar4 } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillFlag } from "react-icons/ai";
import { RiStarSFill } from "react-icons/ri";

const Section3 = () => {
  return (
    <>
      <div className="section3-bg">
        <div className="section3-margin">
        <div className="section3-text">
          <h2>We Recommend For Our You</h2>
          <p>
            Throughout our lives,people have thought that because we keep
            traveling and searching for new things to da,we are focused on
            travel.
          </p>
        </div>
        <div className="section3-icon-text">
          <div>
            <div className="section3-img">
              <img src={section3img1} alt="" />
            </div>
            <div className="section3-icon-text">
              <div className="section3-icon-text">
                <div>
                  <BsCalendar4 className="section3iconicon" />
                </div>
                <div className="section3-icon">
                  <h5>8 Days</h5>
                </div>
              </div>
              <div className="section3-icon-text">
                <div>
                  <IoLocationSharp className="section3iconicon" />
                </div>
                <div className="section3-icon">
                  <h5>Spain</h5>
                </div>
              </div>
              <div className="section3-icon-text">
                <div>
                  <AiFillFlag className="section3iconicon" />
                </div>
                <div className="section3-icon">
                  <h5>8 citys</h5>
                </div>
              </div>
            </div>
            <div className="love">
              <h5>Live Love Drink Travel,LLC-Dream Vacations</h5>
            </div>
            <div className="icon-stars">
              <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill />
              <RiStarSFill />
            </div>
          </div>
          <div>
            <div className="section3-img">
              <img src={section3img2} alt="" />
            </div>
            <div className="section3-icon-text">
              <div className="section3-icon-text">
                <div>
                  <BsCalendar4 className="section3iconicon" />
                </div>
                <div className="section3-icon">
                  <h5>8 Days</h5>
                </div>
              </div>
              <div className="section3-icon-text">
                <div>
                  <IoLocationSharp className="section3iconicon" />
                </div>
                <div className="section3-icon">
                  <h5>Spain</h5>
                </div>
              </div>
              <div className="section3-icon-text">
                <div>
                  <AiFillFlag className="section3iconicon" />
                </div>
                <div className="section3-icon">
                  <h5>8 citys</h5>
                </div>
              </div>
            </div>
            <div className="love">
              <h5>Live Love Drink Travel,LLC-Dream Vacations</h5>
            </div>
            <div className="icon-stars">
              <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill />
              <RiStarSFill />
            </div>
          </div>
          <div>
            <div className="section3-img">
              <img src={section3img3} alt="" />
            </div>
            <div className="section3-icon-text">
              <div className="section3-icon-text">
                <div>
                  <BsCalendar4 className="section3iconicon" />
                </div>
                <div className="section3-icon">
                  <h5>8 Days</h5>
                </div>
              </div>
              <div className="section3-icon-text">
                <div>
                  <IoLocationSharp className="section3iconicon" />
                </div>
                <div className="section3-icon">
                  <h5>Spain</h5>
                </div>
              </div>
              <div className="section3-icon-text">
                <div>
                  <AiFillFlag className="section3iconicon" />
                </div>
                <div className="section3-icon">
                  <h5>8 citys</h5>
                </div>
              </div>
            </div>
            <div className="love">
              <h5>Live Love Drink Travel,LLC-Dream Vacations</h5>
            </div>
            <div className="icon-stars">
              <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill />
              <RiStarSFill />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
