using System;

namespace Operators
{
    class Program
    {
        static void Main(string[] args)
        {
            //Unary Operators
            int x = 10;
            Console.WriteLine(-x);
            Console.WriteLine(++x);
            Console.WriteLine(~x);

            bool b = true;
            Console.WriteLine(!b);

            //Binary Operators
            int a = 3;
            int c = 4;
            
            int sum = a + c;
            Console.WriteLine(sum);

            int y = 10;
            int z = 4;
            int remainder = y % z;
            Console.WriteLine(remainder);

            //Ternary Operator
            Random random = new Random();

            for (int i = 0; i < 10; i++){
                int randomInt = random.Next(1, 11);
                string result = (randomInt % 2 == 0) ? "Even" : "Odd";
                Console.WriteLine(randomInt + " is " + result);
            }
        }
    }
}
