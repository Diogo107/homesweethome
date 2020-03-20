import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../asset/images/logo.png'
import { signOut } from '../../Services/authentication';
import './style.scss'

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
    this.props.updateUserInformation(null);
  }

  render() {
    return (
      <div>
        {(!this.state.user && (
        
            <Navbar className="navbar" bg="transparent" expand="lg">
            <Navbar.Brand href="/"><img className="logo" src={logo}/></Navbar.Brand>
            <div className="ml-auto links">
              <a href="/sign-in" className="nav__link">Sign In</a>
              <a href="/sign-up">Sign Up</a>
            </div>
          </Navbar>
                )) ||
          ''}
      </div>
    );
  }
}
