import React, { Component } from 'react';
import Header from './Header'
import TrekContainer from './TrekContainer'
import { Switch, Route, Router, } from 'react-router-dom';
import CreateTrekForm from './CreateTrekForm.js';
import LandingPage from './LandingPage'
import Safety from './Safety'
import Home from './Home'
import NavLinks from './NavLinks'
import axios from 'axios'
import Login from './Login'
import { Button } from 'semantic-ui-react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: {
        username: '',
        email: '',
        password: ''
    },
    currentUser: {}
  }
  }

  handleNewUserChange = (e) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    });
  };


  login = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await axios.post(
        process.env.REACT_APP_FLASK_API_URL  + '/user/login',
        this.state.newUser
      );

      console.log(loginResponse, ' Login Response');
      this.setState({

        newUser: {
          username: '',
          email: '',
          password: '',
        },
        currentUser: loginResponse.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };


  logout = async (e) => {
    e.preventDefault();
    console.log(this.state.currentUser.token);
    try {
      await axios(
        process.env.REACT_APP_FLASK_API_URL + '/user/logout', this.state.currentUser.user,{
          headers: {
          'Authorization': 'Bearer ' + this.state.currentUser.token
        }
      },

      );
      this.setState({
        currentUser: {}
      })
    }catch (err) {
      console.log(err);
    }
  }


  render() {

    console.log(this.state.currentUser)

    return (

        <Switch>
          <>
          <Header />          
          <NavLinks />
          <Route path = '/home' component = {Home} exact />
          <Route path = '/' component = {LandingPage} exact />
          <Route path ='/board' component = {TrekContainer} exact/>
          <Route path ='/safety' component = {Safety} exact/>
          <Route path ='/add' component = {CreateTrekForm} />
          {(this.state.currentUser !== '') ? <Login login={this.login} handleNewUserChange={this.handleNewUserChange}/>: <h2>Welcome back!</h2>}
          <Button onClick={this.logout}>Logout</Button>
          {/* <Login login={this.login} handleNewUserChange={this.handleNewUserChange}/> */}
        </>
      </Switch>
    );
  }
}

export default App;
