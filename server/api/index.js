let models = require('../../models/test');
let Employee = models.Employee;
let Feedback = models.Feedback;

const Resources = require('../../app/constants/resources').default;
const api = {
  root: require('./root')
};

var express = require('express');
var app = express();

module.exports = (app, db) => {

    app.get('/employees', function(req, res) {
      Employee.find(function(err, employees) {
        if (err) {
          console.log(err);
        } else {
          res.send(employees);
          return;
        }
      });
    });

    app.get('/error', function(req, res) {
      res.send("Error sending feedback. Please try again.");
    });

    app.get('/feedbacksent', function(req, res) {
      res.send("Feedback sent. Thank you!");
    });

    app.post('/feedback', function(req, res) {
      var f = new Feedback({
        name: req.body.name || 'anon',
        type: req.body.type || 'note',
        comment: req.body.comment
      });

      f.save(function(err, feedback) {
        if (err) {
          console.log(err);
          res.status(500).redirect('/error');
          return;
        } else {
          console.log('Feedback sent:', feedback);
          res.redirect('/feedbacksent');
          return;
        }
      });

    });

    app.post('/employee', function(req, res) {
      Employee.find({ _id: req.body.id}, function(err, employee) {
        if (err) {
        } else {
          res.send(employee);
          return
        }
      })
    })

    app.post('/test', function(req, res) {
      console.log('post test', models.EmployeeSchema);
      var e = new Employee({
        fname: 'mika',
        lname: 'reyes',
        title: 'hobo',
        department: 'all'
      });

      e.save(function(err, employee) {
        if (err) {
          console.log(err);
          res.status(500).redirect('/register');
          return;
        } else {
          console.log('Employee added successfully:', employee);
          res.json({
            fname: employee.fname,
            lname: employee.lname,
            title: employee.title,
            department: employee.department
          });
        }
      });

    })

    app.get('/test', function(req, res) {
      res.send('requests')
    })

    app.post(Resources.api.test, (req, res) => {
      api.root.post.test(req, res, app.get('superSecret'));
    });
};
