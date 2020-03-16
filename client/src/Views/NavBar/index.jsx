import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
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
  }

  componentDidMount() {
    console.log('componentMount', this.props);
    this.setState({
      user: this.props.user
    });
    console.log('nav', this.props);
  }

  handleSignOut() {
    console.log('This is sign out');
    signOut();
    this.props.updateUserInformation(null);
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
                <Form onSubmit={this.handleSignOut}>
                  <Button type="submit">Sign Out</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}
