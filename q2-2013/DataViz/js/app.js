$(document).ready(function(){
	var shoesDataSource = new kendo.data.DataSource({ data: [
		{
			Name: "MT00 Minimus Zero",
			Brand: "New Balance",
			MorningRuns: 8,
			AfternoonRuns: 4,
			CurrentMileage: "156",
			MaxMileage: "500",
			ASIN: "B009KZ3SLE",
			Photo: "https://api.everlive.com/v1/9O9pJYS1ampTPiH9/Files/690ea920-e419-11e2-8d2b-cb5662fc1011/Download"
		},
		{
			Name: "Cascadia 7",
			Brand: "Brooks",
			MorningRuns: 9,
			AfternoonRuns: 9,
			CurrentMileage: "367",
			MaxMileage: "300",
			ASIN: "B005ARF4U4",
			Photo: "https://api.everlive.com/v1/9O9pJYS1ampTPiH9/Files/f6064410-e418-11e2-8f78-f38adbbe679b/Download"
		},
		{
			Name: "Fivefinger KomodoSport",
			Brand: "Vibram",
			MorningRuns: 4,
			AfternoonRuns: 9,
			CurrentMileage: "332",
			MaxMileage: "450",
			ASIN: "B002F5440U",
			Photo: "https://api.everlive.com/v1/9O9pJYS1ampTPiH9/Files/c9671420-e418-11e2-8f78-f38adbbe679b/Download"
		},
		{
			Name: "Free Run 3+",
			Brand: "Nike",
			MorningRuns: 4,
			AfternoonRuns: 7,
			CurrentMileage: "25",
			MaxMileage: "350",
			ASIN: "B008HORLC6",
			Photo: "https://api.everlive.com/v1/9O9pJYS1ampTPiH9/Files/977017f0-e418-11e2-8f78-f38adbbe679b/Download"
		}
	]});

	var win = $("#data-window").kendoWindow({
		height: "400px",
		title: "Shoe Data",
		visible: false,
		width: "500px"
	}).data("kendoWindow");

	$('#radar').kendoChart({
		theme: "bootstrap",
		title: { text: "Distribution of Runs By Time of Day"},
		legend: { position: "bottom" },
		dataSource: shoesDataSource,
		seriesDefaults: { type: "radarLine" },
		series: [{
			name: "Morning Runs",
			field: "MorningRuns"
		},
		{
			name: "Afternoon Runs",
			field: "AfternoonRuns"
		}],
		categoryAxis: {
			field: "Name"
		},
		tooltip: {
			visible: true
		},
		valueAxis: {
			labels: {
				template: "#= value # mi"
			}
		}
	});

	$("#shoe-list").kendoListView({
		dataSource: shoesDataSource,
		selectable: "single",
		template: $("#shoe-template").text(),
		change: function() {
			var item = this.dataSource.getByUid(this.select().data("uid"));
			var template = kendo.template($("#data-template").html());

			win.title(item.Brand + " " + item.Name);
			win.content(template(item));
			win.center();
			win.open();

			$("#qrCode").kendoQRCode({
				value: "http://www.amazon.com/gp/product/" + item.ASIN,
				errorCorrection: "M",
				size: 240,
				border: {
					color: "#000000",
					width: 5
				}
			});
		}
	});
});