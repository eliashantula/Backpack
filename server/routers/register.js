<<<<<<< HEAD
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var models = require('./../models');
var User = mongoose.model('User');
=======
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
var models = require("./../models");
var User = mongoose.model("User");
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7

// ----------------------------------------
// Routes for /register
// ----------------------------------------

<<<<<<< HEAD
router.post('/', async (req, res, next) => {
=======
router.post("/", async (req, res, next) => {
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
  try {
    let { fname, lname, username, email, password } = req.body;
    let user = await new User({
      username,
      email,
      password,
      pouches: []
    });
    user = await User.save();
    if (!user) {
      res.send(500);
    }
    res.json(user);
  } catch (e) {
    res.status(500);
    next(e);
  }
});

module.exports = router;
