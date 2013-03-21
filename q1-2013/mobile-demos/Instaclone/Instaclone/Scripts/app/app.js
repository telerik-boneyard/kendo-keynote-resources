(function () {

    window.APP = window.APP || {};

    var feedId = 0;

    window.APP.feed = new kendo.data.DataSource({
        transport: {
            read: "feed"
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
                    return "comments/get?id=" + feedId
                }
            }
        }
    });

    window.APP.addComment = function () {
        $.post("comments/add", { text: $("#comment").val(), feedId: feedId }, function () {
            window.APP.app.navigate("remote/feed");
        });
    };

    window.APP.neverMind = function () {
        window.APP.app.navigate("feed");
    };

    window.APP.removeFriend = function (e) {
        e.target.parent().fadeOut();
    }

}());