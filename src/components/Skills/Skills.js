import React from "react";
import { Progress, Row, Col } from "reactstrap";
import * as Constants from "../../Constants";
import "./Skills.css";

const Skills = () => {
  const renderProgressOnSkills = skills => {
    return skills.map(element => {
      return (
        <Row key={element.language}>
          <Col xs={3}>{element.language}</Col>
          <Col xs={9}>
            <Progress value={element.progress}>{element.progress}</Progress>
          </Col>
        </Row>
      );
    });
  };

  const renderFrameworks = fs => {
    return fs.map(element => {
      return (
        <Row key={element.language}>
          <Col xs={3}>{element.language}</Col>
          <Col xs={9}>{element.frameworks}</Col>
        </Row>
      );
    });
  };

  const renderGeneric = arr => {
    return (
      <Row>
        <Col>{arr.join(", ").concat(".")}</Col>
      </Row>
    );
  };

  const renderProgrammingSkills = () => {
    return renderProgressOnSkills(Constants.ProgrammingSkills);
  };

  const renderMarkUpSkills = () => {
    return renderProgressOnSkills(Constants.MarkUpSkills);
  };
  return (
    <div className="Skills">
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Programming Languages </h3>
            </Col>
          </Row>
          {renderProgrammingSkills()}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> MarkUp Languages </h3>
            </Col>
          </Row>
          {renderMarkUpSkills()}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Frameworks/ Libraries </h3>
            </Col>
          </Row>
          {renderFrameworks(Constants.Frameworks)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Test-Frameworks </h3>
            </Col>
          </Row>
          {renderFrameworks(Constants.TestFrameworks)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Databases </h3>
            </Col>
          </Row>
          {renderGeneric(Constants.Databases)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Caches </h3>
            </Col>
          </Row>
          {renderGeneric(Constants.Caches)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Tools </h3>
            </Col>
          </Row>
          {renderGeneric(Constants.Tools)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> IDE </h3>
            </Col>
          </Row>
          {renderGeneric(Constants.IDE)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Explored Tech </h3>
            </Col>
          </Row>
          {renderGeneric(Constants.Tech)}
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
