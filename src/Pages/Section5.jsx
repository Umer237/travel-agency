import React from "react";
import "./Section5.css";
import camera from "../images/camera.jpg";
import sunrise from "../images/sunrise.jpg";

const Section5 = () => {
  return (
    <>
      <div className="section5-bg">
        <div className="section5-background">
          <div className="section5-text">
            <h2>A Haven On The Earth<br></br>For You</h2>
          </div>
          <div className="section5-flex">
          <div className="section5-image">
            <img src={camera} alt="" />
          </div>
          <div className="section5-para">
            <p style={{paddingBottom:"40px"}}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <button className="Section-5-Btn">Explore More</button>
          </div>
          <div className="section5-img">
          <img src={sunrise} alt="" />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
