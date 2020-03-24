import React, { Component } from 'react';

import formatPrice from './../../Utilities/format-price';
import {uniquePlan} from './../../Services/otherServices'

import './style.scss';

class SingleProduct extends Component{
  constructor(props){
    super(props)
  this.state = {
    product: null
  };
  this.handleCartAddition = this.handleCartAddition.bind(this);
}
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const id = this.props._id;
    
    uniquePlan(id)
      .then(product => {
        this.setState({ product });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleCartAddition() {
    this.props.updateCart(this.state.product);
  }
  render(){
    console.log('this is the id', this.props)
  return (
    <div className='plan__container'>
      <div className='plan__text'>
        <h1>{this.props.name}</h1>
  <h4>Just for {formatPrice(this.props.price)} €</h4>
  <button className="button__plan" onClick={this.handleCartAddition}>Subscribe this</button>
  </div>
        </div>
        
      
    );}
};

export default SingleProduct;
