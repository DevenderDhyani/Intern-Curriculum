//implicit typecasting || Coercion
let result = "Hello, " + 123;  // 123 is converted to "123"
console.log(result);  // Output: "Hello, 123"

let result1 = "5" * 2;  // "5" is converted to 5
console.log(result1);  // Output: 10

let result3 = "10" - "4";  // Both "10" and "4" are converted to 10 and 4
console.log(result3);  // Output: 6

console.log(5 == "5");  // "5" is converted to 5
console.log("5" = 5);   // 5 is converted to "5"

console.log(0 == false); //0 converted into false  implicitly


// explicit typecasting
let str = String(123);
let num = Number("123");
let bool = Boolean(1);



