//number :: integer,floating point values
let nm: number[] = [12, 67235];

//string
let st: string = "wrokign";

//boolean
let bl: boolean = true;

//any
let an = 232
//an = 'slkfjlkas' //error cannot assign string on number type
let an2: any = 232
//an2 = "dahlkfs" //it will not run

//void return type
function fn(message: number): void {
    console.log(message);
}

console.log("--------------Interface-----------------")
//interface
interface Children {
    name?: string;
    isStudent: boolean;
    rollno: number | string;
    display(): void;
}
//we must implement an interface and extend a class
//impliments
class student implements Children {
    name?: string;
    isStudent: boolean;
    rollno: string;
    constructor(isStudent: boolean, rollno: string, name?: string) {
        this.name = name;
        this.isStudent = isStudent;
        this.rollno = rollno;
    }
    display(): void {
        console.log(this.name)
    }
}
const s1 = new student(true, "23")
//extends keyword is used to inherite the parent properties and can have its different properties.
//its important to set super constructor which the values
//exends
class topper extends student {
    result: number;
    constructor(name: string, isStudent: boolean, rollno: string, result: number) {
        super(isStudent, rollno, name)
        this.result = result;
    }
    working(): void {
        console.log("Its working")
    }
}

//abstract classes are mean to serve as a base class to child class
//it can have abstract methods or concrete methods
console.log("--------------Abstract-----------------")
abstract class abstract1 {
    abstract absMethod(): number;
    normalMethod(): void {
        console.log("devender dhyani")
    }
}




//optional property
abstract class Animal {
    // Abstract optional property
    abstract species?: string;

    // Concrete method
    makeSound(): void {
        console.log('Some generic animal sound');
    }
}

class Cat extends Animal {
    // Implementing the abstract optional property
    species: string;

    constructor(species: string) {
        super();
        this.species = species; // Optionally initialize the property
    }

    meow(): void {
        console.log('Meow!');
    }
}

const cat = new Cat('Siamese');
console.log(cat.species); // Outputs: Siamese
cat.makeSound(); // Outputs: Some generic animal sound
cat.meow(); // Outputs: Meow!


//enums
//is a way to define a set of named constants. Enums are useful for representing a collection of related values, such as a list of options, status codes, or categories. They provide a way to handle these values in a more readable and maintainable way compared to plain constants.
enum Quarters {
    Jan = "March",
    April = "June",
    July = "September",
    Oct = "December"
}
//type
interface intTy{
    name: string,
    age: number
}
interface inttz {
    total:number
    working():void;
}
type ty1 = intTy&inttz;
let x: ty1 = {
    name:"devender",
    age:12,
    total:128734273,
    working(){}
}
class ty2class implements ty1{
    name: string;
    age: number;
    total:number;
    constructor(name:string,age:number,total:number)
    {
        this.name = name;
        this.age = age;
        this.total = total
    }
    working(): void {
        
    }
}

//touples
type Point = [number, number];
const point: Point = [10, 20];







