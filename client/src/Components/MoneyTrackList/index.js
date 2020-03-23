import React, { Component } from 'react';
import { getBill, eraseBill } from '../../Services/otherServices';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: []
    };
    this.fetchData = this.fetchData.bind(this);
    this.erase = this.erase.bind(this);
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

  async erase(event) {
    event.preventDefault();
    const id = event.target[0].id;
    await eraseBill(id);
    this.fetchData();
  }

  render() {
    {
      console.log('This is the money', this.props);
    }
    return (
      <div>
        {this.state.bills.map(bill => (
          <div>
            {console.log('bill', bill)}
            <h3>{bill.purpose}</h3>
            <h3>{bill.amount}€</h3>
            <p>{bill.description}</p>
            {this.props.user.admin && (
              <form onSubmit={this.erase}>
                <button id={bill._id}>Erase</button>
              </form>
            )}
          </div>
        ))}{' '}
      </div>
    );
  }
}
