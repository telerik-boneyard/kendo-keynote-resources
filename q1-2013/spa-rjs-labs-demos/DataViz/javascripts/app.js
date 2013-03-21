var ProjectsApp = ProjectsApp || {};

(function($, kendo, moment) {
	var projectsList, projectsContainer, hiddenContainer, 
		projects, ds, template, categories;

	projectsList = $('#projectsList');
	projectsContainer = $('#projectsContainer');
	newContainer = $('#newContainer');
	reportsContainer = $('#projectReports');

	projects = ProjectsApp.projects;

	categories = [ "Fun", "Team Building", "Personal", "Work"];
	ProjectsApp.catsSource = new kendo.data.DataSource({ data: categories });

	ds = new kendo.data.DataSource({ data: projects });
	template = kendo.template($('#projectItemTemplate').html());

	projectsList.kendoListView({
		template: template,
		dataSource: ds
	});
	ds.read();

	$('a[href="#/new"]').on('click', function(e) {
		e.preventDefault();

		projectsContainer.addClass("hidden");
		newContainer.removeClass("hidden");
	
		$('.cancel, .save').on('click', function(e) {
			e.preventDefault();
						
			newContainer.addClass("hidden");
			projectsContainer.removeClass("hidden");
		});
	});

	// New DataViz Charts
	$('a[href="#/reports"]').on('click', function(e) {
		e.preventDefault();

		projectsContainer.addClass("hidden");
		newContainer.addClass("hidden");
		reportsContainer.removeClass("hidden");
	});

	// Create Charts
	// Sparklines 
	$('#completed-week').kendoSparkline(ProjectsApp.completedData);
	$("#created-week").kendoSparkline({
        type: "column",
        data: ProjectsApp.createdData,
        tooltip: {
            format: "{0} new projects"
        }
    });	

    //Bullet Graphs
    $("#goal-completed").kendoChart({
        legend: {
            visible: false
        },
        series: [{
            type: "bullet",
            data: [15, 25]
        }],
        chartArea: {
            margin: {
                left: 0
            }
        },
        valueAxis: [{
            plotBands: [{
                from: 0, to: 10, color: "red", opacity: 0.3
            }, {
                from: 10, to: 25, color: "yellow", opacity: 0.3
            }, {
                from: 25, to: 50, color: "green", opacity: 0.5
            }],
            majorGridLines: {
                visible: false
            },
            min: 0,
            max: 50
        }]
    });
    

	kendo.bind(document.body.children);

}($, kendo, moment));