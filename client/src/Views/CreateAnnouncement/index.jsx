import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
//const cors = require('cors');
import { announcement } from './../../Services/otherServices';
import TextField from '@material-ui/core/TextField';
import '../../App.scss'

export default class CreateAnnouncement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      picture: null
    };
    //this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
  }

  //   componentDidMount() {

  //   }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { title, description, picture } = this.state;
    try {
      const data = await announcement({
        title,
        description,
        picture
      });
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  handleFileInputChange(event) {
    console.dir(event.target);

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
      <div className="form__dashboard">
        <h2>Create a New Announcement!</h2><br />
        <Form onSubmit={this.handleFormSubmission}>
          <Form.Group controlId="title">
            
            <TextField
              className="textfield"
              id="outlined-basic" label="Title Announcement" variant="outlined"
              type="text"
              placeholder="Type your Announcement..."
              name="title"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="description">
           
            <TextField
              className="textfield"
              id="outlined-textarea" label="Description" variant="outlined"
              type="text"
              as="textarea"
              multiline
              rows="4"
              placeholder="Write here your description..."
              name="description"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="picture">
            <Form.Control
              type="file"
              placeholder="Insert the image"
              name="picture"
              onChange={this.handleFileInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button className="button__test" type="submit">
            Submit!
          </Button>
        </Form>
      </div>
    );
  }
}
