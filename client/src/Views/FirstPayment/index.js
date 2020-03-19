import React, { Component } from 'react';
//import ProductItem from './../../components/ProductItem';
import { create as createPurchase } from './../../Services/purchase';
import PaymentMethodCreateView from './../../Views/PaymentMethodCreate';
import SingleProduct from './../../Components/SubscriptionPlans'
import { listOfPlans } from './../../Services/otherServices';
import CheckoutView from './../../Views/Checkout'
import './style.scss';

class FirstPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        plans:[],
      cart:[]
    };
    this.handlePurchase = this.handlePurchase.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  updateCart(item) {
    this.setState(previousState => ({
      cart: [...previousState.cart, item]
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


  async handlePurchase() {
    const id = this.props.cart.map(plan => plan._id);
    try {
      await createPurchase(id);
    } catch (error) {
      console.log(error);
    }
  }
  handleCartAddition() {
    this.props.updateCart(this.state.product);
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
 


        <div className="sidebar__item">
        
        <PaymentMethodCreateView />
             
        </div>

        <CheckoutView cart={this.state.cart} updateCart={this.props.updateCart} />
        
      </div>
    );
  }
}

export default FirstPayment;