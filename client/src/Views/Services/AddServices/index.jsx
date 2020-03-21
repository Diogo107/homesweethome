import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
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
      <div className="form__dashboard">
        <h2>Add a Services!</h2><br />
        <Form onSubmit={this.handleFormSubmission}>
          <Form.Group controlId="name">
            <TextField
              className="textfield"
              id="outlined-basic" label="Title" variant="outlined"
              type="text"
              placeholder="Title"
              name="name"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="workField">
            <TextField
              className="textfield"
              id="outlined-basic" label="workField" variant="outlined"            
              type="text"
              as="textarea"
              multiline
              rows="4"
              placeholder="Write here your description"
              name="workField"
              onChange={this.handleInputChange}
            />
          </Form.Group>
        
          <Form.Group controlId="price">
            <TextField
              className="textfield"
              id="outlined-basic" label="Price for Hour" variant="outlined"
              type="number"
              name="price"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">€</InputAdornment>,
                    }}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber">
          
            <TextField
              className="textfield"
              id="outlined-basic" label="Phone Number" variant="outlined"
              type="number"
              
              InputProps={{
                startAdornment: <InputAdornment position="start">+351</InputAdornment>,
              }}
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
