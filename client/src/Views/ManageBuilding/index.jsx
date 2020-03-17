import React, { Component } from 'react';
import { getBuilding } from '../../Services/otherServices';
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
      appartments: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.searchBuilding = this.searchBuilding.bind(this);
    this.addAparment = this.addAparment.bind(this);
  }

  componentDidMount() {
    this.searchBuilding(this.state.user._id);
  }

  async searchBuilding(id) {
    const building = await getBuilding(id);
    console.log('Im here................', building.data.building);
  }

  addAparment(event) {
    event.preventDefault();
    console.log('id', event.target[0].value);
    const appartment = event;
  }

  render() {
    return (
      <div>
        <h1>This is manage building</h1>
        <Form onSubmit={this.addAparment}>
          <Label>Insert Appartment</Label>
          <Input type="text" />
          <Button type="submit">Add</Button>
        </Form>
      </div>
    );
  }
}
