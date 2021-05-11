import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomeContainer from "./home/HomeContainer";
import HeaderContainer from "./header/HeaderContainer";
import ContactsContainer from "./contacts/ContactsContainer";
import HistoryContainer from "./history/HistoryContainer";
import AccountContainer from "./account/AccountContainer";
import Login from './Login'
import './index.css'

class App extends Component {
  state = {
    loggedIn: false
  }

  handleLogin = data => {
    let url = 'http://localhost:3000'

    let loginObj = {
      user: {
        email: data.email,
        password: data.password
      }
    }

    let configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(loginObj)
    }

    fetch(url + '/login', configObj)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (!!data.error) {
          console.log(data.error)
        } else {
          sessionStorage.setItem('jwt', data.jwt)
          this.setState({ loggedIn: true })
        }
      })
  }

  handleLogout = () => {
    this.setState({
      loggedIn: false
    }, ()=>{
      sessionStorage.clear()
    })
  }

  render() {
    return (
      <Router>
        <div className="App" id="app-container">
          <HeaderContainer />
          <Switch>
            <Route exact path="/login" render={ ()=> {
              return !this.state.loggedIn ? <Login handleLogin={ this.handleLogin } /> : <Redirect to="/" />
              } } />
            <Route path="/contacts" render={ ()=>{
              return this.state.loggedIn ? <ContactsContainer /> : <Redirect to="/login" />
            }} />
            <Route path="/history" render={ ()=>{
              return this.state.loggedIn ? <HistoryContainer /> : <Redirect to="/login" />
            }} />
            <Route path="/account" render={ ()=>{
              return this.state.loggedIn ? <AccountContainer handleLogout={ this.handleLogout } /> : <Redirect to="/login" />
            }} />
            <Route path="/" render={ ()=>{
              return this.state.loggedIn ? <HomeContainer /> : <Redirect to="/login" />
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
