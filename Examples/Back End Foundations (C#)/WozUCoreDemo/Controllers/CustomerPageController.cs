using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WozUCoreDemo.Models;
using WozUCoreDemo.ViewModels;

namespace WozUCoreDemo.Controllers
{
    public class CustomerPageController : Controller
    {
        private readonly WozUContext _context;

        public CustomerPageController(WozUContext context)
        {
            _context = context;
        }

        public IActionResult Index(){
            var vm = new CustomerPageIndexViewModel {
                Customers = _context.Customers.ToList()
            };
            return View(vm);
        }

        [HttpGet]
        public IActionResult Edit(int id){
            Customer customer = _context.Customers.FirstOrDefault(c => c.Id == id);
            return View(customer);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Update(Customer customer){
            Customer oldCustomer = _context.Customers.FirstOrDefault(c => c.Id == customer.Id);
            oldCustomer.FirstName = customer.FirstName;
            oldCustomer.LastName = customer.LastName;
            oldCustomer.Email = customer.Email;

            _context.Customers.Update(oldCustomer);
            _context.SaveChanges();

            return base.RedirectToAction("Index");
        }
    }
}