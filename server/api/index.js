let models = require('../../models/test');
let Employee = models.Employee;

const Resources = require('../../app/constants/resources').default;
const api = {
  root: require('./root')
};

const multer = require("multer");
var upload = multer({ dest: 'uploads/' })
var fs = require('fs');

module.exports = (app, db) => {

// TEST FOR UPLOAD
    app.post('/upload',function(req,res){
      console.log("req", req);
     var newItem = new Employee();
     newItem.img.data = fs.readFileSync(req.body.avatar)
     newItem.img.contentType = 'image/png';
     newItem.save();
    });

// UPLOAD END
    app.get('/icon', function(req, res) {
      console.log('ICON GET REQUEST HERE');
      Employee.find(function(err, employees) {
        if (err) {
          console.log(err);
        } else {
          res.send(employees);
          return;
        }
      });
    });

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
