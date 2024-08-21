
//creating function
function working12(name:string):void{
    console.log("Working");
};

//we can not define same function overloaded with different implimentation..
        // function working12(name:string):void{
        //     console.log("working2");
        //};

// overloading is allowed while implimentation is not there
// Function overload signatures
function greet(person: string): string;
function greet(person: string, age?: number): string;

function greet(person: string, age?: number): string{
    return person+age
};

// Function implementation
// function greet(person: string, age?: number): string {
//     if (age !== undefined) {
//         console.log("true");
//         return `Hello, ${person}. You are ${age} years old.`;
//     } else {
//         return `Hello, ${person}.`;
//     }
// }

// Usage examples         // Outputs: Hello, Alice.
console.log(greet("Bob", 30));        // Outputs: true
                                    // Outputs: Hello, Bob. You are 30 years old.



console.log("-------------overloading-------------")
// //overloading

// In TypeScript, you can achieve function overloading similar to Java, but with some differences due to the nature of the language. TypeScript allows you to define multiple function signatures for a single function name, which is akin to Java's method overloading. However, TypeScript’s function overloading is primarily a design-time feature and doesn’t affect the runtime behavior.

// Here’s how you can use function overloading in TypeScript:

// Define Multiple Signatures:
// You provide multiple signatures for the function. Each signature describes a different way the function can be called.

// Implement the Function:
// You then provide a single implementation that handles all the different cases. The implementation must be able to handle all the cases defined by the signatures.





// function add(v1:string,v2:string):string;
// function add(v1:number,v2:string):number;


//wat1 : using union operator and perfact condition to check the type of arguments recieved
function add(v1:number | string,v2:string):string|number{
    //condition check
    if(typeof v1 == 'number' && typeof v2 == 'number'){
        return v1+v2;
    }
    return v1+' '+v2
}

//way2: using function signature

console.log("------hybrid typing-----")

// This is only one type of example in which we can use it like a function. It defines a structure.
// Greeter is a type with a callable signature (message: string): void and a property greeting.
// greeter is an instance of this type, and it behaves like a function (because of the callable signature) and also has a property greeting.

//An anonymous function, on the other hand, is a function expression that does not have a name. It can be assigned to a variable or passed as an argument, but it is not used to define the structure of a type.

//Deffination : In TypeScript, "hybrid types" refer to types that combine multiple roles or behaviors into a single type. This usually involves creating types or interfaces that mix both callable signatures and other properties or methods, or combining various types into one cohesive unit.
type Greeter = {
    (message: string): void;  // Callable signature
    greeting: string;         // Property
};

const greeter: Greeter = (message: string) => {
    console.log(`${greeter.greeting}, ${message}`);
};

greeter.greeting = "Hello";
greeter("World"); // Output: Hello, World


//example 2 of hybrid typing
class Base {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

type HybridClass = Base & {
    logName: () => void;
    additionalProperty: string;
};

class HybridClassImpl extends Base implements HybridClass {
    additionalProperty: string;
    constructor(name: string, additionalProperty: string) {
        super(name);
        this.additionalProperty = additionalProperty;
    }
    logName() {
        console.log(this.name);
    }
}

const hybridInstance = new HybridClassImpl("Hybrid", "Extra");
hybridInstance.logName(); // Output: Hybrid
console.log(hybridInstance.additionalProperty); // Output: Extra


const testing:HybridClass ={
    name : "Gaurav",
    additionalProperty : "Joshi",
    logName() {
        console.log(`${this.name} ${this.additionalProperty} is a good boy`)
    },
}
testing.logName()