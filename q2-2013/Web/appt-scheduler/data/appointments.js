var Q = require('q'),
Mongo = require('../data/connection.js');

exports.all = function() {
  var deferred = Q.defer();

  Mongo.connect().then(function(db) {
    var appointments = db.collection('appointments');
    appointments.find().toArray(function(err, results) {
      db.close();
      deferred.resolve(results);
    });
  });

  return deferred.promise;

};

exports.create = function(appointment) {
  var deferred = Q.defer();

  Mongo.connect().then(function(db) {   
    // map the request to a new appointment object
    var collection = db.collection('appointments');
    console.log(appointment);
    delete appointment._id;
    collection.save(appointment, function(err) {
      db.close();
      if (err) {
        console.log(err);
        deferred.resolve(false);
      }
      else {
        deferred.resolve(true);
      }
    });
  });

  return deferred.promise;
};

exports.destroy = function(id) {
  var deferred = Q.defer();

  Mongo.connect().then(function(db) {
    var collection = db.collection("appointments");

    collection.remove({ _id: new Mongo.ObjectID(id) }, function(err) {
      if (err) {
        deferred.resolve(false);
      }
      else {
        deferred.resolve(true);
      }
    });

  });

  return deferred.promise;
};