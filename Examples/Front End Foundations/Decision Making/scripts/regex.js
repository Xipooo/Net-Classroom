// let str = "I love JavaScript!";
// let regexp = /LOVE/i;
// alert(str.search(regexp));

// let str = "Fame is the thirst of our youth";
// let result = str.match(/fame/i);
// console.log(result);
// console.log(result.index);
// console.log(result.input)

// let str = "JavaScript is a programming language";
// let result = str.match(/JAVA(SCRIPT)/i);
// console.log(result[0]);
// console.log(result[1]);

// console.log('12-34-56'.replace(/-/g, ":"));

// let str = "John Doe, John Smith, and John Bull.";
// //console.log(str.replace(/John/g, 'Mr.$&'));
// console.log(str.replace(/(John) (Smith)/, "$2 $1"));

// let str = "Bla-blah-blah";
// console.log(/love/i.test(str));
console.log(/bana?na/.test("banna")); // true
console.log(/bana?na/.test("banaana")); // false
console.log(/bana+na/.test("banana")); // true
console.log(/bana+na/.test("banaaaana")); // true
console.log(/bana+na/.test("banna")); // false
console.log(/bana*na/.test("banna")); // true
console.log(/bana*na/.test("bnana")); // false
console.log(/^ba/.test("banana")); // true
console.log(/na$/.test("banana")); // true
console.log(/^[a-zA-Z]+$/.test("Deep Space 9")); // false
console.log(/^[a-zA-Z]+$/.test("Deep Space Nine")); //false
console.log(/^[a-zA-Z ]+$/.test("Deep Space Nine")); //true
console.log(/^[a-zA-Z0-9 ]+$/.test("Deep Space 9")); //true
console.log(/^[a-zA-Z\d\s]+$/.test("Deep Space 9")); //true
console.log(/^\S+$/.test("Testing Testing 1 2 4")); //false