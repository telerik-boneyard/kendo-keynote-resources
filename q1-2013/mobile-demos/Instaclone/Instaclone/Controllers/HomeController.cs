using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Instaclone.Controllers
{
    public class HomeController : Controller
    {
        private Data.Entities _entities = new Data.Entities();

        public ActionResult Index()
        {
            var feed = _entities.Feeds.Select(f => new Models.Feed
            {
                FeedID = f.FeedID,
                Likes = f.Likes,
                ImageURL = f.ImageURL,
                Username = f.Username,
                Comments = f.Comment.Select(c => new Models.Comment
                {
                    CommentID = c.CommentID,
                    Text = c.Text
                })
            }).AsEnumerable();

            return View(feed);
        }

    }
}
