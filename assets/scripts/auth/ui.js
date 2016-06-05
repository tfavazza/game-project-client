'use strict';

const app = require('../app.js');
const api = require('./api.js');

const success = () => {
};

const failure = () => {
};

const signUpSuccess = (data) => {
  api.signIn(data.user); //TODO make this work
  $('#myModal').modal('hide');
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#myModal').modal('hide');
  $('#sign-in-button-text').text('Change Password');
  $('#sign-out').show();
};

const signOutSuccess = function () {
  app.user = null;
  $('#sign-in-button-text').text('Sign In/Register');
  $('#sign-out').hide();
  $('#game-board').hide();
};

const newGameSuccess = (data) => {
  $('#start-game-fail').text('');
  app.game = data.game;
};

const updateGameSuccess = (data) => {
  app.game = data.game;
};

const changePassFailure = () => {
  $('#password-change-failure').text('Your old password was entered incorrectly.');
};

const getAllGamesSuccess = (data) => {
  app.games = data.games;
  $('#game-stats-div').text('You have played ' + app.games.length + ' games!');
};

const newGameFailure = () => {
  $('#start-game-fail').text('I\'m sorry, something has gone wrong.');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  newGameSuccess,
  updateGameSuccess,
  signUpSuccess,
  changePassFailure,
  getAllGamesSuccess,
  newGameFailure,
};
