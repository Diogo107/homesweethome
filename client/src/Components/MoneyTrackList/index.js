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
      <div className="post__list">
        {this.state.bills.map(bill => (
          <div className="announcement__container">
            <div className="announcement__text">
              <strong>{bill.purpose}</strong>
              <small>{bill.amount}€</small>
              <small>{bill.description}</small>
              {this.props.user.admin && (
                <form onSubmit={this.erase}>
                  <button id={bill._id}>Erase</button>
                </form>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
