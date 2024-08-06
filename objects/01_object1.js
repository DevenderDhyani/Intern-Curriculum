// datatypes are basically 2 types in js
//1. primitive : string, number, bigint, undefined, symbol, null, boolean
//2. non-premitive : objects, arrays, 
// we will be discussing about non-primitive

// list of non primitive datatypes
//array, objects, linkedlist
const obj1 = {
    name : "Devender",
    id : 10,
    course : "btech",
    stydying: function(){
        console.log(`${this.name} having id ${this.id} is the student of ${this.rollno} studying CSE`)
    },
    greet(){
        console.log("greetings from devender dhyani")
    }
}

// to acc  ess a key in the object
console.log(obj1.name)
console.log(obj1["name"])
obj1.stydying()

console.log("--------------------------------")
const greet = function greetFunction(name) {
    if(name=='dev'){
        return "dev"
    }else{
        return "devinder"
    }
    
  };
  
  console.log(greet("Charlie"));  // Output: Hello, Charlie!

  console.log(greet("dev"))

//we can create javascript object using 3 ways
//1. 'object literals' that we have studies before
//2. using new keyword
const obj2  = new Object();
obj2.dev = "dhyani"
console.log(obj2)
//3. using object constructor function
function person(name,age) {
    this.Name = name;
    this.Age = age;
}
const p1 = new person("naveen",25)
console.log("This is person object name: "+p1.to)
console.log("This is person object age: "+p1.Age)
const p2 = new person("deepak",27)
console.log("This is person object name: "+p2.Name)
console.log("This is person object age: "+p2.Age)

console.log("------------------assign------------------")
//object.assign {it stores obj1(source) to obj2(target)}
Object.assign(obj2,obj1)

console.log("------------------create------------------")
//object.create {to create a new object by existing bassically copying an object into new object or we can create a empty object by passing null}
const obj3 = Object.create(obj2)
console.log(obj3.toString())

console.log("------------------difference between Assign and Create in objects------------------")

console.log("------------------Usecase of Assign------------------")
let target = { a: 1 };
let source1 = { b: 2 };
let source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target); // Outputs: { a: 1, b: 2, c: 3 }

console.log("------------------Usecase of Create------------------")
let proto = {
    greet: function() {
      console.log('Hello!');
    }
  };
  
  let obj = Object.create(proto);
  obj.greet(); // Outputs: Hello!
  
  // Adding properties during creation
  let newObj = Object.create(proto, {
    name: {
      value: 'Alice',
      writable: true,
      enumerable: true,
      configurable: true
    }
  });
  
  console.log(newObj.name); // Outputs: Alice
  newObj.greet(); // Outputs: Hello!
  


console.log("------------------entries-----------------")
//object.entries {returns an array of key value pairs}
const entryArr = Object.entries(obj1)
console.log(entryArr)

console.log("------------------fromEntries-----------------")
//object.fromEnties {returns an object from existing set of key value pairs}
const obj4 = Object.fromEntries(entryArr)
console.log(obj4)

console.log("------------------Keys-----------------")
//object.keys {to create array of keys using existing obj}
const arrKey = Object.keys(entryArr[0])
console.log(arrKey)

console.log("------------------Values-----------------")
//object.values {returns an array of values}
const arrValues = Object.values(entryArr[0])

console.log(arrValues[1])
// console.log(arrValues[3]())


//Object key as an object
let objTest = {
    name : "devender"
}
let objTest2 = {
    //linking objTest with objTest2
    [objTest] : "Surender",
    //linking objTest with different key
    objcts : objTest,
    nam : "Sudheer",
    8 : "Jatin"
}
console.log("----------------------")
console.log(objTest2[objTest])
console.log(objTest2.objcts)




console.log("------------------prototype---------------------")
// Prototypes provide a way to share properties and methods between objects.
// Prototype Chain: When a property is not found on an object, JavaScript looks up the prototype chain.
// Creating Prototypes: Use object literals, constructor functions, or ES6 classes.
console.log("---------------------object literal--------------------")
let person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

let anotherPerson = Object.create(person);
anotherPerson.name = "Bob";
anotherPerson.greet(); // Output: "Hello, Bob"

console.log("---------------------CONSTRUCTOR FUNCTIONS--------------------")
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

let alice = new Person("Alice");
alice.greet(); // Output: "Hello, Alice"

console.log("---------------------Class ES6 --------------------")
//ES6 introduced class syntax, which is syntactic sugar over JavaScript’s existing prototype-based inheritance.
class Person {
  constructor(name) {
      this.name = name;
  }

  greet() {
      console.log("Hello, " + this.name);
  }
}

let bob = new Person("Bob");
bob.greet(); // Output: "Hello, Bob"


// Prototype Methods: Access and modify prototypes using methods like Object.create(), Object.getPrototypeOf(), and Object.setPrototypeOf().

let objproto = {};
let protomain = { hello: "world" };

Object.setPrototypeOf(objproto, protomain);
console.log(Object.getPrototypeOf(objproto)); // Output: { hello: "world" }
console.log(objproto.hello); // Output: "world" (inherited from prototype)





