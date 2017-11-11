let models = require('../../models/test');
let Employee = models.Employee;

const Resources = require('../../app/constants/resources').default;
const api = {
  root: require('./root')
};

module.exports = (app) => {

    app.post('/test', function(req, res) {
      console.log('post tet', models);
      var e = new Employee({
        fname: 'mika',
        lname: 'reyes',
        title: 'hobo',
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
            title: employee.title
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
