'use strict';

const app = require('../app.js');
//const api = require('./api.js')

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signUpSuccess = (data) => {
  //app.user = data.user;
  //api.signIn(data);
  $('#myModal').modal('hide');
  console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#myModal').modal('hide');
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
  signUpSuccess
};
