
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

// In this example:
// Greeter is a type with a callable signature (message: string): void and a property greeting.
// greeter is an instance of this type, and it behaves like a function (because of the callable signature) and also has a property greeting.

type Greeter = {
    (message: string): void;  // Callable signature
    greeting: string;         // Property
};

const greeter: Greeter = (message: string) => {
    console.log(`${greeter.greeting}, ${message}`);
};

greeter.greeting = "Hello";
greeter("World"); // Output: Hello, World