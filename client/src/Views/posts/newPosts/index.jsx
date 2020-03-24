import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
//const cors = require('cors');
import { post } from './../../../Services/otherServices';
import TextField from '@material-ui/core/TextField';
import iconPost from '../../../asset/images/post.png'
import UploadButtons from '../../../Components/UploadButton'

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

    const { files } = event.target;


    this.setState({
      picture: files[0]
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
         <img className="new__icon" src={iconPost} />
        <div className="form__heading">
          <h4>Create a New Post</h4>
          <small>It will appear in the dashboard for everyone!</small>
        </div>
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
            
           
          <UploadButtons imageChange={this.handleFileInputChange}/>
            
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
