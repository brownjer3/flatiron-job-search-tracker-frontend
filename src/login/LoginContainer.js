import React, { Component } from "react";
import "./login.css";
import LoginForm from "./LoginForm";

export default class LoginContainer extends Component {
  render() {
    return (
      <div id="login-container">
        <h2>Welcome Back</h2>
        <div className="medium-box">
          <div className="box-header">
            <h3>Login</h3>
          </div>
          <LoginForm />
        </div>
      </div>
    );
  }
}
