// Explicit binding in JavaScript refers to the practice of explicitly setting the this context when invoking a function. This is done using methods such as call, apply, and bind. These methods allow you to specify the this value and sometimes pre-set arguments, giving you fine-grained control over how functions are executed.


// Global Scope
// Global Variables: Variables declared at the top level of a Node.js module (outside of any function or block) are globally accessible within that module. They are not automatically added as properties of the global object.

// Global Object (global)
// global Object: In Node.js, the global object is similar to the window object in browsers, but it doesn’t automatically include global variables declared in the top-level scope of a module. It primarily contains built-in objects and methods.

// Global Scope: Global variables declared in Node.js are in the global scope and accessible directly within the same module. They are not automatically properties of the global object.
// global Object: Contains built-in properties and methods in Node.js but does not include global variables declared at the top level of your module unless you explicitly add them.

//global scope and object scope is different thing
var k2 = "kjshflkajhfd"
this.k1 = "kjshflkajhfd"
//constructor function
console.log("----------------Normal function----------------")
function NormalCheck(){
    this.x = "checking"
    console.log("This is global.k2",global.k2)
}
// console.log("this is k2: ",this.k1) //
// console.log("this is k1: ",k1)
let cc1 = new NormalCheck() //creatin an object from normal function
console.log(cc1) // print {}  {which is nothing but global object}

//this object will be passed to the call, bind, apply
let thisArgConstr = {
    test : "Testing",
    testfunction(){
        console.log("working Testfunction for {function inside obejct}")
        return "test_function_working"
    }
}
console.log("-------------------Appyl------------------------")
NormalCheck.apply(thisArgConstr)// this inside normal function will refer to thisArgConstr

console.log("----------------function inside object----------------")
const obj1 =   {
    name :"devender dhuyani",
    subject : "Btech",
    Executing : function(){
        console.log("this : ",this.testfunction())
    }
}
//call and apply are same
obj1.Executing.call(thisArgConstr)

console.log("----------------constructor function----------------")
//in constructor function it has its own scope so this will referes to constructor scope only.
function ConstuctorCheck(x,a,a1){
    console.log(this,x,a,a1)
}

let thisBind = {
    test : "Testinguiui"
}


//bind will take array as second parameter other than object0
const checkBind = ConstuctorCheck.bind(thisBind,['devender','dhyani'])
checkBind()

console.log("----------------arrow function for this ----------------")
//it does not have its own scope so this refers to the global object
let arrFunction =  () => {
    console.log(this)
}
arrFunction()



this.myGlobalVar = 'global object';
//this property will be in global scope but will not automatically added to global object.
var myGlobalVar2 = "global scope"

// Log the global object
console.log("--->>>>\n", global);

// Access the global variable through the global object
console.log(this.myGlobalVar); // Output: Hello, World!


global.myGlobalVar3 = "Globla Scope Created"
console.log(global.myGlobalVar3)
console.log(global.myGlobalVar2)