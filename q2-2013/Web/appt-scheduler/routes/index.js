var appointments = require('../data/appointments.js');
var doctors = require('../data/doctors.js');

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Login' });
};

exports.login = function(req, res) {

  // store the logged in user in the application session
  req.session.user = req.body.username;

	res.redirect('/schedule');
};

exports.schedule = function(req, res) {
  console.log(req.session.user);
  if (req.session.user === undefined) {
    res.redirect('/');
  }
  else {
    res.render('schedule', { title: 'Schedule', name: req.body.username });  
  }
};

// appointments routes
exports.appointments = {
  get: function(req, res) {
    appointments.all().then(function(results) {
      for (var x = 0; x < results.length; x++) {
        if (results[x].username !== req.session.name) {
          results[x].isMine = false;
        }
        else {
          results[x].isMine = true;
        }
      }
      res.send(results);
    });
  },
  create: function(req, res) {  
    var appointment = req.body;

    // no all day appointments - ever
    appointment.isAllDay = false;

    // this appointment belongs to a user so mark it like that
    appointment.user = req.session.user;

    appointments.create(appointment).then(function(success) {
      res.send(success);
    });
  },
  destroy: function(req, res) {
    if (req.params.id) {
      appointments.destroy(req.params.id).then(function(success) {
        res.send(success);
      });
    }
  }
};

// doctors routes
exports.doctors = {
  get: function(req, res) {
    doctors.all().then(function(results) {
      res.send(results);
    });
  }
};





//   var collection = db.collection('test_insert');
//   collection.insert({a:2}, function(err, docs) {

//     collection.count(function(err, count) {
//       console.log(format("count = %s", count));
//     });

//     // Locate all the entries using find
//     collection.find().toArray(function(err, results) {
//       console.dir(results);
//       // Let's close the db
//       db.close();
//     });      
//   });
// })