'use strict';

const { Router } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('./../models/user');
const stripe = require('./../stripe-configure');
const uploader = require('./../multer-configure.js');

const router = new Router();

router.post('/sign-up', async (req, res, next) => {
  const { name, email, phoneNumber, code, passwordHash,admin, payment,createdAt,blocked,paymentMethods } = req.body;
  let BuildingId;
  if (req.body.buildingId) BuildingId = req.body.buildingId;
  try {
    const customer = await stripe.customers.create();
    const hash = await bcryptjs.hash(passwordHash, 10);
    const user = await User.create({
      name,
      email,
      phoneNumber,
      code,
      passwordHash: hash,
      admin,
      stripeCustomerId: customer.id,
      ...(BuildingId ? { BuildingId } : {}),
      payment,
      createdAt,
      paymentMethods,
      blocked
    })
    req.session.user = user._id;
    res.json({ user });
  }
   catch (error) {
    next(error);
  }}    
);






router.post('/sign-in', (req, res, next) => {
  let user;
  const { email, passwordHash } = req.body;
  User.findOne({ email })
    .then(document => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(passwordHash, user.passwordHash);
      }
    })
    .then(result => {
      if (result) {
        req.session.user = user._id;
        console.log('req.session.user', req.session.user);
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch(error => {
      next(error);
    });
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

router.get('/user-information', (req, res, next) => {
  console.log('Hello from the server');
  res.json({ user: req.user || null });
});

router.patch('/user-information', uploader.single('picture'), async (req, res, next) => {
  const { buildingId} = req.body;
  
  if (req.file) picture = req.file.url;
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
         buildingId
        
      },
      
    );
    res.json({ user });
  } catch (error) {
    next(error);
  }
});
router.patch('/paymentMethods', async (req, res, next) => {
 
  const paymentMethods = true 
  console.log('this is thew req.body', req.body)
  
  
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { paymentMethods
        },
      
    );
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

