let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var models = require('./../models');
var User = mongoose.model('User');

router.get('/', async (req, res, next) => {
  try {
    let user = await User.findOne({ _id: req.session.user._id });
    if (!user) {
      res.send(404);
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let user = await User.findOne({ _id: req.params.id });
    if (!user) {
      res.send(404);
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
});

<<<<<<< HEAD
router.delete('/:id', async (req, res, next) => {
=======
router.delete("/:id", async (req, res, next) => {
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
  try {
    let user = await User.findById(req.params.id);
    let pouches = await Pouch.find()
      .where('_id')
      .in(user.pouches)
      .remove();
    if (pouches) {
      res.send(500);
    }
    user = await User.findByIdAndRemove(req.params.id);
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
