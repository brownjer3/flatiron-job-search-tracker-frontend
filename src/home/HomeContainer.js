import React, { Component } from "react";
import "./home.css";

export default class HomeContainer extends Component {
  render() {
    return (
      <div id="home-container">
        <div id="week-of">
          <h2>Week of [Insert Dates here]:</h2>
          <i className="far fa-check-circle green"></i>
          <i className="far fa-times-circle red"></i>
        </div>
        <div id="commit-blog-container">
          <div id="github-commits" className="medium-box">
            <div className="box-header">
              <h3>Github Commits</h3>
              <i className="far fa-check-circle light-green"></i>
              <i className="far fa-times-circle light-red"></i>
            </div>
            Commits
          </div>
          <div id="blog-posts" className="medium-box">
            <div className="box-header">
              <h3>Blog Post</h3>
              <i className="far fa-check-circle light-green"></i>
              <i className="far fa-times-circle light-red"></i>
            </div>
            Posts
          </div>
        </div>
      </div>
    );
  }
}
