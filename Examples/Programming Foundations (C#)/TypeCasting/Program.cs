using System;

namespace TypeCasting
{
    class Program
    {
        static void Main(string[] args)
        {
            // long int64Bits = 0;
            // int int32Bits = 42;

            // int64Bits = int32Bits;
            // int32Bits = (int)int64Bits;

            // Mammal mammal = null;
            // Dog dog = new Dog();

            // mammal = dog;
            // Console.WriteLine(mammal);
            int int32Bits = 0;
            long int64Bits = int.MaxValue + 1L;
            if (int64Bits <= int.MaxValue)
            {
                int32Bits = (int)int64Bits;
            }
            Console.WriteLine("Max Int: " + int.MaxValue);
            Console.WriteLine("Max Int + 1: " + int32Bits);

            int answerToEverything = 42;
            const double PI = 3.141592;
            bool lateForLunch = true;

            Console.WriteLine(answerToEverything.ToString());
            Console.WriteLine(PI.ToString());
            Console.WriteLine(lateForLunch.ToString());

            DateTime oneSmallStepForMan = Convert.ToDateTime("2/12/2018");

        }
    }

    class Mammal { }
    class Dog : Mammal { }
}
