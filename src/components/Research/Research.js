import React from "react";
import { Table } from "reactstrap";
import * as Constants from "../../Constants";
import "./Research.css";

const research = () => {
  const renderTableRows = obj => {
    return obj.map(x => {
      return (
        <tr>
          <td> {x.paperName} </td>
          <td>
            <a href={x.paperLink}> {x.paperLink} </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="Research">
      <Table bordered responsive>
        <thead>
          <tr>
            <td>Name</td>
            <td>Link</td>
          </tr>
        </thead>
        <tbody>{renderTableRows(Constants.Paper)}</tbody>
      </Table>
    </div>
  );
};

export default research;
