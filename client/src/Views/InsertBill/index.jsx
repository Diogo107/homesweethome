import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Bill } from './../../Services/otherServices';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import iconBilling from '../../asset/images/billing.png';
import '../../App.scss';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 1000000),
      type: false,
      purpose: '',
      amount: '',
      month: '',
      year: '',
      description: '',
      file: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    this.type = this.type.bind(this);
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const buildingId = this.props.user.buildingId;
    const { id, type, purpose, amount, month, year, description, file } = this.state;
    console.log('this is sending', {
      buildingId,
      id,
      type,
      purpose,
      amount,
      month,
      year,
      description,
      file
    });
    try {
      const data = await Bill({
        buildingId,
        id,
        type,
        purpose,
        amount,
        month,
        year,
        description,
        file
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  type() {
    this.setState({
      type: !this.state.type,
      purpose: ''
    });
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
    {
      console.log('looking for user', this.props);
    }
    return (
      <div className="form__dashboard">
        <img className="new__icon" src={iconBilling} />
        <div className="form__heading">
          <h4>Insert a New Bill</h4>
          <small>It will appear in the dashboard for everyone!</small>
        </div>
        <Form onSubmit={this.handleFormSubmission}>
          <Button onClick={this.type}>{(this.state.type && 'Income') || 'Expense'}</Button>
          {this.state.type && (
            <Form.Group controlId="title">
              <Select
                className="textfield"
                id="outlined-basic"
                label="Kind Of working?"
                variant="outlined"
                type="select"
                placeholder="Title"
                name="purpose"
                required
                onChange={this.handleInputChange}
              >
                <option value="Monthly Payment">Monthly Payment</option>
                <option value="Other">Other</option>
              </Select>
            </Form.Group>
          )}
          {!this.state.type && (
            <Form.Group controlId="title">
              <Select
                className="textfield"
                id="outlined-basic"
                label="Kind Of working?"
                variant="outlined"
                type="select"
                placeholder="Title"
                name="purpose"
                required
                onChange={this.handleInputChange}
              >
                <option value="Electricity">Electricity</option>
                <option value="Water">Water</option>
                <option value="Internet">Internet</option>
                <option value="Stair Cleaning">Stair Cleaning</option>
                <option value="Gardening">Gardening</option>
                <option value="Outside Painting">Outside Painting</option>
                <option value="Inside Painting">Inside Painting</option>
                <option value="Fire Extinguishers">Fire Extinguishers</option>
                <option value="Antennas Maintenance">Antennas Maintenance</option>
                <option value="Door Keeper">Door Keeper</option>
                <option value="Plumbing Maintenance">Plumbing Maintenance</option>
                <option value="Administrative Costs">Administrative Costs</option>
                <option value="Insurance">Insurance</option>
                <option value="Elevator Maintenance">Elevator Maintenance</option>
                <option value="Gas">Gas</option>
                <option value="Other">Other</option>
              </Select>
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          )}

          <Form.Group controlId="title">
            <TextField
              className="textfield"
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              type="range "
              step="0.01"
              placeholder="Enter a Number"
              name="amount"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="month">
            <TextField
              className="textfield"
              id="outlined-textarea"
              label="Month"
              variant="outlined"
              inputProps={{ min: '1', max: '12', step: '1' }}
              required
              label="Month"
              type="number"
              placeholder="Write here your description"
              name="month"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="year">
            <TextField
              className="textfield"
              id="outlined-textarea"
              label="Year"
              variant="outlined"
              inputProps={{ min: '2000', max: '2020', step: '1' }}
              label="Year"
              required
              type="number"
              placeholder="Write here your description"
              name="year"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <TextField
              className="textfield"
              id="outlined-textarea"
              label="Title"
              variant="outlined"
              label="Description"
              multiline
              rows="4"
              type="text"
              as="textarea"
              placeholder="Write here your description"
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
