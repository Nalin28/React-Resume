import React from "react";
import { AwardsObject } from "../../Constants";
import { UncontrolledCarousel } from "reactstrap";
import bene from "../../assets/BenefitEveryone.png";
import conn from "../../assets/ConnectEverything.png";
import conn2 from "../../assets/connect_everything_award.png";

const awards = () => {
  return (
    <div className="Awards">
      <UncontrolledCarousel items={[{ src: bene }, { src: conn }, {src: conn2}]} />
    </div>
  );
};

export default awards;
