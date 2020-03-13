import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import './style.scss'
import logo from '../../assets/img/landing-page/logo.png'
import { Button } from 'reactstrap'
class LandingPage extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src={logo}/>
          
          <div>
             
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
        <button type="button" class="btn btn-primary">Manage your Builiding Now!</button>
        </header>
        );
  }
}

export default LandingPage;