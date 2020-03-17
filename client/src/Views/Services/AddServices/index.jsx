import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
//const cors = require('cors');
import { services } from './../../../Services/otherServices';

export default class CreateServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      workField: '',
      price: '',
      phoneNumber: ''
    };
    //this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    
  }

  //   componentDidMount() {

  //   }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { name, workField, price, phoneNumber } = this.state;
    try {
      const data = await services({
        name,
        workField,
        price,
        phoneNumber
      });
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;

    this.setState({
      [inputName]: value
    });
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmission}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="name"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="workField">
            <Form.Label>workField</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows="3"
              placeholder="Write here your description"
              name="workField"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Price for hour"
              name="price"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
