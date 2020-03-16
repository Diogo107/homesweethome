'use strict';

const { Router } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('./../models/user');
const router = new Router();

router.post('/sign-up', (req, res, next) => {
  const { name, email, phoneNumber, code, passwordHash } = req.body;
  bcryptjs
    .hash(passwordHash, 10)
    .then(hash => {
      return User.create({
        name,
        email,
        phoneNumber,
        code,
        passwordHash: hash
      });
    })
    .then(user => {
      req.session.user = user._id;
      res.json({ user });
    })
    .catch(error => {
      next(error);
    });
});

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

module.exports = router;
