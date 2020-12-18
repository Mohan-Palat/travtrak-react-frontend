import React, { Component } from 'react';
import { Accordion, Icon} from 'semantic-ui-react';
import beach from './picture-components/beach-cover.jpg';
import ireland from './picture-components/ireland.jpg';
import venice from './picture-components/venice.jpg';
import nyc from './picture-components/nyc.jpg';

class Home extends Component {
    state = { activeIndex: 0 }
//accordion click handler - opens and closes the moption
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
                <div id = 'image-flex'>
                    <img class='home-banner' src={beach} alt="beach" />
                    <img class='home-banner' src={ireland} alt="ireland" />
                    <img class='home-banner' src={venice} alt="venice" />
                    <img class='home-banner' src={nyc} alt="venice" />
                </div>
            <h3 id='center-header'>TravTrak is here to help organize your upcoming travel and help you plan your next <br></br>trip! Please review the navigation details below:</h3>
            <Accordion id='accordion' fluid styled>
            <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
            >
            <Icon name='dropdown' />
               Planner
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                <p>
                Create a list of your upcoming trips/ Store infomration like the date of travel and your flight informaiton to stay organized. Add trips (or treks!) to your page and then review/update the details when necassary. 
                </p>
            </Accordion.Content>
    
            <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
            >
            <Icon name='dropdown' />
                Safety
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                <p>
                When planning your travel it is important to ensure you and your family are safe. Use the safety feature of TravTrak to review travel advisories and ratings. 
                </p>
            </Accordion.Content>
            </Accordion>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </>
      )
    }
}

export default Home;