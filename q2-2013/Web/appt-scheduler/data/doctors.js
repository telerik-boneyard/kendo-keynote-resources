var Q = require('q'),
Mongo = require('../data/connection.js');

exports.all = function() {
  var deferred = Q.defer();

  Mongo.connect().then(function(db) {
    var doctors = db.collection("doctors");
    doctors.find().toArray(function(err, results) {
      db.close();
      deferred.resolve(results);
    });
  });

  return deferred.promise;

};