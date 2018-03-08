using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WozUCoreDemo.Models;

namespace WozUCoreDemo.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        // private List<Customer> customers;
        private WozUContext _context;
        public CustomerController(WozUContext context)
        {
            _context = context;
            // customers = new List<Customer>() {
            //     new Customer() {
            //     Id = 1,
            //     FirstName = "Steve",
            //     LastName = "Bishop",
            //     Email = "steve.bishop@woz-u.com"
            // }, new Customer() {
            //     Id = 2,
            //     FirstName = "Frodo",
            //     LastName = "Baggins",
            //     Email = "frodo@TheShire.net"
            // }};
        }

        [HttpGet("GetAll")]
        public IActionResult GetAllCustomers()
        {
            return base.Ok(_context.Customers);
        }

        [HttpGet("GetCustomer")]
        public IActionResult GetCustomer([FromQuery]int id)
        {
            Customer customer = _context.Customers.FirstOrDefault(cust => cust.Id == id);
            if (customer != null)
            {
                return base.Json(customer);
            }
            return base.NotFound();
        }

        [HttpGet("FindCustomers")]
        public IActionResult FindCustomers([FromQuery]string email)
        {
            return Json(_context.Customers.Where(cust => cust.Email.Contains(email)));
        }

        [HttpPost("AddCustomer")]
        public IActionResult AddCustomer([FromBody]Customer newCustomer)
        {
            if (newCustomer != null)
            {
                try
                {
                    _context.Customers.Add(newCustomer);
                    _context.SaveChanges();
                    return Created($"/GetCustomer?id={newCustomer.Id}", newCustomer);
                }
                catch (System.Exception ex)
                {
                    return base.StatusCode(500, ex.Message);
                }
            }
            return base.BadRequest();
        }

        [HttpPut("UpdateCustomer/{id}")]
        public IActionResult UpdateCustomer(int id, [FromBody]Customer updatedCustomer)
        {
            Customer customer = _context.Customers.FirstOrDefault(c => c.Id == id);
            if (customer != null)
            {
                try
                {
                    customer.FirstName = updatedCustomer.FirstName;
                    customer.LastName = updatedCustomer.LastName;
                    customer.Email = updatedCustomer.Email;
                    _context.SaveChanges();
                    return NoContent();
                }
                catch (Exception exception)
                {
                    return BadRequest(exception.Message);
                }
            }
            return NotFound();
        }

        [HttpDelete("DeleteCustomer/{id}")]
        public IActionResult DeleteCustomer(int id)
        {
            Customer customer = _context.Customers.FirstOrDefault(cust => cust.Id == id);
            if (customer != null)
            {
                try
                {
                    _context.Customers.Remove(customer);
                    _context.SaveChanges();
                    return NoContent();
                }
                catch (Exception ex)
                {
                    return base.StatusCode(500, ex.Message);
                }
            }
            return NotFound();
        }
    }
}