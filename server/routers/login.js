<<<<<<< HEAD
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let models = require('./../models');
let User = mongoose.model('User');
=======
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let models = require("./../models");
let User = mongoose.model("User");
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7

// ----------------------------------------
// Passport
// ----------------------------------------

<<<<<<< HEAD
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
=======
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7

// ----------------------------------------
// Routes for /login
// ----------------------------------------

router.post(
<<<<<<< HEAD
  '/',
  passport.authenticate('local', (req, res, next) => {
=======
  "/",
  passport.authenticate("local", (req, res, next) => {
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
    try {
      res.json(req.user);
    } catch (e) {
      next(e);
    }
  })
);

module.exports = router;
