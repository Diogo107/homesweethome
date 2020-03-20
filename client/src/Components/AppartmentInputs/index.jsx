import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';

const AppartmentInputs = props => {
  return (
    <div>
      {props.appartments.map(slot => (
        <Form onSubmit={props.sendInvite}>
          <Label>{slot.slot}</Label>
          <Input
            name={slot._id}
            placeholder={slot.email}
            type="text"
            onChange={props.updateEmail}
          />
          <Button type="submit" value="send">
            Send Invite
          </Button>
        </Form>
      ))}
    </div>
  );
};
export default AppartmentInputs;
