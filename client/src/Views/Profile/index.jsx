import React, { Component } from 'react';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: null
    };
  }

  componentDidMount() {
    console.log('Profile inside', this.props);
    this.setState({
      user: this.props.user,
      loaded: true
    });
  }

  render() {
    return (
      <div>
        {(this.state.loaded && (
          <>
            <h1>Hello</h1>
            <h5>{this.state.user.name}</h5>
            <h5>{this.state.user.email}</h5>
            <img src={this.state.user.picture} alt="..." />
          </>
        )) ||
          ''}
      </div>
    );
  }
}
