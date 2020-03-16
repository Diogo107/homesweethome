import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Views/NavBar';
import { loadUserInformation } from './Services/authentication';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignInView from './Views/Auth/SignIn';
import SignUpView from './Views/Auth/SignUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: 'this is the user'
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
    console.log(this.state);
  }

  updateUserInformation(user) {
    this.setState({
      user
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar user={this.state.user} />
          <Switch>
            <Route path="/sign-in" component={SignInView} />
            <Route path="/sign-up" component={SignUpView} />
          </Switch>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
