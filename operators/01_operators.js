// =: Assigns the value of the right operand to the left operand.
// +=: Adds the right operand to the left operand and assigns the result to the left operand.
// -=: Subtracts the right operand from the left operand and assigns the result to the left operand.
// *=: Multiplies the left operand by the right operand and assigns the result to the left operand.
// /=: Divides the left operand by the right operand and assigns the result to the left operand.
// %=: Assigns the remainder of the division of the left operand by the right operand to the left operand.
// **=: Raises the left operand to the power of the right operand and assigns the result to the left operand.
// <<=: Performs a left shift on the left operand by the number of bits specified by the right operand and assigns the result to the left operand.
// >>=: Performs a signed right shift on the left operand by the number of bits specified by the right operand and assigns the result to the left operand.
// >>>=: Performs an unsigned right shift on the left operand by the number of bits specified by the right operand and assigns the result to the left operand.
// &=: Performs a bitwise AND on the left operand and the right operand and assigns the result to the left operand.
// ^=: Performs a bitwise XOR on the left operand and the right operand and assigns the result to the left operand.
// |=: Performs a bitwise OR on the left operand and the right operand and assigns the result to the left operand.



// = is an assignment operator which can be use to store value in variables
let str1 = "123"
let str2 = 123



// ==: Checks if the values of the two operands are equal (type coercion occurs).
// !=: Checks if the values of the two operands are not equal (type coercion occurs).
// ===: Checks if the values and types of the two operands are equal (strict equality).
// !==: Checks if the values and types of the two operands are not equal (strict inequality).

console.log(str1 == str2) //true
console.log(str1 === str2) //false


//Bitwise : &
let bit1 = 18
let bit2 = 17
let bitand12 = bit1 & bit2 
console.log(bitand12) //16

//Bitwise : |
let bitor12 = bit1 | bit2
console.log(bitor12) //19

//Bitwise : XOR //true when both respactive bits are different
let bitxor12 = bit1 ^ bit2
console.log(bitxor12) //3


//-ve values are going to be calculated in 2's compliment form.
let bitnot12 = ~bit1
console.log(bitnot12) //13

//left shift <<-
let num = 5; // binary: 00000000000000000000000000000101 (32-bit representation)
let shifted = num << 2; // binary: 00000000000000000000000000010100 (32-bit representation, which is 20)

console.log(shifted); // Output: 20






//logical and
let a = true;
let b = false;
let c = true;
console.log("-----------------logical and----------------")
console.log(a && b ); // false
console.log(a && (b && c)); // false
console.log(a && c); // true

console.log("-----------------logical or----------------")
//logical or
console.log(a || b) // true
console.log(a || (b || c)) // true

console.log("-----------------logical not----------------")
//logical not
console.log(!a) //false



//Arithmatic Operator
// +: Addition
// -: Subtraction
// *: Multiplication
// /: Division
// %: Modulus (remainder)
// **: Exponentiation
// ++: Increment (increases an operand by 1)
// --: Decrement (decreases an operand by 1)


// BigInt Operators
// BigInt operators perform operations on BigInt values.

// +, -, *, /, %, **, <<, >>, >>>, &, |, ^, ~: Similar to the respective arithmetic and bitwise operators, but for BigInt values.


console.log("---------------------String operator-------------------")
// String Operators
// String operators perform operations on string values.

// +: Concatenation (joins two strings together)
let str3 = 'plus'
let str4 = 'operator'
let str5 = str3+' '+str4
let str6 = '10'
let num6 = 20
let str7 = '10'
let num7 = 20
let numstr6 = str6+num6
let numstr7 = num7+str7
console.log(str6+num6)
console.log(typeof numstr6)
numstr6 = num6 + str6
console.log(numstr7)
console.log(typeof (num7+str7))
console.log(typeof str5)



console.log("---------------comma--------------------")
//comma
let comma1, comma2;

comma1 = (1, 2); // 2 is assigned to a
console.log(comma1); // Output: 2

comma2 = (comma1 += 1, comma1 + 2); // a is incremented by 1 (resulting in 3), then 3 + 2 is evaluated and assigned to b
console.log(comma2); // Output: 5




console.log("--------------------unary operator----------------------")
// Unary Operators
// Unary operators perform operations on a single operand.

// +: Converts its operand to a number.
// -: Negates its operand.
// ++: Increments its operand by 1.
// --: Decrements its operand by 1.
// !: Logical NOT.
// ~: Bitwise NOT.
// typeof: Returns the type of its operand.
// void: Evaluates the expression and returns undefined.
// delete: Deletes an object property.
let x = "10";
console.log(+x); // Output: 10 (Unary plus converts string to number)

let y = '10';
console.log(typeof y) //string
console.log(typeof -y); // Output: -10 (Unary negation changes sign) //number

let z = 1;
z++;
console.log(z); // Output: 2 (Increment)

let a1 = true;
console.log(!a1); // Output: false (Logical NOT)

let b1 = 5;
console.log(~b1); // Output: -6 (Bitwise NOT)

let c1 = "hello";
console.log(typeof c1); // Output: "string"

let d1 = 42;
void d1
console.log(void d1); // Output: undefined
console.log(d1)

let obj = { prop: 1 };
delete obj.prop;
console.log(obj.prop); // Output: undefined



// Relational Operators Example:

let obj43 = { name: "Alice", age: 25 };
console.log("name" in obj43); // Output: true
console.log("gender" in obj43); // Output: false

function Person(name) {
  this.name = name;
}
let person = new Person("Alice");
console.log(person instanceof Person); // Output: true
console.log(person instanceof Object); // Output: true


console.log("-------------------samevaluezero---------------------")
//samevaluezero
// The SameValueZero algorithm is a specific comparison algorithm used in JavaScript that is particularly relevant for certain operations, such as those involving Object.is() and Array.prototype.includes(). 
//It is similar to strict equality (===) but with special handling for NaN and +0 versus -0.
console.log("----------------NaN Handling---------------------")
console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(Object.is(NaN,NaN))

console.log("---------------- +0 and -0 handling---------------------")
console.log(-0 == +0) //true
console.log(-0 === +0)//true
console.log("-------Usecase : SameValue ---------")
//object.is() used samevalue alogrithm in beckend for precise value check
console.log(Object.is(-0,+0)) //false

console.log("---------------- Array.prototype.include() ---------------------")
//Array.prototype.include()
let arr = [1, 2, NaN];
console.log(arr[2] == NaN) //false
console.log("-------Usecase : SameValueZero ---------")
//include uses samevaluezero alogrithm to check extra features for 0 and nan comparision
console.log(arr.includes(NaN)); // true (SameValueZero comparison)


console.log("--------------difference between samevalue and samevaluezero---------------------------")
// SameValue is used to determine if two values are exactly the same, considering their type and value.
// SameValue: Considers NaN equal to NaN and +0 and -0 as the same value. Used by Object.is().
// SameValueZero: Similar to SameValue but treats +0 and -0 as equal. Used by Array.prototype.includes().
console.log("------------------prototype---------------------")
// Prototypes provide a way to share properties and methods between objects.
// Prototype Chain: When a property is not found on an object, JavaScript looks up the prototype chain.
// Creating Prototypes: Use object literals, constructor functions, or ES6 classes.
console.log("---------------------object literal--------------------")
let person1 = {
  name: "Alice",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

let anotherPerson = Object.create(person1);
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
class Person2 {
  constructor(name) {
      this.name = name;
  }

  greet() {
      console.log("Hello, " + this.name);
  }
}

let bob = new Person2("Bob");
bob.greet(); // Output: "Hello, Bob"


// Prototype Methods: Access and modify prototypes using methods like Object.create(), Object.getPrototypeOf(), and Object.setPrototypeOf().

let objproto = {};
let protomain = { hello: "world" };

Object.setPrototypeOf(objproto, protomain);
console.log(Object.getPrototypeOf(objproto)); // Output: { hello: "world" }
console.log(objproto.hello); // Output: "world" (inherited from prototype)