'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const logic = require('./logic');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
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
  .fail(ui.failure);
};
const onCreateGame = function () {
  event.preventDefault();
  api.createGame()
  .done(ui.newGameSuccess)
  .fail(ui.failure);
};

// const makeGameData = function (index, value, over) {
// let gameData = {
//   game: {
//     cell: {
//       index: index,
//       value: value
//     },
//     over: over
//   }
// };
//   console.log(gameData);
//   return gameData;
// };

//let fakeData = JSON.stringify(makeGameData("1","X", false));


const onUpdateGame = function (event) {
  console.log("game is trying to update!");
  event.preventDefault();
  let data = data; //FIXME data should be getFormFields(infoNeeded)
  api.updateGame(data)
  .done(ui.newGameSuccess)
  .fail(ui.failure);
};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePass);
  $('#game-board').on('click', logic.checkGameState);
  $('#game-board').on('click', logic.togglePlayer);
  $('.col-xs-4').on('click', logic.getButtonId);
  $('#start-game').on('click', onCreateGame);
  $('#game-board').on('click', onUpdateGame);
};

module.exports = {
  addHandlers,
};
