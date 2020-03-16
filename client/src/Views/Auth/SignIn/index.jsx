import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { signIn } from './../../../Services/authentication';

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
    console.log('Im on Sign In');
  }

  sendMessage(event) {
    // ...
    event.preventDefault();
    const { email, passwordHash } = this.state;
    console.log('Got here!!!!!!!!!!!!!!!');
    signIn({ email, passwordHash });
    this.setState({
      loaded: true
    });
    this.props.history.push('/admin');
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
    return (
      <div>
        <Form onSubmit={this.sendMessage}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="passwordHash"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
