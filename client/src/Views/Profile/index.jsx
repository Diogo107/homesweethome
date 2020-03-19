import React, { Component } from 'react';
import './style.scss'

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
      <div className="profile__div">
        {(this.state.loaded && (
          <div> 
            <img className="profile__picture" src={this.state.user.picture} alt="profile picture" />
            <h1>Hello</h1>
            <h5>{this.state.user.email}</h5>
          </div>
        )) ||
          ''}
      </div>
    );
  }
}
