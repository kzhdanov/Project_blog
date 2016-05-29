'use strict';

var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var passHash = require('password-hash');

var mysql = require('mysql');
var conf = require('../config');
var pool = mysql.createPool(conf);
var Users = require('../Models/Users')(pool);
var Passwords = require('../Models/Password')(pool);

passport.use(new BasicStrategy(
    function (username, password, done) {
      Users.SelectOne(username, function (err, user) {
        if (err) {
          console.log(err);
          return done(null, false, { message: 'Inner error' });
        }

        if (user && user.length > 0 && user[0].Id) {
          Passwords.CheckPassword(user[0].Id, function (err, pwd) {
            if (err) {
              console.log(err);
              return done(null, false, { message: 'Inner error' });
            }

            if (pwd && pwd[0].SolePsd) {
              if (passHash.verify(password, pwd[0].SolePsd)) {
                return done(null, user[0]);
              } else {
                return done(null, false, { message: 'User not found.' });
              }
            }
          });
        } else
           return done(null, false, { message: 'User not found.' });
      });
    }
));

exports.isAuth =  passport.authenticate('basic', { session: false, failureRedirect: '/AuthError' });
