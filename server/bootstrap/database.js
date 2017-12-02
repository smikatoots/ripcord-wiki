let mongoose = require('mongoose');
let config = require('../../config');

module.exports = () => {
  var conn = mongoose.connect(config.database, {
    useMongoClient: true
  });
  mongoose.connection.on('error', function () {
    console.info('Connection error! Have you executed mongod?');
  });

  return {
    mongoose: mongoose,
  }
};
