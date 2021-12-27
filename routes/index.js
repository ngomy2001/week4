var express = require('express');
const userModel = require('../models/user');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login');
});
router.post('/login', async function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const user = await userModel.findOne({
    username,
    password,
  });
  if (!user) {
    console.log('Incorrect username or password');
    res.redirect('/login');
  } else {
    console.log(username);
    console.log(password);
    res.redirect('/index');
  }
});
router.get('/index', function (req, res, next) {
  res.render('index');
});
module.exports = router;
