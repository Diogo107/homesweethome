import React, { Component } from 'react';
import { getBuilding } from '../../Services/otherServices';
import { sendEmail } from '../../Services/otherServices';
import { updateBuilding } from '../../Services/otherServices';
import Appartments from './../../Components/AppartmentInputs';

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
    const name = email.target[0].value;
    const numberOfApartments = this.state.appartments;
    const buildingId = this.state.buildingId;
    const firstSlotId = this.state.appartments.filter(user => user.email == name);
    const slotId = firstSlotId[0]._id;
    updateBuilding(numberOfApartments, this.state.buildingId);
    if (name !== this.props.user.email) {
      sendEmail({ name, buildingId, slotId });
    }
  }

  updateEmail(id) {
    const userId = id.target.name;
    const userEmail = id.target.value;
    const arr = this.state.appartments;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id == userId) {
        arr[i].email = userEmail;
      }
    }
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
          </div>
        )) ||
          ''}
      </div>
    );
  }
}
