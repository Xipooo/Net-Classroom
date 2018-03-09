using System.Collections.Generic;
using System.Linq;
using WozUCoreDemo.Models;

namespace WozUCoreDemo.ViewModels
{
    public class CustomerPageIndexViewModel
    {
        public List<Customer> Customers { get; set; }
        public Customer FirstCustomer
        {
            get
            {
                return Customers.FirstOrDefault();
            }
        }
    }
}