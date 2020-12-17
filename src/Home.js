import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import Login from './Login'

class Home extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
  
    render() {
      const { activeIndex } = this.state
  
      return (
        <>
            <h1 id='center-header'>Welcome to TravTrak</h1>
            <h3 id='center-header'>TravTrak is here to help organize your upcoming travel and help you plan your next <br></br>trip! Please review the navigation details below:</h3>
            <Accordion id='accordion' fluid styled>
            <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
            >
                <Icon name='dropdown' />
                Travel Planner
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                <p>
                Create a list of places you want to visit and look back at the places you have visited. 
                </p>
            </Accordion.Content>
    
            <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
            >
                <Icon name='dropdown' />
                Is It Safe?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                <p>
                See the safety information for a country. 
                </p>
            </Accordion.Content>
            </Accordion>
            
        </>
      )
    }
}

export default Home;