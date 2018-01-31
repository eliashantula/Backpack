'use strict';

<<<<<<< HEAD
const users = require('./users');
const pouches = require('./pouches');
const items = require('./items');
const login = require('./login');
const logout = require('./logout');
const register = require('./register');
=======
const users = require("./users");
const pouches = require("./pouches");
const items = require("./items");
const login = require("./login");
const logout = require("./logout");
const register = require("./register");
>>>>>>> 41e72215a78b7823f6cda22fa4370ba9be82dbe7

const Routes = { users, pouches, items, login, logout, register };

module.exports = Routes;
