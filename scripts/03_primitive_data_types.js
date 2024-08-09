
//number : int
let  x = 999999999999999;
console.log(x)
console.log(typeof(x))
//number : float
let y = 3.2;
console.log(y)
console.log(typeof(y))

//biginț
let z = BigInt(5);
console.log(z+3n)
console.log(typeof(z))

//string
let str = 'devender';
str = "devender";
console.log(typeof(str))

//String : advance
let sym1 = String("123")
let sym2 = String("123")
// == is for value check irrespective of its type
// === is used to check whether both type and value are same or not 
if(sym1 === sym2){
    console.log("First")
    console.log("\n"+sym1)
    console.log("\n"+sym2)
}
if(sym1 == sym2){
    console.log("Second")
    console.log("\n"+sym1)
    console.log("\n"+sym2)
}

//String : template literals
console.log((`Hello ${str}`).toUpperCase())
console.log(str.charCodeAt(0))

//boolean
let bool = Boolean(0==0)
console.log(typeof(bool))

//undefined
let un
console.log(typeof(un))

//null
let nu = null
console.log(typeof(nu)) // output : object [it is an error in java since version1.0]
console.log(typeof(null)) // output : object [it is an error in java since version1.0]
console.log(null==undefined) //true
console.log(null===undefined) //false




// symbol
let sym12 = Symbol("dev","dhyanies");
let sym22 = Symbol("dev");
console.log(sym12[0])
console.log(`type of sym22 : ${typeof(sym22)}`)
console.log(sym12==sym22)
console.log(sym12===sym22)


//Symbol :: 2  {it can be act as a uneque key in objects}
const uniqueKey = Symbol('description');
const obj = {
  [uniqueKey]: 'value'
};
console.log(obj[uniqueKey]); // Output: 'value'



//symbol :: 3  {it can act as unique identifier for keys in the object}
const privateKey = Symbol('private');
class MyClass { 
   
  constructor() {
    this[privateKey] = 'secret';
  }
  getPrivate() {
    return this[privateKey];
  }
}
const mc = new MyClass()
console.log(mc.getPrivate())





