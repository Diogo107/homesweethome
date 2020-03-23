import React, { Component } from 'react';
import { signUp } from './../../../Services/authentication';
import { Form, Button } from 'react-bootstrap';
import './style.scss';
import Apartment from '../../../asset/images/apartment.png';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
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
    event.preventDefault();
    const { name, email, phoneNumber, passwordHash } = this.state;
    let admin = true;
    let payment = false;
    let blocked = false;
    let paymentMethods = false;
    let createdAt = Date.now();
    try {
      const user = await signUp({
        name,
        email,
        phoneNumber,
        passwordHash,
        admin,
        payment,
        createdAt,
        blocked,
        paymentMethods
      });
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
        <img className="img__apartment" src={Apartment} />
        <h2>Sign Up</h2>

        <Form onSubmit={this.sendMessage} method="POST">
          <Form.Group controlId="formBasicEmail">
            <TextField
              className="textfield"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              placeholder="Enter your Name"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <TextField
              className="textfield"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              placeholder="Enter email"
              required
              name="email"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <TextField
              className="textfield"
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              type="number"
              name="phoneNumber"
              placeholder="Your Phone Number"
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
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
              autoComplete="current-password"
              placeholder="Password"
              required
              name="passwordHash"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button className="button__test" type="submit">
            Sign Up!
          </Button>
        </Form>
      </div>
    );
  }
}
