namespace methods
{
    internal class MyMath
    {
        internal int doMath(int x, int y){
            return MultiplyTwoNumbers(x, y);
        }

        private int AddTwoNumbers(int x, int y){
            return x + y;
        }

        private int MultiplyTwoNumbers(int x, int y){
            return x * y;
        }
    }
}