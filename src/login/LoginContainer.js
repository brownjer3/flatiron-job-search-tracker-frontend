import React, { Component } from "react";
import "./login.css";

export default class LoginContainer extends Component {
  render() {
    return (
      <div id="login-container">
        <h2>Welcome Back</h2>
        <div className="medium-box">
          <div className="box-header">
            <h3>Login</h3>
          </div>
          <form action="/login" method="post" id="login-form">
            <p>
              <label htmlFor="email">Email: </label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="susie@company.com"
              />
            </p>
            <p>
              <label htmlFor="password">Password: </label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </p>

            <input className="user-form-submit" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
