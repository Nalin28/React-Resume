import React from "react";
import asset from "../../assets/nalin.jpeg";
import "./ProfilePhoto.css";

const profilePhoto = () => {
  return (
    <div className="ProfilePhoto">
      <img src={asset} alt="" />
    </div>
  );
};

export default profilePhoto;
