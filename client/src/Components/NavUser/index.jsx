import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import { signOut } from '../../Services/authentication';

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
    }
  }

  render() {
    return (
      <div>
        {(this.state.user && (
          <Navbar className="nav__user" bg="transparent" expand="lg">
            <Navbar.Brand href="/">
              {this.changeInput(this.props.history.location.pathname)}
            </Navbar.Brand>
            <Nav className="ml-auto">
              <img src={this.state.user.picture} style={{ width: '40px' }} alt="..." />
              <Nav.Link href="/profile">{this.state.user.name}</Nav.Link>
            </Nav>
          </Navbar>
        )) ||
          ''}
      </div>
    );
  }
}
