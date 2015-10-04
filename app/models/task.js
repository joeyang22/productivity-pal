
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Task schema
 */

var TaskSchema = new Schema({
  name: String,
  description: String,
  startDate: {type: Date},
  dueDate: {type: Date},
  group: [Schema.Types.ObjectId],
  users: [Schema.Types.ObjectId]

});


module.exports = mongoose.model('task', TaskSchema);
