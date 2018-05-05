const mongoose = require('mongoose');
const Answer = require('./db/answer/schema');
const Question = require('./db/question/schema');
const User = require('./db/user/schema');
const Vote = require('./db/vote/schema');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TestMongoose');

const user = new User({
  email: 'gmail@gmail.com',
  profile: {
    fullName: 'Name,Name'
  }
});

user
  .save()
  .then(doc => {
    console.log('User save', doc);
  })
  .catch(err => console.error(err));

const question = new Question({
  title: 'Title',
  description: 'Description',
  createdById: User._id,
  tags: 'tags'
});

question
  .save()
  .then(doc => {
    console.log('question save', doc);
  })
  .catch(err => console.error(err));

const answer = new Answer({
  title: 'Title',
  description: 'Description',
  questionId: Question._id,
  createdById: User._id
});

answer
  .save()
  .then(doc => {
    console.log('ansver save', doc);
  })
  .catch(err => console.error(err));

const vote = new Vote({
  isPositive: true,
  answerId: Answer._id,
  createdById: User._id
});

vote
  .save()
  .then(doc => {
    console.log('vote save', doc);
  })
  .catch(err => console.error(err));
