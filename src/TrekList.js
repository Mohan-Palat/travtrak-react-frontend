import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function TrekList(props) {
  const treks = props.treks.map((trek) => {
    return (
    
      <Card key={trek.id}>
        <Image src={trek.image_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{trek.trip_name}</Card.Header>
          <Card.Description>{trek.date}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Card.Description>{trek.designation}</Card.Description>
        </Card.Content>
      </Card>
    );
  });

  return <Card.Group>{treks}</Card.Group>;
}

export default TrekList;