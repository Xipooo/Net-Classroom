using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WozUCoreDemo.Models;

namespace WozUCoreDemo.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private List<Customer> customers;

        public CustomerController()
        {
            customers = new List<Customer>() {
                new Customer() {
                Id = 1,
                FirstName = "Steve",
                LastName = "Bishop",
                Email = "steve.bishop@woz-u.com"
            }, new Customer() {
                Id = 2,
                FirstName = "Frodo",
                LastName = "Baggins",
                Email = "frodo@TheShire.net"
            }};
        }

        [HttpGet]
        public List<Customer> GetAllCustomers(){
            return customers;
        }

        [HttpGet("{id}")]
        public Customer GetCustomer(int id){
            return customers.FirstOrDefault(cust => cust.Id == id);
        }
    }
}