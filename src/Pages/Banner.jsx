import React from "react";
import "../Pages/Banner.css";
import { BsFillCaretRightFill } from "react-icons/bs";
import bannerimg from "../images/BannerTravel.png";
import { BsSearch } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";

const Banner1 = () => {
  return (
    <>
      <div className="banner-flex">
        <div>
          <div className="banner1-text">
            <h1>Plane Your Trip with Grapeslab</h1>
            <p>
              Throughout our lives, people have thought that because we keep
              traveling and searching for new things to do, we are focused on
              travel.
            </p>
          </div>
          <div className="btn-icon-flex">
            <div className="banner1-btn">
              <button>Explore with Us</button>
            </div>
            <div className="icon-text">
              <BsFillCaretRightFill className="banner-icons" />

              <div className="banner-icon-text">
                <h5>Watch Videos</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="banner1-image">
          <img src={bannerimg} alt="" />
        </div>
      </div>
      <div className="headerbanner2">
        <div className="headerbanner2-text">
          <div className="banner-flex-icon">
            <h5>Location</h5>
            <div>
              <RiArrowDownSLine className="date-icon" />
            </div>
          </div>
          <h6>Where are you going</h6>
        </div>
        <div className="headerbanner2-text">
          <div className="banner-flex-icon">
            <h5>Date</h5>
            <div>
              <RiArrowDownSLine className="date-icon" />
            </div>
          </div>
          <h6>When you will go</h6>
        </div>
        <div className="headerbanner2-text">
          <div className="banner-flex-icon">
            <h5>People</h5>
            <div>
              <RiArrowDownSLine className="date-icon" />
            </div>
          </div>
          <h6>Sleect the place</h6>
        </div>
        <div className="banner2-search-flex">
          <div className="headerbanner2-sreach">
            <h5>
              <BsSearch className="search-btn" /> Search
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner1;
