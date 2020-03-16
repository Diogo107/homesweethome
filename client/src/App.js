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
import LandingPage from './Views/LandingPage/index';
import CreateBuilding from './Views/BuildingForm';
import Profile from './Views/Profile';
import Dashboard from './Views/Dashboard';
import NewPosts from './Views/posts/newPosts';
import ViewPosts from './Views/posts/viewPosts';
//
import Services from './Views/Services';
import InsertBill from './Views/InsertBill';
import ManageBuilding from './Views/ManageBuilding';
import Schedule from './Views/Schedule';
import CreateAnnouncement from './Views/CreateAnnouncement';

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
    const user = await loadUserInformation();
    await this.updateUserInformation(user);
    this.setState({
      loaded: true
    });
  }

  updateUserInformation(user) {
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
            {(this.state.user && (
              <Container>
                <Row>
                  <Col xs lg="2">
                    <SideBar />
                  </Col>
                  <Col>
                    <Switch>
                      <Route
                        path="/"
                        exact
                        render={props => <Dashboard user={this.state.user} />}
                      />
                      <Route path="/profile" render={props => <Profile user={this.state.user} />} />
                      <Route
                        path="/posts"
                        render={props => <NewPosts user={this.state.user} {...props} />}
                      />
                      <Route path="/sign-up/create-building" component={CreateBuilding} />
                    </Switch>
                  </Col>
                </Row>
              </Container>
            )) || (
              <>
                <Route path="/" component={LandingPage} exact />
                <Route path="/sign-in" component={SignInView} />
                <Route path="/sign-up" component={SignUpView} exact />
              </>
            )}
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default App;
