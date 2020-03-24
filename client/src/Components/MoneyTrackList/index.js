import React, { Component } from 'react';
import { getBill, eraseBill } from '../../Services/otherServices';
import TextField from '@material-ui/core/TextField';
import './style.scss';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      bills: []
    };
    this.fetchData = this.fetchData.bind(this);
    this.erase = this.erase.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value
    });
  }
  get filteredServices() {
    const filteredServices = this.state.bills.filter(service => {
      return service.purpose.toLowerCase().includes(this.state.query.toLowerCase());
    });
    return filteredServices;
  }

  render() {
    {
      console.log('this state', this.state.bills);
      console.log('this state', this.state.query);
    }

    return (
      <div className="post__list">
        <h5>Search for specific bill</h5>
        <form className="search_form">
          <TextField
            variant="outlined"
            type="search"
            name="query"
            value={this.state.query}
            onChange={this.handleInputChange}
            placeholder="Search"
          />
        </form>
        {this.filteredServices.map(bill => (
          <div className="announcement__container">
            <div className="announcement__text">
              <h5>
                <strong>{bill.purpose}</strong>
              </h5>
              <h6>
                <small>{bill.amount}€</small>
              </h6>
              {this.props.user.admin && (
                <form onSubmit={this.erase}>
                  <button id={bill._id} className="button__test">
                    Erase
                  </button>
                </form>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
