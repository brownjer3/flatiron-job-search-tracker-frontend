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
            <div className="box-content">
              <p>Github Commits: [insert number]</p>
              <form id="github-commits-form">
                <label htmlFor="commit_number">Update Commits:</label>
                <br />
                <input type="text" name="commit_number" />
                <input type="submit" />
              </form>
            </div>
          </div>

          <div id="blog-posts" className="medium-box">
            <div className="box-header">
              <h3>Blog Post</h3>
              <i className="far fa-check-circle light-green"></i>
              <i className="far fa-times-circle light-red"></i>
            </div>
            <div className="box-content">
              <p>Blog Post URL: [display url]</p>
              <form id="blog-post-form">
                <label htmlFor="blog_url">Update Blog URL:</label>
                <br />
                <input type="text" name="blog_url" />
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
