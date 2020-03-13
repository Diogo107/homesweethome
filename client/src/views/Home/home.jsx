import React, { Component } from 'react';

class home extends Component {
  render() {
    return (
      <div>
        <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>Name</h1>
          <h1>Sign-in</h1>
          <h1>Sign-up</h1>
        </nav>
        <div>{/* Here goes the image with the button */}</div>
        <div>{/* DIsplay our services */}</div>
        <div>{/* About us */}</div>
      </div>
    );
  }
}

export default home;
