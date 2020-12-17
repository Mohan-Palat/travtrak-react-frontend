import React, { Component } from 'react';
import { Button, Form, Segment, Label, Radio, Image, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)

      }



    render() {console.log(this.props);
        return (
            <div>                <br></br>
            <Segment id='login-form'>
            <h4>Login</h4>
            <Form
            onSubmit={(e) => {
                console.log(e);
            }}
            >

<Label>Username:</Label>
            <Form.Input required
                type="text"
                name="username"
                value={this.props.username}
                onChange={this.props.handleNewUserChange}
            />


            <Label>Password:</Label>
            <Form.Input required
                type="password"
                name="password"
                value={this.props.username}
                onChange={this.props.handleNewUserChange}
            />
            
            <Label>Email:</Label>
            <Form.Input required
                type="text"
                name="email"
                value={this.props.username}
                onChange={this.props.handleNewUserChange}
            />

            <br></br>
            <br></br>
            <Button type="Submit" onClick={this.props.login}>Login</Button>
            </Form>
        </Segment>
            </div>
        );
    }
}

export default Login;