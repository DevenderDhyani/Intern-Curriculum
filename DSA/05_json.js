//normal javascript object

//function are not going to be 
let json1 = {
    "name" : "devender",
    "checking" :  function greet(){
        console.log("Greeting")
    }
};
console.log(json1)

//stringify version of javascript object {it will convert to the string}
let obj1 = JSON.stringify(json1)
console.log(typeof obj1)

//parse
let obj2 = JSON.parse(obj1)
console.log(typeof obj2)