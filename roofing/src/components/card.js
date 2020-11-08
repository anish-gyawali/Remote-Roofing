import React from "react";
import File from "../assets/file.png";
import Inspection from "../assets/inspection.png";
import Replace from "../assets/replace.png";
const Card = () => {
  return (
    <div className="card-container">

      <div className="icon-one">
        <img id="image" src={Inspection} alt="Free Inspection" />
        <p>Free Inspection</p>
      </div>
      <div className="icon-two">
        <img id="image" src={File} alt="File a Claim" />
       <p> File a Claim</p>
      </div>
      <div className="icon-three">
        <img id="image" src={Replace} alt="Replace or Repair Roof" />
       <p> Replace or Repair Roof</p>
      </div>
    </div>
  );
};
export default Card;
