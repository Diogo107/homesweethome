'use strict';

const express = require('express');
const { Router } = express;

const router = new Router();
const stripe = require('./../stripe-configure');

const Purchase = require('./../models/purchase');
const Product = require('./../models/product');
const PaymentMethod = require('./../models/payment-method');
const Cart = require('./../models/cart');

router.get('/list', async (req, res, next) => {
  try {
    const purchases = await Purchase.find({ user: req.user._id });
    res.json({ purchases });
  } catch (error) {
    next(error);
  }
});

router.post('/create', async (req, res, next) => {
  const { products: productIds } = req.body;
  
  try {
    const products = await Product.find({ _id: productIds });
    console.log('inside server', products )
    const amount = products.reduce((total, product) => total + product.price, 0);
    console.log('inside server', amount )
    const currency = 'EUR';

    const paymentMethod = await PaymentMethod.findOne({ owner: req.user._id });
    const purchase = await Purchase.create({
      user: req.user._id,
      products: productIds,
      price: { amount, currency },
      charged: false
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      customer: req.user.stripeCustomerId,
      payment_method: paymentMethod.token,
      error_on_requires_action: true,
      confirm: true,
      save_payment_method: true
    });

    await purchase.update({ paymentIntent: paymentIntent.id, charged: true });

    res.json({ purchase });
  } catch (error) {
    console.log(error);
    next(error);
  }
});


router.post('/cart', async (req, res, next) => {
  const { products: productIds } = req.body;
  let user = req.user._id
  try {
    const products = await Product.find({ _id: productIds });
    Cart.create({
      user,
      products : productIds

    })
    .then(cart => {
      res.json({ cart })})
  } catch (error) {
    console.log(error);
    next(error);
  }
});


module.exports = router;