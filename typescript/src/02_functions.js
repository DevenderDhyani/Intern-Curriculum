var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//creating function
function working12(name) {
    console.log("Working");
}
;
function greet(person, age) {
    return person + age;
}
;
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
console.log(greet("Bob", 30)); // Outputs: true
// Outputs: Hello, Bob. You are 30 years old.
console.log("-------------overloading-------------");
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
function add(v1, v2) {
    //condition check
    if (typeof v1 == 'number' && typeof v2 == 'number') {
        return v1 + v2;
    }
    return v1 + ' ' + v2;
}
//way2: using function signature
console.log("------hybrid typing-----");
var greeter = function (message) {
    console.log("".concat(greeter.greeting, ", ").concat(message));
};
greeter.greeting = "Hello";
greeter("World"); // Output: Hello, World
//example 2 of hybrid typing
var Base = /** @class */ (function () {
    function Base(name) {
        this.name = name;
    }
    return Base;
}());
var HybridClassImpl = /** @class */ (function (_super) {
    __extends(HybridClassImpl, _super);
    function HybridClassImpl(name, additionalProperty) {
        var _this = _super.call(this, name) || this;
        _this.additionalProperty = additionalProperty;
        return _this;
    }
    HybridClassImpl.prototype.logName = function () {
        console.log(this.name);
    };
    return HybridClassImpl;
}(Base));
var hybridInstance = new HybridClassImpl("Hybrid", "Extra");
hybridInstance.logName(); // Output: Hybrid
console.log(hybridInstance.additionalProperty); // Output: Extra
var testing = {
    name: "devender",
    additionalProperty: "dhyani",
    logName: function () {
        console.log("".concat(this.name, " is a good boy"));
    },
};
