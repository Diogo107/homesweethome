import React, { Component } from 'react';
import { getBuilding, addSlot } from '../../Services/otherServices';
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
      appartments: [],
      newAppartment: ''
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.searchBuilding = this.searchBuilding.bind(this);
    this.addAparment = this.addAparment.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  async componentDidMount() {
    const list = await this.searchBuilding(this.state.user._id);
    console.log(list.numberOfApartments);
    this.setState({
      appartments: list.numberOfApartments
    });
  }

  async searchBuilding(id) {
    const building = await getBuilding(id);
    console.log(building);
    return building.data.building;
  }

  addAparment(event) {
    event.preventDefault();
    console.log('id', event.target[0].value);
    const appartmentName = event.target[0].value;
    if (!appartmentName) return;
    const appartment = {
      id: Math.floor(Math.random() * 10000000),
      name: appartmentName
    };
    console.log(appartment);
    try {
      const slot = addSlot(appartment);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h1>This is manage building</h1>
        <Form onSubmit={this.addAparment}>
          <Label>Insert Appartment</Label>
          <Input
            type="text"
            value={this.state.newAppartment}
            name="newAppartment"
            placeholder="Add new appartment..."
            onChange={this.handleInputChange}
          />
          <Button type="submit">Add</Button>
        </Form>
      </div>
    );
  }
}
