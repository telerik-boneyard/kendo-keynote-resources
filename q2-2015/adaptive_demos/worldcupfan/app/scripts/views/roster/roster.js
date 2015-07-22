define([
  'text!views/roster/roster.html'
], function (template) {
    
    var model = kendo.observable({
          roster: new kendo.data.TreeListDataSource({
            data: [
                { id: 1, Team: null, Name: "USA Women's National Team", Position: null },
                { id: 2, Team: 1, Name: "Hope Solo", Position: "GoalKeeper" },
                { id: 3, Team: 1, Name: "Ashlyn Harris", Position: "GoalKeeper" },
                { id: 4, Team: 1, Name: "Alyssa Naeher", Position: "GoalKeeper" },
                { id: 5, Team: 1, Name: "Christie Rampone", Position: "Defender" },
                { id: 6, Team: 1, Name: "Lori Chalupny", Position: "Defender" },
                { id: 7, Team: 1, Name: "Becky Sauerbrunn", Position: "Defender" },
                { id: 8, Team: 1, Name: "Ali Krieger", Position: "Designer" },
                { id: 9, Team: 1, Name: "Whitney Engen", Position: "Defender" },
                { id: 10, Team: null, Name: "Canadian Women's National Team", Position: null },
                { id: 11, Team: 10, Name: "Erin McLeod", Position: "GoalKeeper" },
                { id: 12, Team: 10, Name: "Karina LeBlanc", Position: "GoalKeeper" },
                { id: 13, Team: 10, Name: "Stephanie Labbé", Position: "GoalKeeper" },
                { id: 14, Team: 10, Name: "Emily Zurrer", Position: "Defender" },
                { id: 15, Team: 10, Name: "Kadeisha Buchanan", Position: "Defender" },
                { id: 16, Team: 10, Name: "Carmelina Moscato", Position: "Defender" },
                { id: 17, Team: 10, Name: "Robyn Gayle", Position: "Designer" },
                { id: 18, Team: 10, Name: "Rhian Wilkinson", Position: "Defender" }
            ],
            schema: {
                model: {
                    id: "id",
                    fields: {
                        parentId: { field: "Team",  nullable: true },
                        id: { field: "id", type: "number" },
                        Name: { field: "Name", type: "string" },
                        Position: { field: "Position", type: "string", nullable: true }
                    }
                }
            }
        })
    });

  var view = new kendo.View(template, { model: model });

  return view;

});