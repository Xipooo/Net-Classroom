using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using WozUCoreDemo.Models;
using Pomelo.EntityFrameworkCore.MySql;

namespace WozUCoreDemo
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<WozUContext>(options => 
                options.UseMySql("server=localhost;database=wozucoredemo;uid=coreuser;pwd=Password1"));
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            Initialize(app.ApplicationServices);
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();

            app.UseMvc(
                (config) =>
                {
                    config.MapRoute("Default", "{controller=HomePage}/{action=Index}/{id?}");
                }
            );
        }

        public static void Initialize(IServiceProvider serviceProvider)
        {
            try
            {
                var context = serviceProvider.GetRequiredService<WozUContext>();
                if (!context.Customers.Any())
                {
                    context.Customers.Add(
                        new Customer()
                        {
                            FirstName = "Frodo",
                            LastName = "Baggins",
                            Email = "frodo@TheShire.net"
                        });
                    context.Customers.Add(
                        new Customer()
                        {
                            FirstName = "Steve",
                            LastName = "Bishop",
                            Email = "steve.bishop@Woz-U.com"
                        }
                    );
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Could not seed data");
                Console.WriteLine(ex.Message);
            }
        }
    }
}
