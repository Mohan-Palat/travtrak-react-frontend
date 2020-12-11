import React, { Component } from 'react';
import UserInfo from './UserInfo.js';
import Header from './Header'
import TrekContainer from './TrekContainer'
import { Icon, Button } from 'semantic-ui-react';
import FlagBanner from './FlagBanner.js';

class App extends Component {

  render() {

    return (
      <>
        <Header />
        <UserInfo />
        <FlagBanner />
        <br></br>
        <br></br>
        <br></br>
        <h3>Treks</h3><Button icon>Add Trek <Icon name='add'/></Button>
        <TrekContainer />
      </>
    );
  }
}

export default App;
