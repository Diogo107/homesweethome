import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: this.props.user
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    console.log('nav', this.props);
  }

  render() {
    if (this.state.user !== null) {
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <Link to="/">Brand</Link>
              </Col>
              <Col xs={5}>
                <Link to="/sign-in">Sign In</Link>
              </Col>
              <Col>
                <Link to="/sign-up">Sign Up</Link>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Brand</h1>
          <h4>Sign In</h4>
          <h4>Sign Up</h4>
        </div>
      );
    }
  }
}
