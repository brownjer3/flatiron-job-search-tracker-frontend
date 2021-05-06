import React, { Component } from "react";

export default class SignupForm extends Component {
  state = {
    user: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      account_type: "Graduate",
      status: "Job Seeking",
      job_search_start_date: "",
    },
  };

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({ user: { ...this.state.user, [e.target.name]: value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
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
      <form id="signup-form" onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="email">Name: </label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="First and Last"
            value={this.state.user.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="susie@company.com"
            value={this.state.user.email}
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
            value={this.state.user.password}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="password">Password Confirmation: </label>
          <br />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Re-Enter password"
            value={this.state.user.password_confirmation}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="email">Job Search Start Date: </label>
          <br />
          <input
            type="date"
            name="job_search_start_date"
            value={this.state.user.job_search_start_date}
            onChange={this.handleChange}
          />
        </p>

        <input className="user-form-submit" type="submit" />
      </form>
    );
  }
}
