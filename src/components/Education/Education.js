import React from "react";
import { Row, Col } from "reactstrap";
import * as Constants from "./../../Constants";
import "./Education.css";

const education = () => {
  const renderEducation = obj => {
    return (
      <Row>
        <Col>
          <Row>
            <Col>
              <h3>{obj.college}</h3>
            </Col>
            <Col>
              <h4> {obj.role} </h4>
            </Col>
          </Row>
          <Row>
            <Col>{obj.date}</Col>
            <Col>
              <h5>{obj.desc}</h5>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };
  return (
    <div className="Education">
      {Constants.EducationObject.map(x => renderEducation(x))}
    </div>
  );
};

export default education;
