const newString = "This is a string.";
let strings = "This is another string.";
let myNumber = 12;
let myArray = [];
let myString;

strings = null;
console.log("strings: " + strings);
strings = "";
console.log("strings: " + strings);

myNumber = undefined;

console.log(myString);

strings = "The String";

console.log(typeof strings);
console.log(typeof myNumber);
console.log(typeof myArray);