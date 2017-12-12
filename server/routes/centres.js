const express = require('express');
const centres = express.Router();
const Centre = require('../models/Centre');

// list centres
centres.get('/', (req, res, next) => {
  Centre.find({}, (err, centres) => {
    if (err) { return res.json(err).status(500); }

    return res.json(centres);
  });
});

// id centres
centres.get('/:id', (req, res, next) => {
  Centre.findById(req.params.id, (err, centres) => {
    if (err)    { return res.json(err).status(500); }
    if (!centres) { return res.json(err).status(404); }

    return res.json(centres);
  });
});

// new centres
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

// edit centres
// centres.put('/edit-centres/:id', (req, res, next) => {
//   const {name, direction, constructionYear, cell, countNumber}= req.body;
//   const updates = {name, direction, constructionYear, cell, countNumber};
// Kid.findByIdAndUpdate(req.params.id, updates, {new:true})
// .then(p => res.status(200).json(p))
// .catch(e => res.status(500).json({error:e.message}));
// });
//



module.exports = centres;
