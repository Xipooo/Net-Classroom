using System;
using System.Collections.Generic;

namespace loopconstructs
{
    class Program
    {
        static void Main(string[] args)
        {
            // While Loop
            int i = 0;
            while (i < 10){
                Console.WriteLine(i.ToString());
                ++i;
            }

            // Do While Loop
            int x = 0;
            do {
                Console.WriteLine(x.ToString());
                ++x;
            } while(x < 10);

            // ForEach Loop
            string[] rainbow = new string[] {
                "Red", "Orange", "Yellow", "Green", "Blue", "Violet"
            };
            foreach (string color in rainbow){
                Console.WriteLine(color);
            }

        }
    }
}
