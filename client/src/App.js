import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Views/NavBar';
import { loadUserInformation } from './Services/authentication';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignInView from './Views/Auth/SignIn';
import SignUpView from './Views/Auth/SignUp';
import Post from './Views/posts/newPosts'

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
            <Switch>
              <Route path="/sign-in" component={SignInView} />
              <Route path="/sign-up" component={SignUpView} />
              <Route path='/post' component={Post}/>
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default App;
