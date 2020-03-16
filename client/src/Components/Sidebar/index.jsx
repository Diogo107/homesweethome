import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { signOut } from '../../Services/authentication';
import { Link, Redirect } from 'react-router-dom';

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
    Redirect('/');
  }

  render() {
    return (
      <div>
        <Link to="/">Dashboard</Link>
        <br />
        <Link to="/profile">Profile</Link>
        <br />
        <Link to="/post">New Post</Link>
        <br />
        <Link to="/services">Services</Link>
        <br />
        <Link to="/insert-bill">Insert Bill</Link>
        <br />
        <Link to="/manage-building">Manage Building</Link>
        <br />
        <Link to="/schedule">Schedule</Link>
        <br />
        <Link to="/create-announcement">Create Announcement</Link>
        <Form>
          <Button type="submit">Sign Out</Button>
        </Form>
      </div>
    );
  }
}
