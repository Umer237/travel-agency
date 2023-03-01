import React from "react";
import "../Pages/Banner1.css";
import { BsFillCaretRightFill } from "react-icons/bs";
import bannerimg from "../images/BannerTravel.png";

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
    </>
  );
};

export default Banner1;
