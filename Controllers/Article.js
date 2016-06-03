'use strict';
var mysql = require('mysql');
var conf = require('../config');
var pool = mysql.createPool(conf);
var Articles = require('../Models/Article')(pool);

var Actions = {};
Actions.GetAllArticles = function (callback) {
  Articles.SelectAll(callback);
}

module.exports = Actions;
