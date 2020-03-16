import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { signOut } from '../../Services/authentication';
import { Link } from 'react-router-dom';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    console.log('componentMount', this.props);
    this.setState({
      user: this.props.user
    });
    console.log('nav', this.props);
  }

  handleSignOut() {
    console.log('This is sign out');
    signOut();
    this.props.updateUserInformation(null);
  }

  render() {
    return (
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <h6>Documents</h6>
        <Link to="/profile">Profile</Link>
        <h6>Posts (Write)</h6>
        <h6>Services</h6>
        <h6>Insert Bill</h6>
        <h6>Manage Building</h6>
        <h6>Scedhule</h6>
        <h6>Create Announcement</h6>
        <Form onSubmit={this.handleSignOut}>
          <Button type="submit">Sign Out</Button>
        </Form>
      </div>
    );
  }
}
