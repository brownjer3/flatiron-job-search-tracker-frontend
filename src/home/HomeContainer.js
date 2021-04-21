import React, { Component } from "react";
import "./home.css";

export default class HomeContainer extends Component {
  render() {
    return (
      <div id="home-container">
        <div id="week-of">
          <h2>Week of [Insert Dates here]:</h2>
          <i className="far fa-check-circle"></i>
          <i className="far fa-times-circle"></i>
        </div>
      </div>
    );
  }
}
