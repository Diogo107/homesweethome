import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { loadUserInformation } from './Services/authentication';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignInView from './Views/Auth/SignIn';
import SignUpView from './Views/Auth/SignUp';
import SideBar from './Components/Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUserInformation = this.updateUserInformation.bind(this);
  }

  async componentDidMount() {
    console.log('Im on APP');
    const user = await loadUserInformation();
    await this.updateUserInformation(user);
    this.setState({
      loaded: true
    });
    console.log('App', this.state);
  }

  updateUserInformation(user) {
    console.log('this is the update information', user);
    this.setState({
      user
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.loaded && (
          <BrowserRouter>
            <NavBar user={this.state.user} />
            <Container>
              <Row>
                <Col xs lg="2">
                  <SideBar />
                </Col>
                <Col>
                  <h1>This is the part it will show all the things</h1>
                </Col>
              </Row>
            </Container>

            <Switch>
              <Route path="/sign-in" component={SignInView} />
              <Route path="/sign-up" component={SignUpView} />
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default App;
