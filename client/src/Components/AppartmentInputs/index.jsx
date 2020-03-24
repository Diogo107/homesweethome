import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import './style.scss'

const AppartmentInputs = props => {
  return (
    <div>
      {props.appartments.map(slot => (
        <Form className="manage__form" onSubmit={props.sendInvite}>
          <Label className="form__label"><strong>{slot.slot}</strong></Label>
          <Input
            
            name={slot._id}
            placeholder={slot.email}
            type="text"
            onChange={props.updateEmail}
          />
          <Button className="button__test__invite" type="submit" value="send">
            Send
          </Button>
        </Form>
      ))}
    </div>
  );
};
export default AppartmentInputs;
