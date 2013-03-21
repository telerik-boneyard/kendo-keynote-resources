using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Instaclone.Models
{
    public class Feed
    {
        public int FeedID { get; set; }
        public string Username { get; set; }
        public string ImageURL { get; set; }
        public int Likes { get; set; }
        public IEnumerable<Models.Comment> Comments { get; set; }
    }
}