import React, { Component } from "react";
import "./history.css";
import DisplayHistory from "./DisplayHistory";

export default class HistoryContainer extends Component {
  render() {
    return (
      <div id="history-container">
        <div id="mbg-valid">
          <h2 className="white">Valid for MBG:</h2>
          <i className="far fa-check-circle green"></i>
          <i className="far fa-times-circle red"></i>
        </div>
        <DisplayHistory />
      </div>
    );
  }
}
