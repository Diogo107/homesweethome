import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    console.log('componentMount', this.props);
    this.setState({
      user: this.props.user
    });
    console.log('nav', this.props);
  }

  render() {
    console.log('On the navBar still...', this.state);
    return (
      <div>
        {(!this.state.user && (
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
        )) || (
          <Container>
            <Row>
              <Col>
                <Link to="/">Brand</Link>
              </Col>
              <Col>
                <Link to="/sign-out">Sign Out</Link>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}
