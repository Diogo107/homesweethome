import React, { Component } from 'react';
import { getBill } from './../../Services/otherServices';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const bills = await getBill();
    this.setState({
      bills
    });
    console.log('this is bills', bills);
  }

  render() {
    return (
      <div>
        {this.state.bills.map(bill => (
          <div>
            {console.log('bill', bill)}
            <h1>{bill.purpose}</h1>
            <h1>{bill.amount}</h1>
          </div>
        ))}{' '}
      </div>
    );
  }
}
