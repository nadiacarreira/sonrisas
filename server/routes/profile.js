const express = require('express');
const profileRoutes = express.Router();
const User = require('../models/User');


profileRoutes.get('/:id', (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err)    { return res.json(err).status(500); }
    if (!user) { return res.json(err).status(404); }

    return res.json(user);
  });
});
module.exports = profileRoutes;
