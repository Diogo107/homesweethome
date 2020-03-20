import React, { Component } from 'react';
//import ProductItem from './../../components/ProductItem';
//import { create as createPurchase } from './../../Services/purchase';
import addToCart from './../../Services/purchase'
import PaymentMethodCreateView from './../../Views/PaymentMethodCreate';
import SingleProduct from './../../Components/SubscriptionPlans'
import { listOfPlans } from './../../Services/otherServices';

import './style.scss';

class FirstPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        plans:[],
      cart:''
    };

    this.updateCart = this.updateCart.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  updateCart(item) {
    this.setState(() => ({
      cart: item
    }));
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
      
    listOfPlans()
      .then(plans => {
          console.log('do we have', plans)
        this.setState({
        plans
        });
      })
      .catch(error => {
        console.log(error);
      });
  }


  handleCartAddition() {
    this.props.updateCart(this.state.plan);
  }
  async handlePurchase() {
    const id = this.props.cart
    try {
      await addToCart(id);
      this.props.history.push('/')
      } catch (error) {
      console.log(error);
    }
  }

  render() {
      console.log('herererere',this.state)
      console.log('now', this.props.updateCart)
    return (
      <div>
       <div>
       {this.state.plans.map(plan => (
           
             <SingleProduct updateCart={this.updateCart} key={plan._id} {...plan} />))} 
       
        </div>
 


        <div>
        
        <PaymentMethodCreateView />
             
        </div>

      
        <button onClick={this.handlePurchase}>Save this options</button>
      </div>
    );
  }
}

export default FirstPayment;