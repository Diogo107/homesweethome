import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';

export default class DashboardNeighbors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: null
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    });
    console.log('This is the neighbors', this.state);
  }

  fetchData() {
    //getNeighbors(this.props.user._id)
  }

  render() {
    {
      console.log('this is the props', this.props);
    }
    return <div></div>;
  }
}
