'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const logic = require('./logic');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.signUpFailure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePass = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePass(data)
  .done(ui.success)
  .fail(ui.changePassFailure);
};

const onCreateGame = function () {
  event.preventDefault();
  api.createGame()
  .done(ui.newGameSuccess)
  .fail(ui.newGameFailure);
};

const onUpdateGame = function (event) {
  event.preventDefault();
  let data = logic.checkGameState();
  api.updateGame(data)
  .done(ui.updateGameSuccess)
  .fail(ui.failure);
};

const onGetGamesPlayed = function (event) {
  event.preventDefault();
  api.getAllGamesPlayed().
  done(ui.getAllGamesSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePass);
  $('.col-xs-4').on('click', logic.getButtonId);
  $('#start-game').on('click', onCreateGame);
  $('#game-board').on('click', onUpdateGame);
  $('#start-game').on('click', logic.toggleGameBoard);
  $('#start-new-game').on('click', logic.playAgain);
  $('#game-stats').on('click', onGetGamesPlayed);
};

module.exports = {
  addHandlers,
};
