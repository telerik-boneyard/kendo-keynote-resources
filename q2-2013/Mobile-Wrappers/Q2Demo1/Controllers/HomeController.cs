using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Q2Demo1.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View(getPeople());
        }

        public ActionResult People()
        {
            return View("Index", getPeople());
        }

        public ActionResult Friends()
        {
            return View(getPeople().Where(p => p.Friend == true).ToList());
        }


        private IList<Person> getPeople() 
        { 
            IList<Person> people = new List<Person>();
            people.Add(new Person() { Name = "Burke Holland", Friend = true });
            people.Add(new Person() { Name = "Derick Bailey", Friend = true });
            people.Add(new Person() { Name = "Jim Cowart", Friend = true });
            people.Add(new Person() { Name = "Todd Anglin", Friend = true });
            people.Add(new Person() { Name = "David Tenant", Friend = false });
            people.Add(new Person() { Name = "Christopher Eccelston", Friend = false });
            people.Add(new Person() { Name = "Matt Smith", Friend = false });
            people.Add(new Person() { Name = "John Pertwee", Friend = false });
            return people;
        }
    }
    
    public class Person {
        public string Name { get; set; }
        public bool Friend { get; set; }
    }
}
