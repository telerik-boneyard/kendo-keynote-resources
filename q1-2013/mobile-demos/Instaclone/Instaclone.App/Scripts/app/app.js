(function () {

    window.APP = window.APP || {};

    var feedId = 0;
    var url = "http://localhost/api";

    window.APP.feed = new kendo.data.DataSource({
        transport: {
            read: url + "/feed/get"
        }
    })

    window.APP.commentsShow = function (e) {
        feedId = e.sender.params.id;
        window.APP.comments.read();
    };

    window.APP.comments = new kendo.data.DataSource({
        transport: {
            read: {
                url: function () {
                    return url + "/comments/get?id=" + feedId
                }
            }
        }
    });

    window.APP.addComment = function () {
        $.post(url + "/comments/add", { text: $("#comment").val(), feedId: feedId }, function () {
            window.APP.app.navigate("#home");
        });
    };

    window.APP.neverMind = function () {
        window.APP.app.navigate("home");
    };

    window.APP.removeFriend = function (e) {
        e.target.parent().fadeOut();
    }

}());