import React, { Component } from 'react';
import SingleDoc from './../../../Components/SingleDoc';
import './style.scss';

import { listOfdocs } from './../../../Services/otherServices';


class DocsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    listOfdocs()
      .then(docs => {
        this.setState({
          docs
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    
    return (
      <div>
        <div className="docs__list">
          {this.state.docs.map(doc => (
            <SingleDoc key={doc._id} {...doc} />
          ))}
        </div>
      </div>
    );
  }
}

export default DocsView;