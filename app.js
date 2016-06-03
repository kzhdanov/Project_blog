'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ErrorController = require('./Controllers/Error');
var AuthController = require('./Controllers/Auth');
var ArticleController = require('./Controllers/Article');
var passport = require('passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(express.static(__dirname + '/FrontEnd'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers',
  'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
});

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/', AuthController.isAuth, function (req, res) {

ArticleController.GetAllArticles(function(err, data) {
  console.log(data);
});


  res.send({ code: 1, role: 1, user: req.user.Login });
});

app.get('/AuthError', ErrorController.AuthError);

app.get('/home', AuthController.isAuth, function (req, res) {
  res.end('test');
});

app.listen(4000, function () {
  console.log('Server successfully started on 4000 port');
});
