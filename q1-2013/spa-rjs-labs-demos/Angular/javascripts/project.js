var ProjectsApp = ProjectsApp || {};

(function() {

	var projects;
	categories = [ "Fun", "Team Building", "Personal", "Work"];
	
	angular.module('project', ['kendo.directives']).config(function($routeProvider) {
		$routeProvider
			.when('/', { controller: ListCtrl, templateUrl: 'list.html' })
			.when('/new', { controller: CreateCtrl, templateUrl: 'detail.html' })
			.when('/save', { controller: ListCtrl, templateUrl: 'list.html' })
			.otherwise({ redirectTo: '/' });
	});
	
	function ListCtrl($scope) {
		$scope.projects = ProjectsApp.projects;
	}

	function CreateCtrl($scope, $location) {
		// Create Project Create logic here
		$scope.model = kendo.observable({
			categories:  categories
		})
		
		$scope.save = function() {
		    $location.path('/');
		 };
	}
}());