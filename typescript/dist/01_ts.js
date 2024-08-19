"use strict";
let nm = [12, 67235];
let st = "wrokign";
let bl = true;
let an = 232;
let an2 = 232;
function fn(message) {
    console.log(message);
}
console.log("--------------Interface-----------------");
class student {
    constructor(isStudent, rollno, name) {
        this.name = name;
        this.isStudent = isStudent;
        this.rollno = rollno;
    }
    display() {
        console.log(this.name);
    }
}
const s1 = new student(true, "23");
class topper extends student {
    constructor(name, isStudent, rollno, result) {
        super(isStudent, rollno, name);
        this.result = result;
    }
    working() {
        console.log("Its working");
    }
}
console.log("--------------Abstract-----------------");
class abstract1 {
    normalMethod() {
        console.log("devender dhyani");
    }
}
class Animal {
    makeSound() {
        console.log('Some generic animal sound');
    }
}
class Cat extends Animal {
    constructor(species) {
        super();
        this.species = species;
    }
    meow() {
        console.log('Meow!');
    }
}
const cat = new Cat('Siamese');
console.log(cat.species);
cat.makeSound();
cat.meow();
var Quarters;
(function (Quarters) {
    Quarters["Jan"] = "March";
    Quarters["April"] = "June";
    Quarters["July"] = "September";
    Quarters["Oct"] = "December";
})(Quarters || (Quarters = {}));
let x = {
    name: "devender",
    age: 12,
    total: 128734273,
    working() { }
};
class ty2class {
    constructor(name, age, total) {
        this.name = name;
        this.age = age;
        this.total = total;
    }
    working() {
    }
}
const point = [10, 20];
function working12() {
    console.log("Working");
}
working12();
//# sourceMappingURL=01_ts.js.map