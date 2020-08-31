import React from "react";
import { Row, Col, Container } from "reactstrap";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import CustomPane from "../CustomPane/CustomPane";
import "./Layout.css";
import "bootstrap/dist/css/bootstrap.css";

const Layout = () => {
  return (
    <div className="Layout">
      <Container fluid>
        <Row>
          <Col lg={4}>
            <ProfilePhoto />
            <PersonalInfo />
          </Col>
          <Col lg={8}>
            <CustomPane />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
