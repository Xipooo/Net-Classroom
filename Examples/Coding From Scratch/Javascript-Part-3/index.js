var myButton = document.getElementById("submitButton");

myButton.innerText = "That's My Button!";

// myButton.onclick = getValues;

myButton.addEventListener("click", getValues);

var getValues = function() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;

    var output = document.getElementById("output");
    output.innerHTML = "<em id='emphasis'>" + firstName + " " + lastName + " " + email + "</em>";

    var emph = document.getElementById("emphasis");
    emph.innerText = "Overwritten text";
}


//var listItems = document.getElementsByTagName("li");
// function changeValues() {
//     var listItems = document.getElementsByClassName("ha");

//     for (var listItem of listItems) {
//         listItem.innerText = "Hahahaha";
//     }
// }
// var x = 3;
// var y = 5;

// var z = multiplyTwoNumbers(x, y);

// function multiplyTwoNumbers(firstNumber, secondNumber){
//     return firstNumber * secondNumber;
// }
// console.log(loopingThroughArray("Hunter"));

// function loopingThroughArray(name){
//         if (name === "Jacob"){
//             return "Jacob is my brother!";
//         }
//         else if (name === "Hunter"){
//             return "Hunter is my friend!";
//         }
//         else if (name === "John"){
//             return "John is a coworker.";
//         }
//         else if (name === "Paul"){
//             return "I've never met Paul.";
//         }
// }
// var x = 5;
// function addTwoStrings(string1, string2){    
//     return string1 + string2;
// }

// var myString = addTwoString("John ", "Smith");

// console.log(myString);