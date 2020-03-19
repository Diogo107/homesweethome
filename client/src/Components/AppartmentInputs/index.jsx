import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';

const AppartmentInputs = props => {
  {
    console.log('This is th component', props);
  }
  return (
    <div>
      <h1>This is the view of appartments</h1>
      {props.appartments.map(slot => (
        <Form onSubmit={props.sendInvite}>
          <Label>{slot.slot}</Label>
          <Input name={slot._id} placeholder={slot.slot} type="text" onChange={props.updateEmail} />
          <Button type="submit" value="send">
            Send Invite
          </Button>
        </Form>
      ))}
    </div>
  );
};
export default AppartmentInputs;
