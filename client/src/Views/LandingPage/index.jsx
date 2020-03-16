import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { Button } from 'reactstrap';
class LandingPage extends Component {
  render() {
    return (
      <header>
        <nav>
          <div>
            <h1>Hello</h1>
            <Link to="/auth/login">
              <Button color="primary" outline type="button">
                Sign In
              </Button>
            </Link>

            <Link to="/auth/register">
              <Button color="primary" outline type="button">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>
        <button type="button" className="btn btn-primary">
          Manage your Builiding Now!
        </button>
      </header>
    );
  }
}

export default LandingPage;
