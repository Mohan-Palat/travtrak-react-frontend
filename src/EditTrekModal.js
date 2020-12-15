import React from 'react';
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';

const EditTrekModal = (props) => {
  console.log(props);
  


  return (
    <Modal open={props.open}>
      <Header>Edit Trek</Header>
      <Modal.Content>
        <Form onSubmit={props.closeAndEdit}>

          <Label>Date:</Label>
          <Form.Input
            type="date"
            name="date"
            value={props.trekToEdit.date}
            onChange={props.handleEditChange}
          />
          <Label>Airline:</Label>
          <Form.Input
            type="text"
            name="airline"
            value={props.trekToEdit.airline}
            onChange={props.handleEditChange}
          />
                      <Label>Flight Confirmation</Label>
            <Form.Input
                type="text"
                name="confirmation_code"
                value={props.trekToEdit.confirmation_code}
                onChange={props.handleEditChange}
            />
          <Modal.Actions>
            <Button color="green" type="submit">
              Edit Trek
            </Button>

          </Modal.Actions>
        </Form>            
        <Button color="green"> onClick = {props.closeModal}
              Nevermind! 
        </Button>
      </Modal.Content>
    </Modal>
  );
};

export default EditTrekModal;