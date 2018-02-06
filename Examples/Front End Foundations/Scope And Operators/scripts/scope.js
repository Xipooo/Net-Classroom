let global = "Global scope";

function myFunction(){
    let global = "Local scope";
    var local = "My Local Scope";
    console.log(global);
    console.log(local);
}

//local = "My Global Scope";
myFunction();
console.log(global);
//console.log(local);