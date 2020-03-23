import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
//const cors = require('cors');
import TextField from '@material-ui/core/TextField';
import iconDocument from '../../../asset/images/document.png'
import '../../../App.scss'
import {doc} from './../../../Services/doc'


export default class CreateDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      bankAccountName: '',
      nif: 0,
      month:'',
      amount:0,
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
    
    const { title, bankAccountName, nif, month, amount } = this.state;
    try {
      const data = await doc({
        title,
        bankAccountName,
        nif,
        month,
        amount,
        
      });
      console.log("sending data",data, this.state)
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
           <img className="new__icon" src={iconDocument} />
       <div className="form__heading">
        <h4>Create a New Quote!</h4>
        <small>It will appear for evry condominuse to pay this quote!</small>
       </div>
        <Form onSubmit={this.handleFormSubmission}>
          <Form.Group controlId="title">
            
            <TextField
              className="textfield"
              id="outlined-basic" label="title" variant="outlined"
              type="text"
              placeholder="Quotes Payment for example..."
              name="title"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="bankAccountName">
            
            <TextField
              className="textfield"
              id="outlined-basic" label="Bank Account Name" variant="outlined"
              type="text"
              placeholder="Bank Account Name"
              name="bankAccountName"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="NIF">
            
            <TextField
              className="textfield"
              id="outlined-basic" label="NIF" variant="outlined"
              type="text"
              placeholder="NIF"
              name="nif"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="Month">
            
            <TextField
              className="textfield"
              id="outlined-basic" label="Month" variant="outlined"
              type="text"
              placeholder="Month or Months of this payment"
              name="month"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="amount">
            
            <TextField
              className="textfield"
              id="outlined-basic" label="Amount" variant="outlined"
              type="text"
              placeholder="Amount"
              name="amount"
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
