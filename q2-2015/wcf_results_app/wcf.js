 $('#logo').load(function(){ //once image is loaded, and sized based on window size run code

    var $splitter = $('#splitter');
    var $window = $(window);
    var width;

    //splitter widget

    var splitter = $splitter.kendoSplitter({
        panes: [
            {collapsible: true,resizable: true},
            {scrollable:false}
        ]
    }).getKendoSplitter();

    //resize splitter depending upon window size

    $window.resize(kendo.throttle(function() {

        width = $window.width();

        if (width <= 400) {
            splitter.size('.k-pane:first', '80%');
            splitter.collapse('#filters');
        }

        if (width > 401) {
            splitter.size('.k-pane:first', '200px');
            splitter.expand('#filters');
        }

        $splitter.height($window.height() - $('header').outerHeight());

        splitter.resize();

        //grid.resize();


    }, 250));

    //teams data, used with viewModel

    var teamsData = new kendo.data.DataSource({
        transport: {
            read: {
                url: 'http://worldcup.sfg.io/teams',
                dataType: 'json'
            }
        },
        sort: { field: 'country', dir: 'asc' }
    });

    //teams results data used in grid

    var teamsResults = new kendo.data.DataSource({
        transport: {
            read: {
                url: 'http://worldcup.sfg.io/teams/results',
                dataType: 'json'
            }
        },
        sort: { field: 'country', dir: 'asc' }
    });

    //list of teams

    var viewModel = kendo.observable({
        teamsData: teamsData,
        selectTeam: function(e){
            grid.dataSource.filter({ field: 'fifa_code', value: e.event.target.id });
            if (width <= 400) { splitter.toggle('#filters');}   
        }
    });
    
    kendo.bind($('#teams'), viewModel);

    //grid widget

    var grid = $('#grid').kendoGrid({
        columns: [
            { field: 'country', width:'125px'},
            { field: 'wins'},
            { field: 'draws' },
            { field: 'losses'},
            { field: 'games_played', title:'played', minScreenWidth: 401},
            { field: 'points', minScreenWidth: 501 },
            { field: 'goals_for', title:'goals for', minScreenWidth: 601 },
            { field: 'goals_against', title:'goals against', minScreenWidth: 701 }
        ],
        sortable: true,
        dataSource: teamsResults
    }).getKendoGrid();

    //filter toggle button

    var filtersBtn = $('#filtersBtn').kendoButton({
        icon:'funnel',
        click:function(){
            splitter.toggle('#filters');
        }
    });

    //all button

    var allBtn = $('#allBtn').kendoButton({
        click:function(){
            grid.dataSource.filter([]);
            if (width <= 400) { splitter.toggle('#filters');} 
        }
    })[0].focus();

    //resize everything by triggering window resize

    $window.trigger('resize');

});   
