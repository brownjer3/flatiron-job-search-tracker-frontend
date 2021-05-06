import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./home/HomeContainer";
import HeaderContainer from "./header/HeaderContainer";
import ContactsContainer from "./contacts/ContactsContainer";
import HistoryContainer from "./history/HistoryContainer";
import AccountContainer from "./account/AccountContainer";
import LoginContainer from "./login/LoginContainer";
import SignupContainer from "./signup/SignupContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="app-container">
          <HeaderContainer />
          <Switch>
            <Route path="/login">
              <LoginContainer />
            </Route>
            <Route path="/signup">
              <SignupContainer />
            </Route>
            <Route path="/contacts">
              <ContactsContainer />
            </Route>
            <Route path="/history">
              <HistoryContainer />
            </Route>
            <Route path="/account">
              <AccountContainer />
            </Route>
            <Route path="/">
              <HomeContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
