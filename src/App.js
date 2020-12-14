import React, { Component } from 'react';
import UserInfo from './UserInfo.js';
import Header from './Header'
import TrekContainer from './TrekContainer'
import FlagBanner from './FlagBanner.js';
import { Switch, Route, Router } from 'react-router-dom';
import CreateTrekForm from './CreateTrekForm.js';
import FlagDropdown from './FlagDropdown'
import TrekDetail from './TrekDetail';
import LandingPage from './LandingPage'
import Safety from './Safety'
import Home from './Home'

class App extends Component {

  render() {

    return (
        <Switch>
          <>
          <Header />
          <Route path = '/home' component = {Home} exact />
          <Route path = '/' component = {LandingPage} exact />
          <Route path ='/board' component = {TrekContainer} exact/>
          <Route path ='/safety' component = {Safety} exact/>
          <Route path ='/add' component = {CreateTrekForm} />
          <Route path = '/details' component = {TrekDetail} />
        </>
      </Switch>
    );
  }
}

export default App;
