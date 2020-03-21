import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
//const cors = require('cors');
import { doc as document } from './../../../Services/otherServices';
import TextField from '@material-ui/core/TextField';


export default class CreateDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      doc: null
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
    const { title, description, doc } = this.state;
    try {
      const data = await document({
        title,
        description,
        doc
      });
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
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
      <div className="form__dashboard">
        <h2>Create a New Document!</h2><br />
        <Form onSubmit={this.handleFormSubmission}>
          <Form.Group controlId="title">
            
            <TextField
              className="textfield"
              id="outlined-basic" label="Document Title" variant="outlined"
              type="text"
              placeholder="Title..."
              name="title"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="description">
            
            <TextField
              className="textfield"
              id="outlined-basic" label="Description" variant="outlined"
              type="text"
              as="textarea"
              multiline
              rows="4"
              placeholder="Write here your description..."
              name="description"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="doc">
            
            <Form.Control
              type="file"
              placeholder="Insert the Document"
              name="doc"
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
