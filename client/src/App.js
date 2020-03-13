import React from 'react';

import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
    </div>
  );
}

export default App;
