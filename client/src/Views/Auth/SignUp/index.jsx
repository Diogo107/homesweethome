import React, { Component } from 'react';
import { signUp } from './../../../Services/authentication';
import { Form, Button } from 'react-bootstrap';
import './style.scss';
import { Redirect } from 'react-router-dom';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      code: '',
      passwordHash: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleInputChange(event) {
    console.log('this is the signUp', this.props);
    const value = event.target.value;
    const inputName = event.target.name;
    console.log(value);
    this.setState({
      [inputName]: value
    });
  }

  async sendMessage(event) {
    console.log('hsdjdasdhas', this.props);
    event.preventDefault();
    const { name, email, phoneNumber, code, passwordHash } = this.state;
    let admin = true
    try {
      const user = await signUp({ name, email, phoneNumber, code, passwordHash,admin });
      this.props.updateUserInformation(user);
      this.props.history.push('/sign-up/create-building');
    } catch (error) {
      console.log(error);
    }
    //Redirect('/sign-up/create-building');
  }

  render() {
    console.log('something');
    return (
      <div className="sign-up">
        <Form onSubmit={this.sendMessage} method="POST">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              name="email"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
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
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter code"
              required
              name="code"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
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
