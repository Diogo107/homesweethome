import React, { Component } from 'react';
import SingleService from './../../../Components/SingleService';
import './style.scss';

import { listOfservices } from './../../../Services/otherServices';

class ServicesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        services: [],
        query:''
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    listOfservices()
      .then(services => {
        this.setState({
            services
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange(event){
    const value = event.target.value;
    const inputName = event.target.name;
    this.setState({
      [inputName]:value
    })
  }
get filteredServices(){
  const filteredServices = this.state.services.filter(service =>{
    return service.workField.toLowerCase().includes(this.state.query.toLowerCase());
  })
  return filteredServices
}



  render() {
    console.log('services',this.state.services)
    return (
      <div>
        <form>
          <input type='search' name='query' value={this.state.query} onChange={this.handleInputChange} placeholder="Search" />
        </form>
        <div>
          {this.filteredServices.map(service => (
            <SingleService key={service._id} {...service} />
          ))}
        </div>
      </div>
    );
  }
}

export default ServicesView;