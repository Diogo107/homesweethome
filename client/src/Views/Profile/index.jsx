import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.scss';
import { preventContextMenu } from '@fullcalendar/core';
import { updateProfile } from './../../Services/otherServices';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      edit: true,
      name: '',
      email: '',
      phoneNumber: '',
      user: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.props.user.name,
      email: this.props.user.email,
      phoneNumber: this.props.user.phoneNumber,
      user: this.props.user,
      loaded: true
    });
  }

  edit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    console.log(value);
    this.setState({
      [inputName]: value
    });
  }

  updateProfile(event) {
    event.preventDefault();
    const id = this.state.user._id;
    const { name, email, phoneNumber } = this.state;
    updateProfile({ name, email, phoneNumber, id });
    window.location.reload();
  }

  render() {
    return (
      <div className="profile__div">
        {this.state.loaded && this.state.edit && (
          <div>
            <img className="profile__picture" src={this.state.user.picture} alt="profile picture" />
            <h3>Name</h3>
            <p>{this.state.name}</p>
            <h3>Email</h3>
            <p>{this.state.email}</p>
            <h3>Phone Number</h3>
            <p>{this.state.phoneNumber}</p>
          </div>
        )}
        {(this.state.loaded && !this.state.edit && (
          <Form onSubmit={this.updateProfile}>
            <Form.Group>
              <img
                className="profile__picture"
                src={this.state.user.picture}
                alt="profile picture"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Enter name"
                onChange={this.handleInputChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={this.state.phoneNumber}
                placeholder="Enter phone number"
                onChange={this.handleInputChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button type="submit">Update</Button>
          </Form>
        )) ||
          ''}
        <Button onClick={this.edit}>Edit Profile</Button>
      </div>
    );
  }
}
