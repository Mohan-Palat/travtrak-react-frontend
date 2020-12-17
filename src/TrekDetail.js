import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class TrekDetail extends Component {
    constructor(props) {
        super(props);
    
      }

      

    render() {
    
        
        return (

            
            <div id='trek-details'>
                {(this.props.trek !== '') ? <h2 id="trek-detail-header">{this.props.trek}</h2>: <h2></h2>}
                {(this.props.date !== '') ? <h3 class='detail-granular'> Date: {this.props.date}</h3>: <h2></h2>}
                {(this.props.airline !== '') ? <h4 class='detail-granular'>Airline:{this.props.airline}</h4>: <h2></h2>}
                {(this.props.confirmation_code !== '') ? <h4 class='detail-granular'>Confirmation Code: {this.props.confirmation_code}</h4>: <h2></h2>}
                {(this.props.trek !== '') ? <br></br> : <h2></h2>}
                {(this.props.trek !== '') ? <br></br> : <h2></h2>}
                {(this.props.trek !== '') ? <br></br> : <h2></h2>}
            </div>
        );
    }
}

export default TrekDetail;