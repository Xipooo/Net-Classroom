using System.ComponentModel.DataAnnotations;

namespace WozUCoreDemo.Models
{
    public class Customer
    {
        public int Id { get; set; }

        [Display(Name="First Name")]
        [MinLength(3), MaxLength(25), Required]
        public string FirstName { get; set; }

        [Display(Name="Last Name")]
        [MinLength(3), MaxLength(25), Required]
        public string LastName { get; set; }

        [EmailAddress]
        public string Email { get; set; }
    }
}