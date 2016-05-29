'use strict';

var Actions = {};
Actions.AuthError = function (req, res) {
  res.send({ error: 'Authentication error', code: -1, role: -1 });
};

module.exports = Actions;
