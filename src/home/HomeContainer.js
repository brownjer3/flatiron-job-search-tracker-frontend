import React, { Component } from "react";

export default class HomeContainer extends Component {
  render() {
    return (
      <div id="home-container">
        <div id="week-of">
          <h2>
            Week of [Insert Dates here]: <i class="far fa-check-circle"></i>
          </h2>
        </div>
      </div>
    );
  }
}
