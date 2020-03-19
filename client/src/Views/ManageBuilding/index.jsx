import React, { Component } from 'react';
import { getBuilding } from '../../Services/otherServices';
import { sendEmail } from '../../Services/otherServices';
import { updateBuilding } from '../../Services/otherServices';
import Appartments from './../../Components/AppartmentInputs';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label
} from 'reactstrap';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: this.props.user,
      buildingId: '',
      appartments: []
    };
    this.searchBuilding = this.searchBuilding.bind(this);
    this.sendInvite = this.sendInvite.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  async componentDidMount() {
    const list = await this.searchBuilding(this.state.user._id);
    this.setState({
      appartments: list.numberOfApartments,
      buildingId: list._id,
      loaded: true
    });
  }

  async searchBuilding(id) {
    const building = await getBuilding(id);
    return building.data.building;
  }

  sendInvite(email) {
    email.preventDefault();
    console.log('this is the final attempt', this.state);
    console.log('This is a friend of mine', this.state.appartments);
    console.log('Hello from the send Email function', email.target[0].value);
    const name = email.target[0].value;
    const numberOfApartments = this.state.appartments;
    updateBuilding(numberOfApartments, this.state.buildingId);
    //sendEmail({ name });
  }

  updateEmail(id) {
    console.log('This is a friend of mine', id.target.name);
    const userId = id.target.name;
    const userEmail = id.target.value;
    const arr = this.state.appartments;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id == userId) {
        console.log(arr[i]._id);
        arr[i].email = userEmail;
      }
    }
    console.log('this is arr', arr);
    this.setState({
      appartments: arr
    });
  }

  render() {
    return (
      <div>
        {(this.state.loaded && (
          <div>
            <Appartments
              appartments={this.state.appartments}
              sendInvite={this.sendInvite}
              updateEmail={this.updateEmail}
            />
            {this.state.appartments.map(slot => (
              <Form onSubmit={this.sendInvite}>
                <Label>{slot.slot}</Label>
                <Input name={slot._id} placeholder={slot.slot} type="text" />
                <Button type="submit">Send Invite</Button>
              </Form>
            ))}
          </div>
        )) ||
          ''}
      </div>
    );
  }
}
