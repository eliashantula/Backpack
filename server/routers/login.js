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

<<<<<<< HEAD
router.post('/', passport.authenticate('local'), function(req, res) {
  console.log('callback called');
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  return res.json(req.user);
});
=======
router.post(
<<<<<<< HEAD
<<<<<<< HEAD
  '/',
  passport.authenticate('local', (req, res, next) => {
=======
  "/",
  passport.authenticate("local", (req, res, next) => {
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
=======
  "/",
  passport.authenticate("local", (req, res, next) => {
>>>>>>> dev
    try {
      res.json(req.user);
    } catch (e) {
      next(e);
    }
  })
);
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7

module.exports = router;
