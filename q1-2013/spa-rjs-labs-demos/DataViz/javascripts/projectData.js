var ProjectsApp = ProjectsApp || {};

(function(moment) {
	var projects = [{
		id: 1,
		description: "Watch Harlem Shake Videos on You Tube",
		category: "Fun",
		due: moment("03/20/2013", "MM/DD/YYYY").fromNow(),
		done: true
	}, 
	{
		id: 2,
		description: "Record Harlem Shake Videos with the Kendo Team",
		category: "Team Building",
		due: moment("03/21/2013", "MM/DD/YYYY").fromNow(),
		done: false
	}, 
	{
		id: 3,
		description: "Get Burke a Horsehead mask for his birthday",
		category: "Personal",
		due: moment("05/15/2013", "MM/DD/YYYY").fromNow(),
		done: false
	}, 
	{
		id: 4,
		description: "Do Taxes",
		category: "Personal",
		due: moment("04/15/2013", "MM/DD/YYYY").fromNow(),
		done: true
	}, 
	{
		id: 5,
		description: "Build a killer Hybrid Mobile app with Kendo UI Mobile and Icenium",
		category: "Work",
		due: moment("01/20/2013", "MM/DD/YYYY").fromNow(),
		done: false
	}];

	var completedData = [
        20, 25, 25, 40, 50, 10, 0, 1, 2, 3,
        5, 6, 10, 11, 22, 70, 10, 15, 15, 15,
        14, 17, 18, 19, 20, 22, 23, 22, 25, 26,
        26, 27, 28, 25, 30, 33, 36, 40, 41, 46
    ];

    var createdData = [
        100, 99, 98, 99, 123, 88, 87, 86, 85, 84,
        84, 87, 84, 76, 75, 70, 73, 71, 74, 68,
        65, 63, 60, 58, 56, 54, 52, 51, 25, 26,
        26, 27, 28, 25, 30, 33, 36, 40, 41, 46
    ];

    var goalCompleted = [[ 25, 15 ]];

    var goalCreated = [[ 7, 56 ]];

	ProjectsApp.projects = projects;
	ProjectsApp.completedData = completedData;
	ProjectsApp.createdData = createdData;
	ProjectsApp.goalCompleted = goalCompleted;
	ProjectsApp.goalCreated = goalCreated;
}(moment));