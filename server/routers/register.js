<<<<<<< HEAD
<<<<<<< HEAD
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var models = require('./../models');
var User = mongoose.model('User');
=======
=======
>>>>>>> dev
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
var models = require("./../models");
var User = mongoose.model("User");
<<<<<<< HEAD
=======
<<<<<<< HEAD
var Pouch = mongoose.model("Pouch");
=======
>>>>>>> dev
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7

// ----------------------------------------
// Routes for /register
// ----------------------------------------

<<<<<<< HEAD
<<<<<<< HEAD
router.post('/', async (req, res, next) => {
=======
router.post("/", async (req, res, next) => {
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
=======
router.post("/", async (req, res, next) => {
>>>>>>> dev
  try {
<<<<<<< HEAD
    let { username, email, password } = req.body;
=======
    let { fname, lname, username, email, password } = req.body;
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
    let user = await new User({
      username,
      email,
      password,
      pouches: []
    });
<<<<<<< HEAD

    let unsortedItems = await new Pouch({
      name: "Unsorted Items",
      itemIds: [],
      ownerId: user._id
    });

    unsortedItems = await unsortedItems.save();
    user.pouches.push(unsortedItems);
    user = await user.save();

=======
    user = await User.save();
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
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
