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
  img: {
    data: Buffer,
    type: String
  }
});

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = {
  Employee
}
