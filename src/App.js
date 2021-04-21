import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./home/HomeContainer";
import HeaderContainer from "./header/HeaderContainer";
import ContactsContainer from "./contacts/ContactsContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="app-container">
          <HeaderContainer />
          <Switch>
            <Route path="/contacts">
              <ContactsContainer />
            </Route>
            {/* <Route path="">
              <Container />
            </Route>
            <Route path="">
              <Container />
            </Route> */}
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
