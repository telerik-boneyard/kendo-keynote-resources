define([
  'text!views/home/home.html'
], function (template) {
    
  var view = new kendo.View(template);

  var model = kendo.observable({
  
  });

  var view = new kendo.View(template, { model: model });

  return view;

});