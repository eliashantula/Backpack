<<<<<<< HEAD
let express = require('express');
=======
let express = require("express");
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
let router = express.Router();

// ----------------------------------------
// Route for /logout
// ----------------------------------------

const onLogout = async (req, res) => {
  req.logout();
  req.session.passport.user = null;
  res.status(200).send();
};

<<<<<<< HEAD
router.get('/', onLogout);
=======
router.get("/", onLogout);
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7

module.exports = router;
