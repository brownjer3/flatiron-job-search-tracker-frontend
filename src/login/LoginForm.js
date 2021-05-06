import React, { Component } from "react";

export default class LoginForm extends Component {
  state = {
    user: {
      email: "",
      password: "",
    },
  };

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({ user: { ...this.state.user, [e.target.name]: value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
      });
  };

  render() {
    return (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="susie@company.com"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="password">Password: </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </p>

        <input className="user-form-submit" type="submit" />
      </form>
    );
  }
}
