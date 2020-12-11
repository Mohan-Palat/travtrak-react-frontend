import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';


class Header extends Component {
    render() {
        return (
            <div id="flex-header-container">
                    <h1 id="logo">TravTrak</h1>
                    <Button>Log Out</Button>
            </div>
        );
    }
}

export default Header;