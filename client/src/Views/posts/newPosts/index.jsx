import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
//const cors = require('cors');

const instance = axios.create({
  baseURL: 'http://localhost:3020/api'
});

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
      //  picture: ''
    };
    //this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    //this.handleFileInputChange = this.handleFileInputChange.bind(this);
  }

  //   componentDidMount() {

  //   }

  async handleFormSubmission(event) {
    console.log('haha', event);
    const { title, description, picture } = this.state;
    instance.post(
      '/post',
      { title, description }

      //  picture
    );
  }
  handleFileInputChange(event) {
    const { name, files } = event.target;
    this.setState({
      [name]: files[0]
    });
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
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows="3"
              placeholder="Write here your description"
              name="description"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="picture">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              type="file"
              placeholder="Insert the image"
              name="picture"
              //  onChange={this.handleFileInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
