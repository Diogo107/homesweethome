import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { post } from './../../Services/otherServices';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import iconBilling from '../../asset/images/billing.png';
import '../../App.scss';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 1000000),
      type: '',
      purpose: '',
      amount: '',
      description: '',
      file: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
  }

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
    console.log('Getting', value, inputName);

    this.setState({
      [inputName]: value
    });
    console.log('Im here', this.state);
  }

  render() {
    return (
      <div className="form__dashboard">
        <img className="new__icon" src={iconBilling} />
        <div className="form__heading">
          <h4>Insert a New Bill</h4>
          <small>It will appear in the dashboard for everyone!</small>
        </div>
        <Form onSubmit={this.handleFormSubmission}>
          <Form.Group controlId="title">
            <Select
              className="textfield"
              id="outlined-basic"
              label="Kind Of working?"
              variant="outlined"
              type="select"
              placeholder="Title"
              name="purpose"
              onChange={this.handleInputChange}
            >
              <option value="this">This</option>
            </Select>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="title">
            <TextField
              className="textfield"
              id="outlined-basic"
              label="Kind Of working?"
              variant="outlined"
              type="select"
              placeholder="Title"
              name="title"
              onChange={this.handleInputChange}
            />
            <Form.Text className="text-muted"></Form.Text>
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
