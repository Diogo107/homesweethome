'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');
const uploader = require('./../multer-configure.js');
const Annoucement = require('./../models/announcement');
const Building = require('./../models/building');
const Post = require('./../models/post');
const Doc = require('./../models/doc');
const Calendar = require('../models/calendar.js');
const Services = require('./../models/services');

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
  const numberOfApartments = JSON.parse(req.body.numberOfApartments);
  const { name, address, numberOfFloors, admin, picture } = req.body;
  let url;
  if (req.file) {
    url = req.file.url;
  }
  Building.create({
    name,
    address,
    numberOfFloors,
    admin,
    numberOfApartments,
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
  return (
    Building.findOne()
      // this id is the buiding to find it
      .then(building => {
        console.log('Searching for:', building);
        res.json({ building });
      })
      .catch(error => {
        next(error);
      })
  );
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
  console.log('body', req.body);
  console.log('file', req.file);
  let url;

  if (req.file) {
    url = req.file.url;
  }

  Post.create({
    title,
    description,
    picture: url
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

router.post('/services', (req, res, next) => {
  const { name, workField, price, phoneNumber } = req.body;

  Services.create({
    name,
    workField,
    price,
    phoneNumber
  })
    .then(services => {
      res.json({ services });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/services', (req, res, next) => {
  Services.find()
    .sort({ timestamp: 'descending' })
    .then(services => {
      res.json({ services });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/calendar', (req, res, next) => {
  const { title, start } = req.body;

  Calendar.create({
    title,
    start
  })
    .then(calendar => {
      res.json({ calendar });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/calendar', (req, res, next) => {
  Calendar.find()
    .then(calendar => {
      res.json({ calendar });
    })
    .catch(error => {
      next(error);
    });
});
