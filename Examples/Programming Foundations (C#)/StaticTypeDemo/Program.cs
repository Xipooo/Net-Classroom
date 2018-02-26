using System;

namespace StaticTypeDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine(doStuff(5, 3));
        }
        static int doStuff(int x, int y){
            return x * y;
        }
    }
}
