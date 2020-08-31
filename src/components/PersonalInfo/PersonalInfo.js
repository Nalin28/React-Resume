import React from "react";
import "./PersonalInfo.css";
import * as Constants from "./../../Constants";

const personalInfo = obj => {
  return (
    <div className="PersonalInfo">
      <h2>{Constants.Name}</h2>
      <br />
      <p>Call: {Constants.Name}</p>
      <p>Mail: {Constants.EmailAddress}</p>
      <p>Home: {Constants.Home}</p>
    </div>
  );
};

export default personalInfo;
