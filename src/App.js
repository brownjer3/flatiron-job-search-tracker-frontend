import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./home/HomeContainer";
import HeaderContainer from "./header/HeaderContainer";
import ContactsContainer from "./contacts/ContactsContainer";
import HistoryContainer from "./history/HistoryContainer";
import AccountContainer from "./account/AccountContainer";
import Login from './Login'
import './index.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="app-container">
          <Switch>
            <Route exact path="/" render={ ()=> <Login /> } />
            <Route path="/contacts">
              <HeaderContainer />
              <ContactsContainer />
            </Route>
            <Route path="/history">
              <HeaderContainer />
              <HistoryContainer />
            </Route>
            <Route path="/account">
              <HeaderContainer />
              <AccountContainer />
            </Route>
            <Route path="/">
              <HeaderContainer />
              <HomeContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
