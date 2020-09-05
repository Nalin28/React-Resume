import React from "react";
import { Table } from "reactstrap";
import * as Constants from "../../Constants";
import "./Projects.css";

const projects = () => {
  const renderTableRows = obj => {
    return obj.map(x => {
      return (
        <tr>
          <td> {x.projectName} </td>
          <td>
            {validURL(x.projectLink) ? (
              <a href={x.projectLink}> {x.projectLink} </a>
            ) : (
              <p>{x.projectLink}</p>
            )}
          </td>
          <td> {x.languages} </td>
        </tr>
      );
    });
  };

  const validURL = str => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(str);
  };

  return (
    <div className="githubProjects">
      <Table bordered responsive>
        <thead>
          <tr>
            <td>Name</td>
            <td>Link/ Description</td>
            <td>Programming Language</td>
          </tr>
        </thead>
        <tbody>{renderTableRows(Constants.GithubProjects)}</tbody>
      </Table>
    </div>
  );
};

export default projects;
