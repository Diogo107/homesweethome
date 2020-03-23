import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { signOut } from '../../Services/authentication';
import { Link } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import { Form, Button } from 'react-bootstrap';
import logo from '../../asset/images/logo.png';
import SwipeableTemporaryDrawer from '../BurgerTest';
import Avatar from '@material-ui/core/Avatar';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  componentDidMount() {
    console.log(this.state.user);
    console.log('NavUser', this.props);
    this.setState({
      user: this.props.user
    });
  }

  handleSignOut() {
    signOut();
    this.props.updateUserInformation(null);
  }

  changeInput(path) {
    switch (path) {
      case '/':
        return 'Dashboard';
        break;
      case '/post':
        return 'New Post';
        break;
      case '/profile':
        return 'Profile';
        break;
      case '/services':
        return 'Services';
        break;
      case '/insert-bill':
        return 'Insert Bill';
        break;
      case '/manage-building':
        return 'Manage Building';
        break;
      case '/schedule':
        return 'Schedule';
        break;
      case '/create-announcement':
        return 'Create Announcement';
        break;
      case '/create-document':
        return 'Create Document';
        break;
      case '/create-services':
        return 'Create Services';
        break;
      case '/finance':
        return 'Finance';
        break;
    }
  }

  render() {
    return (
      <div>
        {(this.state.user && (
          <div className="nav__user">
            <Menu width={'100%'} className="burger__menu" {...this.props}>
              <div>
                <img className="sidebar__logo" src={logo} alt="logo" />
              </div>
              <div className="sidebar__item">
                <Link to="/">Dashboard</Link>
              </div>
              <div className="sidebar__item">
                <Link to="/profile">Profile</Link>
              </div>
              <div className="sidebar__item">
                <Link to="/post">New Post</Link>
              </div>
              <div className="sidebar__item">
                <Link to="/services">Services</Link>
              </div>
              <div className="sidebar__item">
                <Link to="/insert-bill">Insert Bill</Link>
              </div>
              <div className="sidebar__item">
                <Link to="/manage-building">Manage Building</Link>
              </div>
              <div className="sidebar__item">
                <Link to="/schedule">Schedule</Link>
              </div>
              <div className="sidebar__item">
                <Link to="/create-announcement">Create Announcement</Link>
              </div>
              <div className="sidebar__item">
                <Link to="/create-document">Create Document</Link>
              </div>
              <div className="sidebar__item">
                <Link to="/create-services">Create Service</Link>
              </div>
              <div className="sidebar__item">
                <Form onSubmit={this.handleSignOut}>
                  <Button variant="outline-dark" type="submit">
                    Sign Out
                  </Button>
                </Form>
              </div>
            </Menu>

            {/*
       <Menu width={ '100%'} className="burger__menu" {...this.props}>
        <div>
          <img className="sidebar__logo" src={logo} alt="logo" />
        </div>
        <div className="sidebar__item">
          <Link to="/">Dashboard</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/post">New Post</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/services">Services</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/insert-bill">Insert Bill</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/manage-building">Manage Building</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/schedule">Schedule</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/create-announcement">Create Announcement</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/create-document">Create Document</Link>
        </div>
        <div className="sidebar__item">
          <Link to="/create-services">Create Service</Link>
        </div>
        <div className="sidebar__item">
          <Form onSubmit={this.handleSignOut}>
            <Button variant="outline-dark" type="submit">
              Sign Out
            </Button>
          </Form>
        </div>
      </Menu>
  */}
            <div className="button__menu__test">
              <SwipeableTemporaryDrawer />
            </div>
            <Navbar.Brand className="navuser__path" href="/">
              {this.changeInput(this.props.history.location.pathname)}
            </Navbar.Brand>
            <div>
              <img className="mobile__menu__logo" src={logo} alt="logo" />
            </div>
            <Nav className="ml-auto mobileuser">
              <Avatar alt="Remy Sharp" src={this.state.user.picture} />
              <Nav.Link className="mobilename" href="/profile">
                {this.state.user.name}
              </Nav.Link>
            </Nav>
          </div>
        )) ||
          ''}
      </div>
    );
  }
}
