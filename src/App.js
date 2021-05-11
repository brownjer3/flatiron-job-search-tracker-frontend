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
    loggedIn: false,
    currentUser: null
  }

  componentDidMount(){
    this.autoLogin()
  }

  toggleLogin = data => {
    this.setState({ loggedIn: true })
  }

  handleLogout = () => {
    this.setState({
      loggedIn: false
    }, ()=>{
      sessionStorage.clear()
    })
  }

  autoLogin = () => {
    let url = 'http://localhost:3000'

    if (sessionStorage.length > 0) {
      let configObj = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${ sessionStorage.jwt }`
        }
      }

      fetch(url + '/profile', configObj)
        .then(res => res.json())
        .then(data => {
          if (!!data.error) {
            console.log(data.error)
          } else {
            this.setState({ loggedIn: true, currentUser: data })
          }
        })
    }
  }

  render() {
    return (
      <Router>
        <div className="App" id="app-container">
          { this.state.loggedIn ? <HeaderContainer /> : null }
          <Switch>
            <Route exact path="/login" render={ ()=> {
              return !this.state.loggedIn ? <Login toggleLogin={ this.toggleLogin } /> : <Redirect to="/" />
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
