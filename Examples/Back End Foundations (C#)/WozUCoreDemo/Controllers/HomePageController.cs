using Microsoft.AspNetCore.Mvc;

namespace WozUCoreDemo.Controllers
{
    public class HomePageController : Controller
    {
        public IActionResult Index(){
            return View();
        }
    }
}