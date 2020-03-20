import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { signIn } from './../../../Services/authentication';
import TextField from '@material-ui/core/TextField';
import './style.scss';
import Apartment from '../../../asset/images/apartment.png';
import { Redirect } from 'react-router-dom';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      email: '',
      passwordHash: ''
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  async componentDidMount() {
    console.log('this is the sign in', this.props);
  }

  async sendMessage(event) {
    // ...
    event.preventDefault();
    const { email, passwordHash } = this.state;
    const user = await signIn({ email, passwordHash });
    console.log('user', user);
    this.props.updateUserInformation(user);
    Redirect('/');
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    console.log(this.state);
    this.setState({
      [inputName]: value
    });
  }

  render() {
console.log('something')
  

    return (
      <div className="sign-in">
        
        <img className="img__apartment" src={Apartment} />
        <h2>Sign in</h2>

          <Form onSubmit={this.sendMessage}>
            <Form.Group controlId="formBasicEmail">
              <TextField
                className="textfield"
                id="outlined-basic" label="Email" variant="outlined"
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.handleInputChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
              autoComplete="current-password"
              placeholder="Password"
              name="passwordHash"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Button className="button__test" type="submit">
            Sign In!
          </Button>
        </Form>
        <small><a href="/sign-up">Don't have an account? Sign Up</a></small>
      </div>
    );
  }
}
