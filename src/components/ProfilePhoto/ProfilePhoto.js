import React from "react";
import asset from "../../assets/nm.png";
import "./ProfilePhoto.css";

const profilePhoto = () => {
  return (
    <div className="ProfilePhoto">
      <img src={asset} alt="" />
    </div>
  );
};

export default profilePhoto;
