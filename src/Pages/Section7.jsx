import React from "react";
import "./Section7.css";
import camera from "../images/camera.jpg";

const Section7 = () => {
  return (
    <>
      <div className="section7-bg">
          <div className="section7-text">
            <h2>A Haven On The Earth<br></br>For You</h2>
          </div>
          <div className="section7-flex">
          <div className="section7-image">
            <img src={camera} alt="" />
          </div>
          <div className="section7-para">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;
