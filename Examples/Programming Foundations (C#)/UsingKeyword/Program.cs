using System;
using System.IO;

namespace UsingKeyword
{
    class Program
    {
        static void Main(string[] args)
        {

            string[] jabberwocky = {
            "The time has come the Walrus said",
            "To talk of many things",
            "Of shoes and ships and sealing-wax",
            "Of cabbages and kings",
            "And why the sea is boiling hot",
            "And whether pigs have wings"  };

            string path = Directory.GetCurrentDirectory() + "\\myfile.txt";

            // StreamWriter sw = null;
            //
            // try
            // {
            //     sw = new StreamWriter(path);
            //     foreach(string line in jabberwocky){
            //         sw.WriteLine(line);
            //     }
            // }
            // finally {
            //     if (sw != null) {
            //         sw.Dispose();
            //     }
            // }

            using (StreamWriter sw = new StreamWriter(path))
            {
                foreach(string line in jabberwocky){
                    sw.WriteLine(line);
                }
            }

            using (StreamReader sr = new StreamReader(path)){
                string line;
                while ((line = sr.ReadLine()) != null){
                    Console.WriteLine(line);
                }
            }
        }
    }
}
