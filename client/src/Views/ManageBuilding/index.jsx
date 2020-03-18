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
    this.searchBuilding = this.searchBuilding.bind(this);
  }

  async componentDidMount() {
    const list = await this.searchBuilding(this.state.user._id);
    console.log('This is the slots', list.numberOfApartments);
    this.setState({
      appartments: list.numberOfApartments,
      loaded: true
    });
  }

  async searchBuilding(id) {
    const building = await getBuilding(id);
    console.log('Searching for:', building);
    console.log('building', building);
    return building.data.building;
  }

  render() {
    {
      console.log('Where is the content?', this.state);
    }
    return <div>{(this.state.loaded && <h1>This is manage building</h1>) || ''}</div>;
  }
}
