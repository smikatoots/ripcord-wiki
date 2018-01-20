let mongoose = require('mongoose');

let EmployeeSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  pic: {
    data: Buffer,
    type: String
  },
  bio: {
    type: String,
    require: true
  },
  fact: {
    type: String,
    require: true
  },
  work: {
    type: Array,
    require: true
  },
  hobbies: {
    type: Array,
    require: true
  },
});

let FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
    required: true
  },
  comment: {
    type: String,
  },
});

var Employee = mongoose.model('Employee', EmployeeSchema);
var Feedback = mongoose.model('Feedback', FeedbackSchema);


module.exports = {
  Employee,
  Feedback
}
