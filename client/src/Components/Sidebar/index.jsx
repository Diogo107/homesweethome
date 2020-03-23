import React, { Component } from 'react';
import './style.scss';

import { Form, Button } from 'react-bootstrap';
import { signOut } from '../../Services/authentication';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../asset/images/logo.png';

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
      <div className="sidebar">
        <div>
          <img className="sidebar__logo" src={logo} alt="logo" />
        </div>
        <div className="sidebar__item">
          <Link to="/">Dashboard</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/finance">Finance</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/post">New Post</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/schedule">Schedule</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/services">Services</Link>
        </div>

        {this.props.user.admin && (
          <div className="admin__dashboard">
            <div className="sidebar__item">
              <Link to="/insert-bill">Insert Bill</Link>
            </div>
            <div className="sidebar__item">
              <Link to="/manage-building">Manage Building</Link>
            </div>
            <div className="sidebar__item">
              <Link to="/create-announcement">Create Announcement</Link>
            </div>
            <div className="sidebar__item">
              <Link to="/create-document">Create New Quote</Link>
            </div>
            <div className="sidebar__item">
              <Link to="/create-services">Create Service</Link>
            </div>
          
          </div>
        )}

        <Form className="signout__button" onSubmit={this.handleSignOut}>
          <Button className="button__test" type="submit">
            Sign Out
          </Button>
        </Form>
      </div>
    );
  }
}
