import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './App.scss';
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
import CreateServices from './Views/Services/AddServices';
import ServicesView from './Views/Services/ViewServices';
import ManageBuilding from './Views/ManageBuilding';
//

import InsertBill from './Views/InsertBill';
import Schedule from './Views/Schedule';
import CreateAnnouncement from './Views/CreateAnnouncement';
import NavUser from './Components/NavUser';
import CreateDocument from './Views/Documents/CreateDocument';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: null
    };
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
    {
      console.log(this.state);
    }
    return (
      <div className="App">
        {this.state.loaded && (
          <BrowserRouter>
            <NavBar user={this.state.user} />
            {(this.state.user && (
              <div>
                <Row>
                  <Col xs lg="2">
                    {/* <SideBar  /> */}
                    <Route
                      path="*"
                      render={props => <SideBar user={this.state.user} {...props} />}
                    />
                  </Col>
                  <Col sm={9}>
                    <Route
                      path="*"
                      exact
                      render={props => <NavUser user={this.state.user} {...props} />}
                    />
                    <Switch>
                      <Route path="/profile" render={props => <Profile user={this.state.user} />} />
                      <Route
                        path="/post"
                        render={props => <NewPosts user={this.state.user} {...props} />}
                      />
                      <Route
                        path="/schedule"
                        render={props => <Schedule user={this.state.user} {...props} />}
                      />
                      <Route
                        path="/insert-bill"
                        render={props => <InsertBill user={this.state.user} {...props} />}
                      />
                      <Route
                        path="/sign-up/create-building"
                        render={props => <CreateBuilding user={this.state.user} {...props} />}
                      />
                      <Route
                        path="/manage-building"
                        render={props => <ManageBuilding user={this.state.user} {...props} />}
                      />
                      <Route path="/create-announcement" component={CreateAnnouncement} />
                      <Route path="/create-document" component={CreateDocument} />
                      <Route path="/create-services" component={CreateServices} />
                      <Route path="/services" component={ServicesView} />
                      <Route
                        path="*"
                        exact
                        render={props => <Dashboard user={this.state.user} />}
                      />
                    </Switch>
                  </Col>
                </Row>
              </div>
            )) || (
              <>
                <Switch>
                  <Route
                    path="/sign-in"
                    render={props => (
                      <SignInView updateUserInformation={this.updateUserInformation} {...props} />
                    )}
                  />
                  <Route path="/sign-up" render={props => <SignUpView {...props} exact />} />
                  <Route path="*" component={LandingPage} />
                </Switch>
              </>
            )}
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default App;
