import React, { Component } from 'react';

class UserInfo extends Component {

    profileSettings = (e) => {
        e.preventDefault()
        console.log("working, baby");
    }

    render() {
        return (
            <div>
                <div id="user-flex-container">
                    <h3 id="header-username">@vicky</h3>
                    <img id="profile-pic" src="./profile-pic.jpg"></img>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default UserInfo;