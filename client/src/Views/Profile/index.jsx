import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.scss';
import { preventContextMenu } from '@fullcalendar/core';
import { updateProfile } from './../../Services/otherServices';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

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
            <div className="profile__details">
            <h5>Name</h5>
            <p>{this.state.name}</p>
            <h5>Email</h5>
            <p>{this.state.email}</p>
            <h5>Phone Number</h5>
            <p>{this.state.phoneNumber}</p>
            </div>
            <div><Button onClick={this.edit} className="button__test">Edit Profile</Button></div>
            <div><Button href="/first-payment" className="button__test">Payment</Button></div>
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
              <TextField
                className="textfield"
                id="outlined-basic" label="Name" variant="outlined"
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Enter name"
                onChange={this.handleInputChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
             
              <TextField
                className="textfield"
                id="outlined-basic" label="Email" variant="outlined"
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
              
              <TextField
                className="textfield"
                id="outlined-basic" label="Phone Number" variant="outlined"
                type="text"
                name="phoneNumber"
                value={this.state.phoneNumber}
                placeholder="Enter phone number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">+351</InputAdornment>,
                }}
                onChange={this.handleInputChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button className="button__test" type="submit">Update</Button>
          </Form>
        )) ||
          ''}
        
      </div>
    );
  }
}
