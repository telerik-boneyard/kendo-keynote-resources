(function() {
  
  // CLEAR TEXT LOGIN IS IN CLEAR TEXT

  var el = new Everlive('H9C10aheNX5imVj9');

  el.Users.login("demouser", "demouser").then(function() {
    window.app.mgmt.init();
  }); 

  $("#toggle").on("click", function() {
    $(".row-offcanvas").toggleClass("active");
  })

}());