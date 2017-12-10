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

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = {
  Employee
}
