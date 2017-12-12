const express = require('express');
const kids = express.Router();
const Kid = require('../models/Kid');


// list kids
kids.get('/', (req, res, next) => {
  Kid.find({}, (err, kids) => {
    if (err) { return res.json(err).status(500); }

    return res.json(kids);
  });
});

// id kids
kids.get('/:id', (req, res, next) => {
  Kid.findById(req.params.id, (err, kids) => {
    if (err)    { return res.json(err).status(500); }
    if (!kids) { return res.json(err).status(404); }

    return res.json(kids);
  });
});

// new kids
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

// edit kids
kids.put('/:id', (req, res) => {
  console.log('this is my id: ' + req.params.id)
  const {photo, name, age, about} = req.body;
  const updates = {photo, name, age, about};

  Kid.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

// delete kids
kids.delete('/delete-heroe/:id', (req, res, next) => {
  console.log("delete heroe")
  let id = req.params.id;
  console.log("entro en el back, delete kid");
  console.log(id);

  Kid.findByIdAndRemove(id)
    .then(o => res.status(200).json(o))
    .catch(e => res.status(500).json(e));
});



module.exports = kids;
