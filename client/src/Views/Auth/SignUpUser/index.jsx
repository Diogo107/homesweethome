import React, { Component } from 'react';
import { signUp } from '../../../Services/authentication';
import { Form, Button } from 'react-bootstrap';
import './style.scss';
import { Redirect } from 'react-router-dom';
import { firstBuilding } from './../../../Services/otherServices';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      code: '',
      admin: false,
      slot: '',
      buildingId: this.props.match.params.buildingId,
      passwordHash: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  async componentDidMount() {
    const building = await firstBuilding(this.props.match.params.buildingId);
    const email = building.numberOfApartments.filter(
      user => user._id == this.props.match.params.slotId
    );
    const slot = building.numberOfApartments.filter(
      user => user._id == this.props.match.params.slotId
    );
    const finalSlot = slot[0].slot;
    console.log('This is a test.......', this.props.match.params.buildingId);
    const final = email[0].email;
    this.setState({
      email: final,
      slot: finalSlot
    });
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    console.log(value);
    this.setState({
      [inputName]: value
    });
  }

  async sendMessage(event) {
    event.preventDefault();
    const { name, email, phoneNumber, code, admin, slot, buildingId, passwordHash } = this.state;
    try {
      const user = await signUp({
        name,
        email,
        phoneNumber,
        code,
        admin,
        slot,
        buildingId,
        passwordHash
      });
      this.props.updateUserInformation(user);
      await this.props.history.push('/');
      //window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log('something', this.state);
    return (
      <div className="sign-up">
        <Form onSubmit={this.sendMessage} method="POST">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          {/* <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              name="email"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group> */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              name="phoneNumber"
              placeholder="Enter phone number"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          {/* <Form.Group controlId="formBasicEmail">
            <Form.Label>Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter code"
              required
              name="code"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group> */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              name="passwordHash"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button variant="outline-success" type="submit">
            Sign Up!
          </Button>
        </Form>
      </div>
    );
  }
}
