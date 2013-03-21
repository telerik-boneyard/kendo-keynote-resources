var ProjectsApp = ProjectsApp || {};

// Replace with RJS (q104)

require([ "kendo.autocomplete.min", "kendo.listview.min", 
	"kendo.datepicker.min", "kendo.view.min", "kendo.router.min"], function initApp() {
	var projectsList, projectsContainer, hiddenContainer,
		projects, template, categories;

	categories = [ "Fun", "Team Building", "Personal", "Work"];
	projectsContainer = $('#projectsContainer');
	
	ProjectsApp.projectsSource = new kendo.data.DataSource({ data: ProjectsApp.projects });
	ProjectsApp.catsSource = new kendo.data.DataSource({ data: categories });
	
	/* KENDO SPA Features */

	// Create a layout 
	var layout = new kendo.Layout($('#projectLayout').html());
	layout.render(projectsContainer);

	// Define Views 
	var projectsList = new kendo.View("projectsListView");
	var newProjects = new kendo.View("newProjectView");
	var reports = new kendo.View("reportsView");

	// Router and Routes 
	var router = new kendo.Router();
	
	//Projects list route
	router.route("/", function() {
		layout.showIn('#display', projectsList);
	});

	//New Project route
	router.route("/new", function() {
		layout.showIn('#display', newProjects);
	});

	router.route("/save", function() {
		//Save Project Here
		
		layout.showIn('#display', projectsList);
	});

	router.route("/reports", function() {
		layout.showIn('#display', reports);
	});

	router.start();

	kendo.bind(document.body.children);
});