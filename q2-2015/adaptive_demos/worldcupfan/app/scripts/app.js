define([
  'views/layout/layout',
  'views/home/home',
  'views/matches/matches',
  'views/roster/roster',
  'views/scheduler/scheduler',
  'views/results/results',
  'views/editor/editor'
], function (layout, home, matches, roster, scheduler, results, editor) {

  var router = new kendo.Router({
    init: function () {

      layout.render('#body');

      
      //sidebar
        $("#sidebar").kendoResponsivePanel({
            breakpoint: 1000,
            width: 300,
            orientation: "left"
      });    
      
      $("#toolbar").kendoToolBar({
          items: [
        
            { template: "<label>Search:</label>" },
                {
                  template: "<input id='search' style='width: 230px;height:25px' />",
                    overflow: "never"
                },                            
            { type: "button", text: "Stories" },
            { type: "button", text: "Matches" },
            { type: "button", text: "Tickets" },
            { type: "button", text: "Supporters Club" },
            { type: "button", text: "Store" },
            { type: "button", text: "Affiliates" },
            { type: "button", text: "Coaching Education" },
            { type: "button", text: "Referee Program" },
            { type: "button", text: "En Español" },
          ]
        });
      
    }
  });

  router.route('/', function () {
    layout.showIn('#content', home);
  });

  router.route('/matches', function () {
    layout.showIn('#content', matches);
  });

  router.route('/roster', function () {
    layout.showIn('#content', roster);
  });

  router.route('/results', function () {
    layout.showIn('#content', results);
  });

  router.route('/scheduler', function () {
    layout.showIn('#content', scheduler);
  });

  router.route('/editor', function () {
    layout.showIn('#content', editor);
  });


  var init = function() {
    router.start();
  };

  return {
    init: init
  };

});