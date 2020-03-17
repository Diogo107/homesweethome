import React, { Component } from 'react';
import { getBuilding } from '../../Services/otherServices';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: this.props.user
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.searchBuilding = this.searchBuilding.bind(this);
  }

  componentDidMount() {
    this.searchBuilding(this.state.user._id);
  }

  async searchBuilding(id) {
    const building = await getBuilding(id);
    console.log('Im here................', building.data.building);
  }

  render() {
    return (
      <div>
        <h1>This is manage building</h1>
        <div></div>
      </div>
    );
  }
}
