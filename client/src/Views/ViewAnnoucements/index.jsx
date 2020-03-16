import React, { Component } from 'react';
import SingleAnnoucement from './../../Components/SingleAnnoucement';
import './style.scss';

import { listOfAnnoucements } from './../../Services/otherServices';

class AnnoucementsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        annoucements:[]
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
      
    listOfAnnoucements()
      .then(annoucements => {
          console.log(annoucements)
        this.setState({
        annoucements
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
   
    return (
      <div>
        <div className="annoucements__list">
          {this.state.annoucements.map(annoucement => (
            <SingleAnnoucement key={annoucement._id} {...annoucement} />
          ))}
        </div>
      </div>
    );
  }
}

export default AnnoucementsView;