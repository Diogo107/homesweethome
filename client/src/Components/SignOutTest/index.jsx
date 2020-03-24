import React, { Component } from 'react';


import { Form, Button } from 'react-bootstrap';
import { signOut } from '../../Services/authentication';
import { Redirect } from 'react-router-dom';


export default class Logoff extends Component {
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
    this.setState({
      user: this.props.user
    });
  }

  handleSignOut() {
    signOut();
    Redirect('/');
  }

  render() {
    return (
        <Form className="signout__button" onSubmit={this.handleSignOut}>
          <Button className="button__test" type="submit">
            Sign Out
          </Button>
        </Form>
    );
  }
}
