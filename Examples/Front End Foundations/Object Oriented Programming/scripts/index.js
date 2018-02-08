// function aClass(name, age){
//     this.name = name;
//     this.age = age;
// }
// aClass.prototype.sayName = function() {
//     return this.name;
// }
// aClass.prototype.sayAge = function() {
//     return this.age;
// }

// let myInstance = new aClass("andrew", 30);
// console.log(myInstance.sayName());

class aClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        return this.name;
    }
    sayAge() {
        return this.age;
    }
}
let myInstance = new aClass("andrew", 30);
let myOtherInstance = new aClass("mike", 28);
console.log(myInstance.sayName());

class Car {
    constructor(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }
    get make() {
        return this._make;
    }
    set make(value) {
        let possibleMakes = ["Honda", "Toyota", "Nissan"];

        if (possibleMakes.includes(value)) {
            this._make = value;
        }
        else {
            //console.log(value + " is not a valid make");
            throw Error(value + " is not a valid make");
        }
    }

    get description() {
        return this._year + " " + this._make + " " + this._model;
    }
}

let myCar = new Car("Nissan", "Rogue", 2017);
console.log(myCar.make);

myCar.description = "My Description";
console.log(myCar.description);

try {
    myCar.make = prompt("What is the make?");
    console.log(myCar.make);
}
catch (err) {
    console.log(err.message);
    alert(err.message);
}