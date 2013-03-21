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
        936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007,
        1004, 988, 990, 988, 987, 995, 946, 954, 991, 984,
        974, 956, 986, 936, 955, 1021, 1013, 1005, 958, 953,
        952, 940, 937, 980, 966, 965, 928, 916, 910, 980
    ];

	ProjectsApp.projects = projects;
	ProjectsApp.completedData = completedData;
}(moment));