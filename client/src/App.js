import React from 'react';
import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';
import './App.css';
import Home from './views/Home/home';

import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Redirect from="/" to="/admin/index" />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
