import React, { Component } from 'react';
import './style.scss';
import { Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';

import Background from '../../asset/images/background.jpg'
import Resident from '../../asset/images/resident.png'
import Payment from '../../asset/images/payment.png'
import Announce from '../../asset/images/announce.png'
import Posting from '../../asset/images/posting.png'

class LandingPage extends Component {
  render() {
    return (
      <div>
         <img className="bg" src={Background} />
         <Container className="features">
          <Row>
            <Col>
              <Image src={Resident} roundedCircle />
              <h5>RESIDENTIAL UNIT</h5>
              <small>Manage multiple rented/owned units</small><br />
              <small>Create resident users of units</small>
            </Col>
            <Col>
              <Image src={Payment} roundedCircle />
              <h5>PAYMENT LIST</h5>
              <small>List of payments to show each type of fee incurred</small>
            </Col>
            <Col>
              <Image src={Announce} roundedCircle />
              <h5>ANNOUNCEMENT</h5>
              <small>Management notices to be notified publicly in member view</small>
            </Col>
            <Col>
              <Image src={Posting} roundedCircle />
              <h5>BOARD POSTING</h5>
              <small>Able to create new board post of item or service selling, renting or requesting</small>
 
            </Col>
          </Row>
        </Container>  
        <Container className="about">

        <h1>About Us</h1><br /> 
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

        </Container> 

          <Navbar bg="light" expand="lg">
            <Nav className="ml-auto">
              <small>2020© homesweethome.com Develop by Diogo, Ricardo & Luca</small>
            </Nav>
          </Navbar>
      </div>

    );
  }
}

export default LandingPage;
