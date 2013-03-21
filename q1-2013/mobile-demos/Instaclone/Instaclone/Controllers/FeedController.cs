using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Instaclone.Controllers
{
    public class FeedController : Controller
    {

        private Data.Entities _entities = new Data.Entities();

        public JsonResult Get()
        {
            var feed = _entities.Feeds.Select(f => new Models.Feed
            {
                FeedID = f.FeedID,
                Likes = f.Likes,
                ImageURL = f.ImageURL,
                Username = f.Username,
                Comments = f.Comment.Select(c => new Models.Comment {
                    CommentID = c.CommentID,
                    Text = c.Text
                })
            }).AsEnumerable();

            return this.Json(feed, JsonRequestBehavior.AllowGet);
        }
    }
}
