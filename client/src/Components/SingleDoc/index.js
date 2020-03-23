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
}}> <img className="new__icon" src={iconBilling} /></Link>
  <h1>{this.props.title}</h1>
  <h5>{this.props.creatorName}</h5>
  <h5>{this.props.timestamp}</h5>
  
      </div>
        
      
    );
 
}
}


export default SingleDoc;



