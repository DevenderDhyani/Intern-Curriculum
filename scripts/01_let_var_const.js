// -------------- if we don't use any keyword to create variable --------------

'use strict'
    // it stops unintended global variable creation

function createGlobalVariable(){
    // unintented global vairbale creation: it will automatically creates a global varable.
    a = 20
}
createGlobalVariable()
// there is no variable declared with name a
// implicit global variable creation if we don't use any keyword.
console.log(a)

//--------------------- var --------------------
// declaration
console.log("b : "+b)
var b
b = 20
console.log(b)


//--------------------- let --------------------
// declaration;
{
    let c  = "working"
}
console.log(c);



//--------------------- const --------------------
// declaration;
const d = "xyz"



