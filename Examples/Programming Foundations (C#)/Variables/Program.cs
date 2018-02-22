using System;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter your age:");
            string enteredValue = Console.ReadLine();
            int convertedAge = Int32.Parse(enteredValue);

            for (int i = 0; i < convertedAge; i++)
            {
                // if (i % 2 == 0)
                // {
                Console.WriteLine(i.ToString() + " is " + (i % 2 == 0 ? "Even" : "Odd"));
                // }

            }
        }
    }
}
