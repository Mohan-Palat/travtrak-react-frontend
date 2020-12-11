import React, { Component } from 'react';
import axios from 'axios';
import TrekList from './TrekList';
import { Card, Image, Button } from 'semantic-ui-react';

class TrekContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treks: [],
    };
  }
  componentDidMount() {
    this.getTreks();
  }
  getTreks = async () => {
    try {
      const parsedTreks = await axios(
        process.env.REACT_APP_FLASK_API_URL + '/api/v1/treks/'
      );
      console.log(parsedTreks.data.data);
      await this.setState({
        treks: parsedTreks.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return <TrekList treks={this.state.treks} />;
  }
}

export default TrekContainer;