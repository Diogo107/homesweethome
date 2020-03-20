import React, { Component } from 'react';
import './App.scss';
import NavBar from './Components/NavBar';
import { loadUserInformation } from './Services/authentication';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignInView from './Views/Auth/SignIn';
import SignUpView from './Views/Auth/SignUp';
import SignUpUserView from './Views/Auth/SignUpUser';
import SideBar from './Components/Sidebar';
import LandingPage from './Views/LandingPage/index';
import CreateBuilding from './Views/BuildingForm';
import Profile from './Views/Profile';
import Dashboard from './Views/Dashboard';
import NewPosts from './Views/posts/newPosts';
import CreateServices from './Views/Services/AddServices';
import ServicesView from './Views/Services/ViewServices';
import ManageBuilding from './Views/ManageBuilding';
import PaymentMethodListView from './Views/PaymentMethodList';
import PaymentMethodCreateView from './Views/PaymentMethodCreate';
import FirstPayment from './Views/FirstPayment';
import InsertBill from './Views/InsertBill';
import Schedule from './Views/Schedule';
import CreateAnnouncement from './Views/CreateAnnouncement';
import NavUser from './Components/NavUser';
import CreateDocument from './Views/Documents/CreateDocument';
import PostsView from './Views/posts/viewPosts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: null,
      cart: []
    };
    this.updateUserInformation = this.updateUserInformation.bind(this);
    this.updateCart = this.updateCart.bind(this);
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

  updateCart(item) {
    this.setState(previousState => ({
      cart: [...previousState.cart, item]
    }));
  }

  render() {
    return (
      <div className="App">
        {this.state.loaded && (
          <BrowserRouter>
            {!this.state.user && <NavBar user={this.state.user} />}
            {(this.state.user && (
              <div>
                <div className="main__sidebar">
                  <Route path="*" render={props => <SideBar user={this.state.user} {...props} />} />
                </div>
                <div className="main__dashboard">
                  <Route
                    path="*"
                    exact
                    render={props => <NavUser user={this.state.user} {...props} />}
                  />
                  <Switch>
                  <Route
                        path="/"
                        exact
                        render={props => <Dashboard user={this.state.user} {...props} />}
                      />
                      <Route
                        path="/dashboard"
                        
                        render={props => <Dashboard user={this.state.user} {...props} />}
                      />
                    <Route path="/profile" render={props => <Profile user={this.state.user} />} />
                    <Route
                      path="/post"
                      render={props => <NewPosts user={this.state.user} {...props} />}
                    />
                    <Route
                      path="/schedule"
                      render={props => <Schedule user={this.state.user} {...props} />}
                    />
                    
                      <Route path="/profile" render={props => <Profile user={this.state.user} />} />
                      
                      <Route
                        path="/view-post"
                        render={props => <PostsView user={this.state.user} {...props} />}
                      />
                      <Route
                        path="/schedule"
                        render={props => <Schedule user={this.state.user} {...props} />}
                      />
                      <Route path="/services" component={ServicesView} />
                      
                      {this.state.user.admin && (
                        <div>
                        
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

                          <Route
                            authorized={this.state.user}
                            redirect="/sign-in"
                            path="/payment-method/list"
                            render={props => (
                              <PaymentMethodListView user={this.state.user} {...props} />
                            )}
                          />
                        <Route
                            authorized={this.state.user}
                            redirect="/sign-in"
                            path="/payment-method/create"
                            exact
                            render={props => (
                              <PaymentMethodCreateView user={this.state.user} {...props} />
                            )}
                          />
                          <Route
                            authorized={this.state.user}
                            redirect="/sign-in"
                            path="/first-payment"
                            exact
                            render={props => (
                              <FirstPayment
                                cart={this.state.cart}
                                updateCart={this.updateCart}
                                user={this.state.user}
                                {...props}
                              />
                            )}
                          />
                          </div>
                        )}
                    <Route
                        path="*"
                        render={props => <Dashboard user={this.state.user} {...props} />}
                       />
                  </Switch>
                  
                </div>
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
                  <Route
                    path="/sign-up/user/:slotId/:buildingId"
                    render={props => (
                      <SignUpUserView
                        updateUserInformation={this.updateUserInformation}
                        {...props}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/sign-up"
                    render={props => (
                      <SignUpView
                        updateUserInformation={this.updateUserInformation}
                        {...props}
                        exact
                      />
                    )}
                  />
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
