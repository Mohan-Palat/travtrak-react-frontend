import React, { Component } from 'react';
import Header from './Header'
import TrekContainer from './TrekContainer'
import { Switch, Route } from 'react-router-dom';
import CreateTrekForm from './CreateTrekForm.js';
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
    currentUser: {},
    isLoggedIn: ''
  }
  }
//updates current user object
  handleNewUserChange = (e) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    });
  };

//makes login call
  login = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await axios.post(
        process.env.REACT_APP_FLASK_API_URL  + '/user/login',
        this.state.newUser
      );
      this.setState({
        newUser: {
          username: '',
          email: '',
          password: '',
        },
        currentUser: loginResponse.data.data, withCredentials: true, isLoggedIn: true
      });
    } catch (err) {
      console.log(err);
    }
  };
//makes logout call
  logout = async (e) => {
    e.preventDefault();
    console.log(this.state.currentUser.token);
    try {
      await axios(
        process.env.REACT_APP_FLASK_API_URL + '/user/logout', this.state.currentUser.user,{
          headers: {
          'Authorization': 'Bearer ' + this.state.currentUser.token
        }, withCredentials: true
      },

      );
      this.setState({
        currentUser: {},
        isLoggedIn: false
      })
    }catch (err) {
      console.log(err);
    }
  }

  render() {

    return (
        <Switch>
          <>
          <Header />          
          {(this.state.isLoggedIn) ? <h2></h2>: <Login login={this.login} handleNewUserChange={this.handleNewUserChange}/>}
          {(this.state.isLoggedIn) ? <h2 id='welcome-back'>Hello Traveler! <br></br><Button onClick={this.logout}>Logout</Button> </h2>:<h2></h2>}
          <NavLinks />
          <Route path = '/home' component = {Home} exact />
          <Route path ='/board' component = {TrekContainer} exact/>
          <Route path ='/safety' component = {Safety} exact/>
          <Route path ='/add' component = {CreateTrekForm} />
        </>
      </Switch>
    );
  }
}

export default App;
