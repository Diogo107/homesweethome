'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');
const Annoucement = require('./../models/announcement');
const uploader = require('./../multer-configure.js');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.json({});
});

router.post('/annoucement', uploader.single('picture'), (req, res, next) => {
  const { title, description } = req.body;
  let url;

  if (req.file) {
    url = req.file.url;
  }

  Annoucement.create({
    title,
    description,
    picture: url
    
  })
    .then(annoucement => {
      res.json({ annoucement });
    })
    .catch(error => {
      next(error);
    });
});
module.exports = router;
