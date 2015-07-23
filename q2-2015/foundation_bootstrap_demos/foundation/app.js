var today = new Date();
var events = [
	+new Date(today.getFullYear(), today.getMonth(), 1),
	+new Date(today.getFullYear(), today.getMonth(), 4),
	+new Date(today.getFullYear(), today.getMonth(), 6)
];

function getEvents() { return events; }

var teams;
function getTeam(code) {
	var pickedTeam;
	teams.forEach(function(team) {
		if (team.fifa_code === code) {
			pickedTeam = team;
			return;
		}
	});
	return pickedTeam;
}

$(window).on("resize", function() {
	kendo.resize($(".k-chart"));
});

function getMatchName(day) {
	if (day === "1") {
		return "Japan vs. England";
	} else if (day === "4") {
		return "Germany vs. England";
	} else {
		return "United States vs. Japan";
	}
}

var flagTemplate = "<span class='k-state-default'>" +
	"<img src='../flags/#: data.fifa_code #.png' class='flag'>" +
	"#: data.country #" +
	"</span>";