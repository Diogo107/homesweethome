import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Input } from 'reactstrap';
const AppartmentInputs = props => {
  return (
    <div>
      <h1>This is the view of appartments</h1>
      <Form>
        <label>Slot</label>
        <br />
        <Input name="email" placeholder="Enter neighbor email..." type="email" />
        <Button>Sent Invite</Button>
      </Form>
    </div>
  );
};
export default AppartmentInputs;
