using System;

namespace methods
{
    class Program
    {
        // Best Practice
        // static int MethodTakingValTypeParameter(int x){
        //     return x++;
        // }
        // static void MethodTakingValTypeParameter(int x){
        //     x++;
        // }

        // static void MethodTakingRefTypeParameter(ref int x){
        //     x++;
        // }

        // Method that takes 'out' parameter
        // static void MultiplyNumbers(int x, int y, out int? result){
        //     result = x * y;
        // }

        public static void TestParamsKeyword(params int [] paramlist){
            foreach (int param in paramlist){
                Console.WriteLine(param);
            }
        }

        static void Main(string[] args)
        {
            TestParamsKeyword(1, 2);
            TestParamsKeyword(1, 2, 3, 4);
            TestParamsKeyword(new int[] { 10, 20, 30});

            // Pass param with 'out'
            // int? result = null;
            // MultiplyNumbers(3, 4, out result);
            // Console.WriteLine(result);

            // By Ref vs By Val
            // int a = 10;
            // MethodTakingValTypeParameter(a);
            // Console.WriteLine(a);

            // int b = 10;
            // MethodTakingRefTypeParameter(ref b);
            // Console.WriteLine(b);

            // Method used on seperate class
            // int value1 = 10;
            // int value2 = 20;
            // MyMath math = new MyMath();
            // MyMath someMath = new MyMath();
            // int result = math.doMath(value1, value2);
            // int result2 = math.doMath(3, 6);

            // Console.WriteLine(result);
            // Console.WriteLine(result2);
        }
    }
}
