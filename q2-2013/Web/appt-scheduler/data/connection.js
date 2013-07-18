var Mongo = require('mongodb')
  , MongoClient = Mongo.MongoClient
  , Q = require('q')
  , format = require('util').format;    

exports.connect = function() {
  var deferred = Q.defer();
  MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) {
      deferred.reject(new Error(err));
    }
    else {
      deferred.resolve(db)
    }
  });

  return deferred.promise;
};

exports.ObjectID = Mongo.ObjectID;