using Microsoft.EntityFrameworkCore;

namespace WozUCoreDemo.Models
{
    public class WozUContext : DbContext
    {
        public WozUContext(DbContextOptions<WozUContext> options) : base(options) {}

        public DbSet<Customer> Customers { get; set; }
    }
}