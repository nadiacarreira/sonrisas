const express = require('express');
const kids = express.Router();
const Kid = require('../models/Kid');


kids.get('/', (req, res, next) => {
  Kid.find({}, (err, kids) => {
    if (err) { return res.json(err).status(500); }

    return res.json(kids);
  });
});

kids.get('/:id', (req, res, next) => {
  Kid.findById(req.params.id, (err, kids) => {
    if (err)    { return res.json(err).status(500); }
    if (!kids) { return res.json(err).status(404); }

    return res.json(kids);
  });
});


kids.post('/kids', (req, res, next) => {
  const newkids = new Kid({
    photo: req.body.photo,
    name: req.body.name,
    age:req.body.age,
    about:req.body.about
  });
console.log(newkids);
  newkids.save( (err) => {
    if (err)             { return res.status(500).json(err) }
    if (newkids.errors) { return res.status(400).json(newkids) }
                           return res.json(newkids);
  });
});

module.exports = kids;
