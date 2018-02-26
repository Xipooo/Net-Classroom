using System;

namespace statements
{
    class Program
    {
        static void Main(string[] args)
        {
            int sum = 0;
            int count = 1;
            while (count <= 10){
                sum = sum + count;
                count = count + 1;
                Console.WriteLine(sum);
            }
            Console.WriteLine("Total is: " + sum);

            int myData5 = 3;
            int myOtherData2 = 4;
            int c = 5;
            int d = 6;

            Console.WriteLine(myData5 + myOtherData2 * c + d);
            Console.WriteLine((myData5 + myOtherData2) * (c + d));
            Console.WriteLine(myData5 + (myOtherData2 * c) + d);
        }
    }
}
