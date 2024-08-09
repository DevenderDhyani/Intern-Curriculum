
// "use strict";
// In JavaScript, the this keyword refers to an object.


console.log("\n--------------This Function of Object-------------")
// In an object method, this refers to the object.
let thisObjMethod = {
    check : function(){
        console.log(this+" working")
    }
}
thisObjMethod.check()
console.log("\n--------------------This Alone--------------------")
// Alone, this refers to the global object.
let aloneThis = this
console.log(aloneThis)
console.log(this);
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
function strictCheckThis(){
    let strictCheckThis1 = this
    console.log("-------------------")
    console.log(this) //undefined
}
strictCheckThis()
// In an event, this refers to the element that received the event.
// const x = document.getElementById("rollNo").innerHTML="hello";
// console.log(x) //referes to the element having id rollNo


// Methods like call(), apply(), and bind() can refer this to any object.



//constructor function
console.log("----------------Normal function----------------")
function NormalCheck(){
    console.log(this)
}

let cc1 = new NormalCheck()
console.log(cc1)
let thisArgConstr = {
    test : "Testing",
    testfunction(){
        console.log("working Testfunction for {function inside obejct}")
        return "test_function_working"
    }
}
NormalCheck.apply(thisArgConstr)

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
function ConstuctorCheck(x,y){
    console.log(this)
}

let cc3 = new ConstuctorCheck("devnder", "Dyani");
console.log(cc1)

let thisBind = {
    test : "Testinguiui"
}

const Bindcheck = ConstuctorCheck.bind(thisBind,"Rohan","Garg")
Bindcheck()


console.log("----------------arrow function for this ----------------")
//it does not have its own scope so this refers to the global object
let arrFunction =  () => {
    console.log(this)
}
arrFunction()
const checkBind = ConstuctorCheck.bind(thisBind)
checkBind("Wokring")
