using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Instaclone.Controllers
{
    [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
    public class CommentsController : Controller
    {
        private Data.Entities _entities = new Data.Entities();

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Get(int id)
        {
            var comments = _entities.Comments.Where(c => c.FeedID == id)
                .Select(c => new Models.Comment
            {
                CommentID = c.CommentID,
                Text = c.Text
            }).AsEnumerable();

            return this.Json(comments, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Add(string text, int feedId)
        {
            var comment = new Data.Comment();
            comment.FeedID = feedId;
            comment.Text = text;

            _entities.Comments.Add(comment);

            _entities.SaveChanges();

            return this.Json(true);
        }

    }
}
