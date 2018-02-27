using System;

namespace DecisionConstructs
{
    class Program
    {
        static void Main(string[] args)
        {

            int max = 5;
            int[,] array = new int[max, max];
            for (int i = 0; i < max; i++)
            {
                for (int j = 0; j < max; j++)
                {
                    array[i, j] = i * j;
                }
            }



            int match = 12;
            for (int i = 0; i < max; i++)
            {
                for (int j = 0; j < max; j++)
                {
                    Console.WriteLine(i + " * " + j + " = " + array[i, j]);
                    if (array[i, j] == match)
                    {
                        Console.WriteLine("Match found, leaving nested loops");
                        goto end_of_loop;
                    }
                }
            }



            // int caseSwitch = 5;

            // switch(caseSwitch)
            // {
            //     case 1:
            //         Console.WriteLine("Case 1");
            //         return;
            //     case 2:
            //         Console.WriteLine("Case 2");
            //         return;
            //     case 3:
            //         Console.WriteLine("Case 3");
            //         return;
            //     default:
            //         Console.WriteLine("Default case");
            //         break;
            // }

            // Console.WriteLine("One last thing");


            // for (int i = 0; i < 20; i++){
            //     Console.WriteLine(i.ToString());
            //     if (i == 5){
            //         break;
            //     }
            // }

            // int sum = 0;
            // for (int i = 0; i < 20; i++){
            //     if (i % 2 == 0){
            //         continue;
            //     }
            //     sum += i;
            // }

        end_of_loop:
            Console.WriteLine("Done");
        }
    }
}
