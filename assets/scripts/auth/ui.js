'use strict';

const app = require('../app.js');
const logic = require('./logic.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};
const signOutSuccess = function () {
  app.user = null;
  console.log(app);
};

const newGameSuccess = (data) => {
  app.game = data.game;
  console.log(app);
};

const updateGameSuccess = (data) => {
  app.game = data.game;
  console.log(app);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  newGameSuccess,
  updateGameSuccess,
};
