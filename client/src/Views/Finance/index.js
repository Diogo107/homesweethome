import React, { Component } from 'react';
import MoneyTrack from '../../Components/MoneyTrackList';
import MoneyGraph from '../../Components/MoneyTrackGraph';

export default class index extends Component {
  render() {
    return (
      <div>
        <MoneyGraph user={this.props.user} />
        <MoneyTrack user={this.props.user} />
      </div>
    );
  }
}
