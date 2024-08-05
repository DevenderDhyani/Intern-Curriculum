// 1. Set.add()
// 2. Set.delete()
// 3. Set.clear()
// 4. Set.entries()
// 5. Set.has()
// 6. Set.values()
// 7. Set.keys()
// 8. Set.forEach()
// 9. Set.prototype[@@iterator]()


//empty set
let set1 = new Set()


//adding string value
set1.add("Devender")

//adding number
set1.add(23)


//adding same number which is already present in Set.
//it is not going to be added coz number same number is already present in the set
set1.add(23)
set1.add("Devender")
set1.add("Naveen")

//deleting an element from the set
set1.delete(23)
set1.add(23)
console.log(set1)

console.log("---------------------------Entries------------------------")
// 4. Set.entries()
let setEntry = set1.entries()
console.log(setEntry)
console.log(setEntry.next())
console.log(setEntry.next())
console.log(setEntry.next())

console.log("----------------------------Keys-------------------------")
//set keys
let setKeys = set1.keys()
console.log(setKeys)
console.log(setKeys.next().value)
console.log(setKeys.next().value)
console.log(setKeys.next().value)
console.log("-----------------Normal-forEach-loop----------------------")
//normal forEach to iterate over set
set1.forEach((value) => {
    console.log(value)
})
console.log("-----------------Set.forEach-loop----------------------")
//set.forEach to iterate over set
function setForEachfunction(i,value){
    console.log(i,value)
}
set1.forEach(setForEachfunction)
console.log("----------------------------Values-------------------------")
//set values
for(let k of set1.values()){
    console.log(k)
}

console.log("----------------------------Set.prototype[@@iterator]()-------------------------")
console.log("----------------------------myset[Symbol.iterator]();-------------------------")
// 9. Set.prototype[@@iterator]() {Access the default iterator}
let mySet = new Set([10, 20, 30]);

let iterator = mySet[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }





Set.prototype.subSetDev = function(otherSet)
{
    // if size of this set is greater
    // than otherSet then it can't be 
    //  a subset
    if(this.size > otherSet.size)
        return false;
    else
    {
        for(let elem of this)
        {
            // if any of the element of 
            // this is not present in the
            // otherset then return false
            if(!otherSet.has(elem))
                return false;
        }
        return true;
    }
}

let setA = new Set([10, 20, 30]);
let setB = new Set([50, 60, 10, 20, 30, 40]);
let setC = new Set([10, 30, 40, 50]);
// prints true
console.log(setA.subSetDev(setB));

// prints false
console.log(setA.subSetDev(setC));

// prints true
console.log(setC.subSetDev(setB));