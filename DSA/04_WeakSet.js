//weakset is the collection of objects rather than values.
//weakset only support 
//add
//has
//delete
let weakSet = new WeakSet();
let obj1 = {name:"Devender Dhyani"}
weakSet.add(obj1)
let obj2 = {classes : "Btech"}
weakSet.add(obj2)
console.log(weakSet)

console.log(weakSet.has(obj2))
if(weakSet.has(obj2)){
    console.log(weakSet.delete(obj2))
}
console.log(weakSet.has(obj2))
