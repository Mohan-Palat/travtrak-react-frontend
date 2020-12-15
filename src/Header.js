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
                <div id="flex-header-container">
                        <Button><Link to='/home'> Home </Link></Button>
                        <Button><Link to='/board'> Travel Planner </Link></Button>
                        <Button><Link to='/safety'> Is It Safe? </Link></Button>
                        </div>
                </div>                    
                
                
            </div>
        );
    }
}

export default Header;