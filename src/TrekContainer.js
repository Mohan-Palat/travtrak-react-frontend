import React, { Component } from 'react';
import axios from 'axios';
import TrekList from './TrekList';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class TrekContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treks: [],
      trekID: ''
    }
  }
  componentDidMount() {
    this.getTreks();
  }
  getTreks = async () => {
    try {
      const parsedTreks = await axios(
        process.env.REACT_APP_FLASK_API_URL + '/api/v1/treks/'
      );
      await this.setState({
        treks: parsedTreks.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  addTreks = async (e, trek) => {
    e.preventDefault();

    try {
      // The createdTrekResponse variable will store the response from the Flask API
      const createdTrekResponse = await axios({
        method: 'POST',
        url: process.env.REACT_APP_FLASK_API_URL + '/api/v1/treks/',
        data: trek,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // we are emptying all the treks that are living in state into a new array,
      // and then adding the trek we just created to the end of it
      // the new trek which is called parsedResponse.data

      this.setState({
        treks: [...this.state.trek, createdTrekResponse.data.data],
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  deleteTrek = async (id) => {
    console.log(id);
    const deleteTrekResponse = await axios.delete(
      `${process.env.REACT_APP_FLASK_API_URL}/api/v1/treks/${id}`
    );
    console.log(deleteTrekResponse);
    // Now that the db has deleted our item, we need to remove it from state
    // Then make the delete request, then remove the trek from the state array using filter
    this.setState({ 
      treks: this.state.treks.filter((trek) => trek.id !== id), 
    });
  };

  handleTrekDetails = async (id) => {
    console.log(id);
    this.setState({ 
      treks: id, 
    });
  }


  render() {
      return (
        <>
          <h1>Treks</h1>
          <Button><Link to='/add' id="link">Add New Trek</Link></Button>
          <br></br>
          <TrekList treks={this.state.treks} deleteTrek={this.deleteTrek} handleTrekDetails={this.handleTrekDetails}/>
          <br></br>
        </>
      )
    
  }
}

export default TrekContainer;