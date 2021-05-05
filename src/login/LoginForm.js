import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <form action="/login" method="post" id="login-form">
        <p>
          <label htmlFor="email">Email: </label>
          <br />
          <input type="email" name="email" placeholder="susie@company.com" />
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
    );
  }
}
