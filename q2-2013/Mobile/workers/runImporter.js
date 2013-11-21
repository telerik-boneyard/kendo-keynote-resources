(function() {
	var request = require('request');
	var fs = require('fs');
	var csv = require('csv');

  var everliveBaseUrl = "https://api.everlive.com/v1/9O9pJYS1ampTPiH9/Run";
  var baseHeader = { "Authorization": "Bearer YrVhwtTZND3E0mF9dWYiyzNaSJHH3s3n8BMlFPeGHP2xDVmRSRQK2fv7Na0t9bVqGosgLZxF8JIV0XPmuEPhxdszyfoD2ZaxlSDEZYIkMsSkAuDxhzYACmfru2qdIzAEdsN3juRNYPPPGYjxOaZzPQt6FrOi9mC4BDATMcRMxrsQ0Lgi02hk9ukelLQynA7oOqnDpTfo5jw8A9YEl7xkpS2aw6QEzbeVbba8zAyxdxDCSNgn1MNHvXjv7mEZh6RP",
		"Content-Type" : "application/json" };


  csv()
	.from.stream(fs.createReadStream(__dirname + '/cardioActivities.csv'))
	.on('record', function(row, index) {
		run = {
			"Date": row[0],
			"Distance": row[1],
			"Duration": row[2],
			"AvgPace": row[3],
			"AvgSpeed": row[4],
			"CaloriesBurned": row[5],
			"BPM": row[6]
		};

		//console.log(run);
		request({
      url: everliveBaseUrl,
      headers: baseHeader,
      method: "POST",
      body: JSON.stringify(run),
      json: true
    }, function(error, response, body) {
        if (error) {
          console.log("Error saving project '" + run.Date + "' with error '" + error);
        } else {
          console.log("Saved project '" + run.Date + "' with ID {" + body.Result.Id + "}");
        }
     });
	})
	.on('error', function(error) {
		console.log(error.message);
	});
}());