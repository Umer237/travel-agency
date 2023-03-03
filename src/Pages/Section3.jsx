import React from "react";
import "./Section3.css";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineFlag } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Van from "../images/Van.jpg";
import Mountain from "../images/Mountain.jpg";
import Beach from "../images/Beach.jpg";
const Section3 = () => {
  return (
    <>
      <div className="Section-3-Top-Text">
        <h2>We Recommend For Our You </h2>
        <p>
          Throught our lives, people have thought that because we keep traveling
          and searching for new things to do, we are focused on travel.
        </p>
      </div>
      <div className="Section-3-Flex">
        <div>
          <img className="Img-1" src={Van} alt="" />
          <div className="Icon-Flex">
            <div className="Icon">
              <HiOutlineCalendar />
              <h5>8 Days</h5>
            </div>
            <div className="Icon">
              <IoLocationOutline />
              <h5>Spain</h5>
            </div>
            <div className="Icon">
              <AiOutlineFlag />
              <h5>8 citys</h5>
            </div>
          </div>
          <h2>Live Love Drink Travel, LLC - Dream Vacations</h2>
          <AiFillStar className="Star-Icon" />
          <AiFillStar className="Star-Icon" />
          <AiFillStar className="Star-Icon" />
          <AiFillStar className="Star-Icon" />
          <AiFillStar className="Star-Icon" />
        </div>
        <div>
          <img className="Img-2" src={Mountain} alt="" />
          <div className="Icon-Flex">
            <div className="Icon">
              <HiOutlineCalendar />
              <h5>8 Days</h5>
            </div>
            <div className="Icon">
              <IoLocationOutline />
              <h5>Spain</h5>
            </div>
            <div className="Icon">
              <AiOutlineFlag />
              <h5>8 citys</h5>
            </div>
          </div>
          <h2>Mountain Hiking Vacations At SwitzarLand</h2>
          <AiFillStar className="Star-Icon" />
          <AiFillStar className="Star-Icon" />
          <AiFillStar className="Star-Icon" />
          <AiFillStar className="Star-Icon" />
          <AiFillStar className="Star-Icon" />
        </div>
        <div>
          <img className="Img-3" src={Beach} alt="" />
          <div className="Icon-Flex">
            <div className="Icon">
              <HiOutlineCalendar />
              <h5>8 Days</h5>
            </div>
            <div className="Icon">
              <IoLocationOutline />
              <h5>Spain</h5>
            </div>
            <div className="Icon">
              <AiOutlineFlag />
              <h5>8 citys</h5>
            </div>
          </div>
          <h2>Enjoy Lovely Beach And Food At Bali, Indoneshia</h2>
          <AiFillStar className="Star-Icon" />
          <AiFillStar className="Star-Icon" />
          <AiFillStar className="Star-Icon" />
          <AiFillStar className="Star-Icon" />
          <AiFillStar className="Star-Icon" />
        </div>
      </div>
    </>
  );
};

export default Section3;