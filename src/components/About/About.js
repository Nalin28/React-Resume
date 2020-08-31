import React from "react";
import { Row, Col } from "reactstrap";
import * as Constants from "../../Constants";
import "./About.css";

const about = () => {
  const renderAboutFromObj = obj => {
    return (
      <Row>
        <Col xs={2} lg={1}>
          <img
            src={obj.icon}
            alt={obj.icon}
            style={{
              width: "25px",
              height: "25px"
            }}
          />
        </Col>
        <Col xs={4} lg={2}>
          {obj.name}
        </Col>
        <Col xs={6} lg={9}>
          <a href={obj.profileLink}> {obj.profileLink} </a>
        </Col>
      </Row>
    );
  };

  return (
    <div className="About">
      {Constants.AboutLinksObj.map(x => renderAboutFromObj(x))}
    </div>
  );
};

export default about;
