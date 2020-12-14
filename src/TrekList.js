import React, {Component} from 'react';
import { Card, Image, Button } from 'semantic-ui-react';


// function TrekList(props) {
//   const treks = props.treks.map((trek) => {
//     return (
    
//       <Card key={trek.id}>
//         <Image src={trek.image_url} wrapped ui={false} />
//         <Card.Content>
//           <Card.Header>{trek.trip_name}</Card.Header>
//           <Card.Description>{trek.date}</Card.Description>
//         </Card.Content>
//         <Card.Content extra>
//             <Card.Description>{trek.designation}</Card.Description>
//             <Button>Details</Button>
//             <Button onClick={() => props.deleteTrek(trek.id)}>Delete</Button>
//         </Card.Content>
//       </Card>
//     );
//   });

//   return <Card.Group>{treks}</Card.Group>;
// }

// export default TrekList;


class TrekList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trekID:'',
    }
  }

  handleDetails = (e) => {
console.log(e);
  }

  render() { 

  const treks = this.props.treks.map((trek) => {
    return (
    
      <Card key={trek.id}>
        <Image src={trek.image_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{trek.trip_name}</Card.Header>
          <Card.Description>{trek.date}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Card.Description>{trek.designation}</Card.Description>
            <Button onClick={this.handleDetails}>Details</Button>
            <Button onClick={() => this.props.deleteTrek(trek.id)}>Delete</Button>
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