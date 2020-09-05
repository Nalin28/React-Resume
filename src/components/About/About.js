import React from "react";
import { Row, Col } from "reactstrap";
import * as Constants from "../../Constants";
import "./About.css";
import styled from "styled-components";

const about = () => {
  const Abo = styled.div`
    @media only screen and (min-width: 768px) {
      width: 75%;
    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width: 992px) {
      width: 50%;
    }
  `;

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
      <Abo>{Constants.AboutLinksObj.map(x => renderAboutFromObj(x))}</Abo>
    </div>
  );
};

export default about;
