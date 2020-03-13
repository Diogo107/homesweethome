import React from 'react';
import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';
import './App.css';


import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';
import LandingPage from 'views/LandingPage'
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
