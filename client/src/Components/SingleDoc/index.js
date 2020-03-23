import React, { Component } from 'react';
import iconBilling from '../../asset/images/billing.png'
import PdfViews from './../../Views/PdfView'

import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import './style.scss';
import { render } from 'react-dom';

class SingleDoc extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){
console.log('singleview prosp',this.props)
  
  return (
    <div className="announcement__container">
      <div>
      <Link to={{
        pathname: '/pdfview',
  state: {
    title:this.props.title,
    bankAccountName:this.props.bankAccountName,
    nif:this.props.nif,
    creator: this.props.creator,
    buildingId: this.props.buildingId,
    month:this.props.month,
    amount:this.props.amount

  }
}}>     <img className="annoucement__image" src={iconBilling} alt={this.props.title} /></Link>
      </div>
      <div className="announcement__text">
        <strong>{this.props.title}</strong>
        <small>{this.props.creatorName}</small>
        <small>{this.props.timestamp}</small>
 
      </div>
    </div>
        
      
    );
 
}
}


export default SingleDoc;



