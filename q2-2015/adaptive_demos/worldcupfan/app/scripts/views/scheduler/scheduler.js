define([
  'text!views/scheduler/scheduler.html'
], function (template) {
    
    var model = kendo.observable({
          tasks: new kendo.data.SchedulerDataSource({
            
            batch: true,
            transport: {
                read: {
                    url: "",
                    dataType: "jsonp"
                }
            },
            schema: {
                model: {
                    id: "taskId",
                    fields: {
                        taskId: { from: "TaskID", type: "number" },
                        title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                        start: { type: "date", from: "startTime" },
                        end: { type: "date", from: "endTime" },
                        startTimezone: { from: "StartTimezone" },
                        endTimezone: { from: "EndTimezone" },
                        description: { from: "Description" },
                        recurrenceId: { from: "RecurrenceID" },
                        recurrenceRule: { from: "RecurrenceRule" },
                        recurrenceException: { from: "RecurrenceException" },
                        isAllDay: { type: "boolean", from: "IsAllDay" }
                    }
                }
            }
        })
    });

  var view = new kendo.View(template, { model: model });

  return view;

});