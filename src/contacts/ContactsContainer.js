import React, { Component } from "react";
import "./contacts.css";
import DisplayContacts from "./DisplayContacts";

export default class ContactsContainer extends Component {
  render() {
    return (
      <div id="contacts-container" className="content-container">
        <DisplayContacts />
      </div>
    );
  }
}
