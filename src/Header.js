import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div id='nav-bar'>
                <div id="flex-header-container">
                <div id="flex-header-container">
                        <h1 id="logo">TravTrak</h1>
                        </div>
                </div>                     
            </div>
        );
    }
}

export default Header;