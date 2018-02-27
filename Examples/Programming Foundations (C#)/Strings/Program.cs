using System;
using System.Text;

namespace strings
{
    class Program
    {
        static void Main(string[] args)
        {
            string str1 = null;
            Console.WriteLine(str1 == null ? "null" : "not null");

            string str2 = System.String.Empty;
            Console.WriteLine(str2 == null ? "null" : "not null");
            Console.WriteLine(str2.Length);

            string str3 = "Hello World";
            Console.WriteLine(str3);
            Console.WriteLine(str3[6]);

            char[] chars = { 'f', 'u', 'n' };
            string str5 = new string(chars);
            Console.WriteLine(str5);

            Console.WriteLine(str5.ToUpper());
            Console.WriteLine(str5.ToUpper() == "FUN");

            str3 = str3 + " " + str5;
            Console.WriteLine(str3);

            string originalString = "Hello World";
            StringBuilder sb = new StringBuilder(originalString);

            sb[0] = 'J';
            sb.Append("!");
            Console.WriteLine(sb.ToString());

        }
    }
}
