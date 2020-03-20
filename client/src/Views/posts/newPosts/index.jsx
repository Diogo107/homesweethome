import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
//const cors = require('cors');
import { post } from './../../../Services/otherServices';
import TextField from '@material-ui/core/TextField';
import UploadButton from '../../../Components/UploadButton'

export default class index extends Component {
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
      const data = await post({
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
        <h2>Create a New Post!</h2><br />
        <Form onSubmit={this.handleFormSubmission}>
          <Form.Group controlId="title">
            <TextField
              className="textfield"
              id="outlined-basic" label="Title" variant="outlined"
              type="text"
              name="title"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="description">
            <TextField
              id="outlined-textarea"
              label="Description"
              placeholder="What's app?"
              multiline
              rows="5"
              variant="outlined"
              type="text"
              as="textarea"
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
              onChange={this.handleFileInputChange}
              
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
