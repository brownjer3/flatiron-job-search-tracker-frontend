import React, { Component } from "react";
import SignupForm from "./SignupForm";

export default class SignupContainer extends Component {
  render() {
    return (
      <div id="login-container">
        <h2>Welcome New User</h2>
        <div className="medium-box">
          <div className="box-header">
            <h3>Signup</h3>
          </div>
          <SignupForm />
        </div>
      </div>
    );
  }
}
