const mongoose = require('mongoose');

const Profile = {
  fullName: {
    type: String,
    require: [true, 'Fill in the field with the name']
  },
  post: String
};

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  profile: Profile,
  services: Object
});

module.exports = mongoose.model('User', UserSchema);
