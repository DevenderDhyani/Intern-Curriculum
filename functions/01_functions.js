
//function declaration it is going to be hoisted
function func1(){
    console.log("func1")
}
//function expression is not going to be hoisted
let func2 = function () {
    console.log("func2")
    
}

//named function expressions :: no hoisting
let func3 = function fun3_1(){
    console.log("func3 :: func3_1")
}

//Arrow Function 
let func4 = () => {
    console.log("func4");
}
console.log(typeof func4)
func1()
func2()
func3()
func4()
fun3_1()


function greet(name) {
    return `Hello, ${name}!`;
  }

  let obj = {};

  typeof obj // "object"
  console.log(typeof greet);  // Output: function
  console.log(typeof (typeof greet));  // Output: String
  console.log(greet === Object);  // Output: true

  console.log("------------------Function-Inside-Array-----------------")
//to call a function present inside of an array
const methodInsideArray  = ['sds',function greetings(){
    console.log("working")
}]
console.log(methodInsideArray[1]())




  