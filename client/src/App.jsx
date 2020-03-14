import React, { Component } from 'react';
import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';
import './App.css';
import { loadUserInformation } from './Services/authentication';

import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';
import LandingPage from 'views/LandingPage';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.updateUserInformation = this.updateUserInformation.bind(this);
  }

  async componentDidMount() {
    const user = await loadUserInformation();
    await this.updateUserInformation(user);
    await this.setState({
      loaded: true
    });
    console.log('APP this.state', this.state);
    this.fetchData();
  }

  updateUserInformation(user) {
    this.setState({
      user
    });
  }
  fetchData() {}

  render() {
    return (
      <div className="App">
        {this.state.loaded && (
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route
              path="/admin"
              render={props => <AdminLayout user={this.state.user} {...props} />}
            />
            <Route path="/auth" render={props => <AuthLayout {...props} />} />
          </Switch>
        )}
      </div>
    );
  }
}

export default App;
