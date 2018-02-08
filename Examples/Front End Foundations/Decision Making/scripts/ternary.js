let age = 17;
let isOldEnough;

if (age >= 18){
    if (age >= 21) {
        isOldEnough = "You can drink";
    } else {
        isOldEnough = "Welcome to our site";
    }
}
else{
    if (age >= 16){
        isOldEnough = "Welcome to the minor site";
    } else {
        isOldEnough = "Sorry, you must be 18 or older to enter";
    }
}

console.log(
    age >= 18 ? 
        age >= 21 ?
        "You can drink" :
        "Welcome to our site" : 
    age >= 16 ?
        "Welcome to the minor site" :
        "Sorry, you must be 18 or older to enter"
);