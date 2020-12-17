import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'




class NavLinks extends Component {
    render() {
        return (
            <div>
                <div id="flex-link-container">
                        <Link id='nav-link' to='/home'> Home </Link>
                        <Link id='nav-link' to='/board'> Planner </Link>
                        <Link id='nav-link' to='/safety'> Safety </Link>

                </div>
                             
            </div>
        );
    }
}

export default NavLinks;