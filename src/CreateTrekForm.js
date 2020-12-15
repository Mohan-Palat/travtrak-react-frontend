import React, {Component} from 'react'
import { Button, Form, Segment, Label, Radio, Image, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios';
import {Link} from 'react-router-dom'



class CreateTrekForm extends Component {
  state = {
    trip_name: '',
    date: '',
    image_url: '',
    designation:'',
    airline: '',
    confirmation_code:''
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  addTreks = async (e, trek) => {
    e.preventDefault();
    console.log(trek);

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

      console.log(createdTrekResponse.data.data, ' this is response');
      this.setState({
        treks: [...this.state.trek, createdTrekResponse.data.data],
      });
    } catch (err) {
      console.log('error', err);
    }

    

  }

  


  render() {  
      
    return (
    <>
        <Button><Link to='/board' id="link">Back</Link></Button>
        <Segment>
            <h4>Create Trek</h4>
            <Form
            onSubmit={(e) => {
                this.addTreks(e, this.state);
                this.setState({ trip_name: '', date: '', image_url: '', designation: '',  airline: '', confirmation_code:''});
                console.log(e);
            }}
            >
            <Label>Trip Name:</Label>
            <Form.Input
                type="text"
                name="trip_name"
                value={this.state.trip_name}
                onChange={this.handleChange}
            />
            <Label>Date:</Label>
            <Form.Input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
            />
            
            <Label>Image URL:</Label>
            <Form.Input
                type="text"
                name="image_url"
                value={this.state.image_url}
                onChange={this.handleChange}
            />

            <Radio label='this trip is booked' />

            <h4> Flight Info </h4>
            <Label>Airline</Label>
            <Form.Input
                type="text"
                name="airline"
                value={this.state.airline}
                onChange={this.handleChange}
            />            
            <Label>Flight Confirmation</Label>
            <Form.Input
                type="text"
                name="confirmation_code"
                value={this.state.confirmation_code}
                onChange={this.handleChange}
            />
            
            <br></br>
            <br></br>
            <Button type="Submit" onClick={this.setRedirect}>Create Trek</Button>
            </Form>
        </Segment>
    </>
    );
  }
}

export default CreateTrekForm;