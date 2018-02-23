using System;

namespace BooleanLogic
{
    class Program
    {
        static void Main(string[] args)
        {
            //Boolean Values
            bool isComplete = true;
            bool isPendingApproval = false;
            bool hasGoneBad = false;
            bool isOfVotingAge = true;
            bool hasVotedBefore = false;

            Console.WriteLine(isComplete);
            Console.WriteLine(isPendingApproval);
            Console.WriteLine(hasGoneBad);

            //Boolean Operators
            Console.WriteLine(isComplete & isPendingApproval);
            Console.WriteLine(isPendingApproval | !isPendingApproval);
            Console.WriteLine(hasGoneBad ^ isComplete);
            Console.WriteLine(!isOfVotingAge & hasVotedBefore);
            Console.WriteLine(hasVotedBefore);

            //Short Circuit
            int x1 = 10;
            bool result1 = true | ++x1 == 11;
            Console.WriteLine(result1);
            Console.WriteLine(x1);

            int x2 = 10;
            bool result2 = true || ++x2 == 11;
            Console.WriteLine(result2);
            Console.WriteLine(x2);

            //Relational Operators
            bool result = 5 == (3 + 2);
            Console.WriteLine(result);

            int count = "Hello World!".Length;
            Console.WriteLine(count);
            Console.WriteLine(count > 100);
        }
    }
}
