const express = require("express");
const app = express();

// ----------------------------------------
//Mongoose connection
// ----------------------------------------
var mongoose = require("mongoose");
var bluebird = require("bluebird");
mongoose.Promise = bluebird;
const mongo = require("./mongo")();

// ----------------------------------------
// Model Schemas
// ----------------------------------------
<<<<<<< HEAD
<<<<<<< HEAD
const User = require('./models');
=======
const { User } = require("./models");
>>>>>>> dev
=======

const User = require("./models");
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7

// ----------------------------------------
// ENV
// ----------------------------------------
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// ----------------------------------------
// Body Parser
// ----------------------------------------
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ----------------------------------------
// Sessions/Cookies
// ----------------------------------------
const cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET || "secret"]
  })
);

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// ----------------------------------------
// Flash Messages
// ----------------------------------------
const flash = require("express-flash-messages");
app.use(flash());

// ----------------------------------------
// Method Override
// ----------------------------------------
const methodOverride = require("method-override");
const getPostSupport = require("express-method-override-get-post-support");

app.use(
  methodOverride(
    getPostSupport.callback,
    getPostSupport.options // { methods: ['POST', 'GET'] }
  )
);

// ----------------------------------------
// Referrer
// ----------------------------------------
app.use((req, res, next) => {
  req.session.backUrl = req.header("Referer") || "/";
  next();
});

// ----------------------------------------
// Public
// ----------------------------------------
app.use(express.static(`${__dirname}/public`));

// ----------------------------------------
// Logging
// ----------------------------------------
const morgan = require("morgan");
const morganToolkit = require("morgan-toolkit")(morgan);

app.use(morganToolkit());

// ----------------------------------------
<<<<<<< HEAD
// Cors
// ----------------------------------------
const cors = require("cors");
app.use(cors());

<<<<<<< HEAD
<<<<<<< HEAD
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
=======
// ----------------------------------------
// Passport
// ----------------------------------------
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
>>>>>>> dev
app.use(passport.initialize());
app.use(passport.session());

// ----------------------------------------
// Routes
// Local Strategy
// ----------------------------------------
<<<<<<< HEAD
=======
=======
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err);
      if (!user) {
        return done(null, false, { message: "Invalid Username!" });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Invalid Password!" });
      }

=======
// Passport
// ----------------------------------------

>>>>>>> dev
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
app.use(passport.initialize());

// ----------------------------------------
// Local Strategy
// ----------------------------------------

<<<<<<< HEAD
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
=======
>>>>>>> dev
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user.validPassword(password)) {
<<<<<<< HEAD
<<<<<<< HEAD
        return done(null, false, { message: 'Invalid Password!' });
      }
      if (!user) {
        return done(null, false, { message: 'Invalid Username!' });
=======
=======
>>>>>>> dev
        return done(null, false, { message: "Invalid Password!" });
      }
      if (!user) {
        return done(null, false, { message: "Invalid Username!" });
<<<<<<< HEAD
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
=======
>>>>>>> dev
      }
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
      return done(null, user);
    });
  })
);

passport.serializeUser((user, done) => {
<<<<<<< HEAD
  done(null, user._id);
=======
  done(null, user.id);
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// ----------------------------------------
// login/logout Middlewares
// ----------------------------------------

const loggedInOnly = (req, res, next) => {
  return req.session.passport && req.session.passport.user
    ? next()
<<<<<<< HEAD
<<<<<<< HEAD
    : res.json({ message: 'Logged In Only' });
};

const loggedOutOnly = (req, res, next) => {
  return !req.user ? next() : res.json({ message: 'Logged Out Only' });
=======
    : res.status(401);
};

const loggedOutOnly = (req, res, next) => {
  return !req.user ? next() : res.status(403);
>>>>>>> dev
=======
    : res.json({ message: "Logged In Only" });
};

const loggedOutOnly = (req, res, next) => {
  return !req.user ? next() : res.json({ message: "Logged Out Only" });
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
};

// ----------------------------------------
// Routes
// ----------------------------------------

<<<<<<< HEAD
<<<<<<< HEAD
const { users, pouches, items, login, logout, register } = require('./routers');

app.use('/users', loggedInOnly, users);
app.use('/pouches', loggedInOnly, pouches);
app.use('/items', loggedInOnly, items);
app.use('/login', loggedOutOnly, login);
app.use('/logout', loggedInOnly, logout);
app.use('/register', loggedOutOnly, register);

let currentUser;

app.get('/', loggedInOnly, async (req, res, next) => {
=======
=======
>>>>>>> dev
const { users, pouches, items, login, logout, register } = require("./routers");

app.use("/users", loggedInOnly, users);
app.use("/pouches", loggedInOnly, pouches);
app.use("/items", loggedInOnly, items);
app.use("/login", loggedOutOnly, login);
app.use("/logout", loggedInOnly, logout);
app.use("/register", loggedOutOnly, register);

<<<<<<< HEAD
let currentUser;

app.get("/", loggedInOnly, async (req, res, next) => {
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
=======
<<<<<<< HEAD
app.get("/currentUser", loggedInOnly, async (req, res, next) => {
  try {
    let currentUser = await User.findById(req.session.passport.user);
=======
let currentUser;

app.get("/", loggedInOnly, async (req, res, next) => {
>>>>>>> dev
  try {
    currentUser = await User.findById(req.session.passport.user);
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7
    res.json(currentUser);
  } catch (err) {
    next(err);
  }
});

// ----------------------------------------
// Template Engine
// ----------------------------------------
const expressHandlebars = require("express-handlebars");
const helpers = require("./helpers");

const hbs = expressHandlebars.create({
  helpers: helpers,
  partialsDir: "views/",
  defaultLayout: "application"
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// ----------------------------------------
// Server
// ----------------------------------------
const port = process.env.PORT || process.argv[2] || 3001;
const host = "localhost";

let args;
process.env.NODE_ENV === "production" ? (args = [port]) : (args = [port, host]);

args.push(() => {
  console.log(`Listening: http://${host}:${port}\n`);
});

if (require.main === module) {
  app.listen.apply(app, args);
}

// ----------------------------------------
// Error Handling
// ----------------------------------------
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.stack) {
    err = err.stack;
  }
  res.status(500).render("errors/500", { error: err });
});

module.exports = app;
