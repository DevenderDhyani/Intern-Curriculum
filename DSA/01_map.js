const map1 = new Map();

console.log("--------------set--------------")
//Map :: set
map1.set("Name","Devender")
map1.set("RollNo","20")
map1.set(undefined,undefined)
map1.set('classsss',"btech")
console.log(map1)

console.log("--------------get--------------")
//Map :: get
console.log(map1.get("Name"))
console.log(map1.size)

console.log("--------------has--------------")
//Map :: has
console.log(map1.has('Name'))
if(map1.has("Name")){
    console.log("--------------delete--------------")
    //Map :: delete
    console.log(map1.delete("Name"))
    map1.set("Name","Devender")
}

console.log("--------------keys--------------")
//map : keys 
let mapKey = map1.keys()
console.log(mapKey)
console.log(mapKey.next())
console.log(mapKey.next())
console.log(mapKey.next())
console.log(mapKey.next())
console.log(mapKey.next())
console.log("-----------------Map.forEach-loop----------------------")
//map.forEach to iterate over set
function mapForEachfunction(value,key){
    console.log(key,", ",value)
}
map1.forEach(mapForEachfunction)

console.log("-----------------Normal-forEach-loop----------------------")
map1.forEach((value,key) => {
    console.log(key,value)
})

console.log("-----------------Normal-for-loop----------------------")
for(let [key,value] of map1){
    console.log(key+", "+value)
}
console.log(map1)

console.log("--------------map1--------------")
//map parsing for-of
for(let key of map1){
    // let keyIterator = map1.keys()
    // console.log(keyIterator.next())
    console.log(key)
}
console.log(map1)

//Map :: size
console.log(map1.size)

//Map :: clear
map1.clear();
console.log(map1)

const a = [1,24,5,3,332,4]
//spread operator
console.log(...a)
const b = [...a,3,4,3,2,34,5,6,2]
console.log(b)


//map testing
let map2 = new Map();
map2.set("Name","Rohan")
map2.set("Classss","Btech")
console.log(map2)
map2.delete("Classss")
console.log("-----------------------------")
let valuesmap = map1.get("Classss")
console.log(map1.get("Classss"))
console.log(map2)










