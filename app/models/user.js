
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  group: [Schema.Types.ObjectId],
  tasks: [Schema.Types.ObjectId]

});


module.exports = mongoose.model('User', UserSchema);
