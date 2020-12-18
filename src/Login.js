import React, { Component } from 'react';
import { Button, Form, Segment} from 'semantic-ui-react'

class Login extends Component {


    render() {
        return (
            <div>                <br></br>
            <Segment id='login-form'>
            <h1>Plase Log In!</h1>
            <Form id="login-form"
            onSubmit={(e) => {
            }}
            >
            <h4>Username</h4>
            <Form.Input required
                type="text"
                name="username"
                value={this.props.username}
                onChange={this.props.handleNewUserChange}
            />
            <h4>Password:</h4>
            <Form.Input required
                type="password"
                name="password"
                value={this.props.username}
                onChange={this.props.handleNewUserChange}
            />
            <h4>Email:</h4>
            <Form.Input required
                type="text"
                name="email"
                value={this.props.username}
                onChange={this.props.handleNewUserChange}
            />
            <br></br><br></br>
            <Button type="Submit" onClick={this.props.login}>Login</Button>
            </Form>
        </Segment>
            </div>
        );
    }
}

export default Login;