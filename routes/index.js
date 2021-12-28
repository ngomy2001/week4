var express = require('express');
const userModel = require('../models/user');
var router = express.Router();
var faker = require('faker');

//Login
router.post('/login', async function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const user = await userModel.findOne({
    username,
    password,
  });
  if (!user) {
    console.log('Incorrect username or password');
    res.redirect('/');
  } else {
    req.session.user = user;
    res.redirect('/index');
  }
});

//Logout
router.get('/logout', function (req, res, next) {
  req.session.destroy(function (err) {
    // cannot access session here
    res.redirect('/');
  });
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login');
});

router.get('/index', function (req, res, next) {
  res.render('index');
});
module.exports = router;
