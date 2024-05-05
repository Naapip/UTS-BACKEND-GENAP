const express = require('express');

const authentication = require('./components/authentication/authentication-route');
const users = require('./components/users/users-route');
const branch = require('./components/branchs/branchs-route');

module.exports = () => {
  const app = express.Router();

  authentication(app);
  users(app);
  branch(app);

  return app;
};
