const express = require('express');
const centres = express.Router();
const Centre = require('../models/Centre');


centres.get('/', (req, res, next) => {
  Centre.find({}, (err, centres) => {
    if (err) { return res.json(err).status(500); }

    return res.json(centres);
  });
});

centres.get('/:id', (req, res, next) => {
  Centre.findById(req.params.id, (err, centres) => {
    if (err)    { return res.json(err).status(500); }
    if (!centres) { return res.json(err).status(404); }

    return res.json(centres);
  });
});

centres.post('/centres', (req, res, next) => {
  const newcentres = new Centre ({
    name: req.body.name,
    direction: req.body.direction,
    constructionYear: req.body.constructionYear,
    cell: req.body.cell,
    countNumber: req.body.countNumber
  });

console.log(newcentres);
  newcentres.save( (err) => {
    if (err)             { return res.status(500).json(err) }
    if (newcentres.errors) { return res.status(400).json(newcentres) }
                           return res.json(newcentres);
  });
});


module.exports = centres;
