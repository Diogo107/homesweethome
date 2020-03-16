import React, { Component } from 'react';
import SingleService from './../../../Components/singlePost';
import './style.scss';

import { listOfservices } from './../../../Services/otherServices';

class ServicesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        services: []
    };
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

  render() {
    
    return (
      <div>
        <div className="post__list">
          {this.state.services.map(service => (
            <SingleService key={service._id} {...service} />
          ))}
        </div>
      </div>
    );
  }
}

export default ServicesView;