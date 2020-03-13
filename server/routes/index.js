'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');
const uploader = require('./../multer-configure.js');
const Annoucement = require('./../models/announcement');
const Building = require('./../models/building');
const Post = require('./../models/post');
const Doc = require('./../models/doc');

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
    picture: url,
    creator: req.user._id
  })
    .then(annoucement => {
      res.json({ annoucement });
    })
    .catch(error => {
      next(error);
    });
});
module.exports = router;

router.get('/annoucement', (req, res, next) => {
  Annoucement.find()
    .sort({ timestamp: 'descending' })
    .then(annoucements => {
      res.json({ annoucements });
      console.log({ annoucements }, '123');
    })
    .catch(error => {
      next(error);
    });
});

router.post('/building', uploader.single('picture'), (req, res, next) => {
  const { name, address, admin, residents } = req.body;
  let url;

  if (req.file) {
    url = req.file.url;
  }

  Building.create({
    name,
    address,
    admin,
    residents,
    picture: url
  })
    .then(building => {
      res.json({ building });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/building', (req, res, next) => {
  Building.findOne()
    // this id is the buiding to find it
    .then(building => {
      res.json({ building });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/doc', uploader.single('doc'), (req, res, next) => {
  const { title, description } = req.body;
  let url;

  if (req.file) {
    url = req.file.url;
  }

  Doc.create({
    title,
    description,
    doc: url,
    creator: req.user._id
  })
    .then(doc => {
      res.json({ doc });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/doc', (req, res, next) => {
  Doc.find()
    .sort({ timestamp: 'descending' })
    .then(doc => {
      res.json({ doc });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/post', uploader.single('picture'), (req, res, next) => {
  const { title, description } = req.body;
  let url;

  if (req.file) {
    url = req.file.url;
  }

  Post.create({
    title,
    description,
    picture: url,
    creator: req.user._id
  })
    .then(post => {
      res.json({ post });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/post', (req, res, next) => {
  Post.find()
    .sort({ timestamp: 'descending' })
    .then(posts => {
      res.json({ posts });
    })
    .catch(error => {
      next(error);
    });
});
