import React, {Component} from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';

class TrekList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trekID:'',
    }
  }

  render() { 

  const treks = this.props.treks.map((trek) => {
    return (
    
      <Card id="trip-card" key={trek.id}>
        <Image src={trek.image_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header id="center">{trek.trip_name}</Card.Header>
          <Card.Description>{trek.date}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Card.Description>{trek.designation}</Card.Description>
            <Button onClick={() => this.props.handleTrekDetails(trek.id)}>Details</Button>
            <Button onClick={() => this.props.openAndEdit(trek.id)}>Edit</Button>
            <Button icon onClick={() => this.props.deleteTrek(trek)}><Icon name="trash"/></Button>
        </Card.Content>
      </Card>
    );
  });
    return (
      <div>
        <Card.Group>{treks}</Card.Group>
      </div>
    );
  }
}

export default TrekList;