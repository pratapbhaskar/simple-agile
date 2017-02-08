using Microsoft.AspNetCore.Mvc;

namespace SimpleAgile.Web.UI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
