import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

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
            <h1>Welcome to TravTrak</h1>
            <h4>Breakdown of Site:</h4>
            <Accordion fluid styled>
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