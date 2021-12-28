const faker = require('faker');
const mongoose = require('mongoose');
const userModel = require('../models/user');

const username = 'mynt2601';
const password = 'babyboocute';
const cluster = 'cluster0.5rsjq';
const dbname = 'myFirstDatabase';
const URI = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(URI, () => {
  let users = [];
  for (let i = 0; i < 100; i += 1) {
    const username = faker.internet.userName();
    const password = faker.internet.password();
    let newUser = {
      username,
      password,
    };
    users.push(newUser);
  }

  userModel.insertMany(users);

  console.log('Database seeded! :)');
});
