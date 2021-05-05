import React, { Component } from "react";
import "./home.css";
import GithubCommits from "./GithubCommits";
import BlogPosts from "./BlogPosts";
import EmployerContacts from "./EmployerContacts";

export default class HomeContainer extends Component {
  render() {
    return (
      <div id="home-container">
        <div id="week-of" className="white">
          <h2>Week of [Insert Dates here]:</h2>
          <i className="far fa-check-circle green"></i>
          <i className="far fa-times-circle red"></i>
        </div>
        <div id="commit-blog-container">
          <GithubCommits />
          <BlogPosts />
        </div>
        <EmployerContacts />
      </div>
    );
  }
}
