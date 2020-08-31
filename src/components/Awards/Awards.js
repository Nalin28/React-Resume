import React from "react";
import { AwardsObject } from "../../Constants";
import { UncontrolledCarousel } from "reactstrap";
import bene from "../../assets/BenefitEveryone.png";
import conn from "../../assets/ConnectEverything.png";

const awards = () => {
  return (
    <div className="Awards">
      <UncontrolledCarousel items={[{ src: bene }, { src: conn }]} />
    </div>
  );
};

export default awards;
