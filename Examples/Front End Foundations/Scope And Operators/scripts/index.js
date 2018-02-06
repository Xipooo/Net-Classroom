const myFunction = (param1, param2) => param1 + param2;
const timesThree = (num) => num * 3;
const multiplyTwoNumbers = (a, b) => a * b;
const defParam = (a, b=20) => {
    return a * b;
}

var x = 6;
var y = 9;

const multiplyXandY = () => x * y;

console.log(myFunction(2, 4));
console.log(timesThree(4));
console.log(multiplyXandY());
console.log(multiplyTwoNumbers(7, 12));
console.log(defParam(4));
