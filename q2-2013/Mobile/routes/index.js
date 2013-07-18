
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Kendo Runner' });
};

exports.admin = function(req, res){
	res.render('admin', { title: 'Kendo Runner - Admin'});
};