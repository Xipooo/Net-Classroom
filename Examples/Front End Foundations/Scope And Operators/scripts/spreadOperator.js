let midArray = [4, 5];
let normArray = [1, 2, 3, ...midArray, 6, 7];

console.log(normArray);

let arr = ["a", "b", "c", "d"];
let arr2 = ["e", "f", "g", "h"];
let arr3 = [...arr, ...arr2];

console.log(arr3);

let obj1 = { name: "John", age: 29 };
let obj2 = { name: "Alice", email: "alice@email.com" };
let copyObj = { ...obj1 };

let mergeObj = { ...obj1, ...obj2, email: "steve@codercamps.com" };
console.log(mergeObj);

let x = 3;
let y = x;
y++;
console.log("x: " + x + " y: " + y);

let person1 = { name: "Steve", email: "steve@codercamps.com"};
let person2 = { ...person1};
person2.email = "steve.bishop@codercamps.com";
console.log("Person1: " + person1.email + " Person2: " + person2.email);
