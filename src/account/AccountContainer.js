import React, { Component } from "react";
import "./account.css";

export default class ContactsContainer extends Component {
  render() {
    console.log(this.props.currentUser)
    return (
      <div id="account-container">
        <h1>Your Account Info Here</h1>
        <table className="account-table">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{ this.props.currentUser.name }</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{ this.props.currentUser.email }</td>
            </tr>
            <tr>
              <td>Job Search Start Date:</td>
              <td>{ !!this.props.currentUser.job_search_start_date ? this.props.currentUser.job_search_start_date : "Not yet declared." }</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>{ !!this.props.currentUser.status ? this.props.currentUser.status : <span style={{ color: 'green' }}>Eligible</span> }</td>
            </tr>
          </tbody>
        </table>
        <button onClick={ this.props.handleLogout }>Logout</button>
      </div>
    );
  }
}
