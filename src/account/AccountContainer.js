import React, { Component } from "react";
import "./account.css";

export default class ContactsContainer extends Component {
  render() {
    return (
      <div id="account-container">
        <h1>Your Account Info Here</h1>
        <button onClick={ this.props.handleLogout }>Logout</button>
      </div>
    );
  }
}
