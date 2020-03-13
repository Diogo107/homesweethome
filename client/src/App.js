import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Home from './views/Home/home';
=======
>>>>>>> 382cac1de20e1c68ff49af84662c37995c426eca

import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Manage your building with us.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
     <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
>>>>>>> 382cac1de20e1c68ff49af84662c37995c426eca
    </div>
  );
}

export default App;
