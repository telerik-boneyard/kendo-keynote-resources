var fs = require("fs");

exports.index = function(req, res){
  res.render('index');
};

exports.demos = function(req, res){

  var fileName = req.params.demoPage;
  var fileJade = fileName + ".jade";
  var fileEjs = fileName + ".ejs"
  var file;

  var fullPath = __dirname + "/../views/demos/" + fileJade;
  console.log("FULL PATH", fullPath);
  if (fs.existsSync(fullPath)){
    file = fileJade;
  } else {
    file = fileEjs;
  }

  res.render("demos/" + file);
};

exports.dashboard = function(req, res) {
  res.render("dashboard");
};
