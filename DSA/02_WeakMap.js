const weakMap = new WeakMap();
const obj = {};


//keys must be object {
    
// Memory Management: If WeakMap allowed primitive values (like strings or numbers) as keys, there would be no way țo manage the lifecycle of these keys since primitive values are not garbage collected. This would lead to potential memory leaks because the WeakMap would hold strong references to these primitives, preventing them from being garbage collected even if they are no longer needed.

//  }

//WeakMap :: set
weakMap.set(obj, 'Jatin');

//WeakMap :: get
const value = weakMap.get(obj);
console.log(value); // 'value'

//WeakMap :: has
console.log(weakMap.has(obj)); // true

//weakmap ::delete
weakMap.delete(obj);
console.log(weakMap.has(obj)); // false

console.log("-----------------------------")
//weakmap testing
let map2 = new WeakMap();
let objWeakMap = {}
let objWeakMap2 = {}
map2.set(objWeakMap,"Rohan")
map2.set(objWeakMap2,"Btech")
console.log(map2)
map2.delete(objWeakMap2)
let valuesmap = map2.get(objWeakMap2)
console.log(map2.get(objWeakMap))
console.log(map2.has(objWeakMap))






// To illustrate how using primitive values as keys in a WeakMap would lead to potential memory leaks and how WeakMap's use of weak references helps with automatic cleanup, let’s break down the concept with examples.

// Example 1: Potential Memory Leak with Primitive Keys
// In JavaScript, primitives like strings and numbers are immutable and do not have a way to be garbage collected. Here’s a simplified explanation of why using primitives as keys in a WeakMap would be problematic:

// javascript
// Copy code
// // Suppose we had a WeakMap that accepted primitive keys (hypothetical scenario)
// const weakMap = new WeakMap();

// // Attempting to use a primitive as a key (not actually possible in JavaScript)
// weakMap.set('myKey', 'someValue'); // Hypothetical code, will throw an error

// // Explanation:
// // If primitives were allowed as keys, the WeakMap would hold a strong reference to 'myKey'.
// // Even if 'myKey' is no longer used elsewhere in the program, the WeakMap would still hold
// // a reference to it, preventing it from being garbage collected. This could lead to memory leaks
// // because the WeakMap keeps the primitive key alive even though it is not used.
// Example 2: Correct Use of WeakMap with Object Keys
// WeakMap is designed to use objects as keys, which allows for automatic cleanup when the keys are no longer reachable. Here’s how it works:

// javascript
// Copy code
// // Create a WeakMap
// const weakMap = new WeakMap();

// // Create an object to use as a key
// let keyObject = {};

// // Set a value in the WeakMap using the object key
// weakMap.set(keyObject, 'someValue');

// // Check the value associated with the object key
// console.log(weakMap.get(keyObject)); // 'someValue'

// // Now remove the strong reference to the object
// keyObject = null;

// At this point, there are no more strong references to the original object
// and it becomes eligible for garbage collection.

// The WeakMap will automatically remove the entry associated with the keyObject
// as it no longer has any strong references, preventing a memory leak.
// Detailed Explanation
// Initial State:

// The WeakMap is created with an entry where the key is an object and the value is 'someValue'.
// keyObject is a reference to that object.
// Strong Reference Removal:

// Setting keyObject to null means that there are no longer any references to the original object.
// In a WeakMap, because the key was an object and there are no more strong references to it, the object is eligible for garbage collection.
// Automatic Cleanup:

// The WeakMap detects that the key object is no longer reachable and automatically removes the associated entry.
// This prevents a memory leak, as the memory used by the key object and its associated value is freed.
// Summary
// Primitive Keys (Hypothetical): If WeakMap could use primitives as keys, those keys would be kept alive due to strong references, potentially leading to memory leaks.
// Object Keys: Using objects as keys in WeakMap allows for weak references. When an object is no longer reachable, the WeakMap automatically cleans up the entry, which helps with efficient memory management.
// This design ensures that WeakMap effectively manages memory by leveraging the garbage collection of objects while avoiding potential issues associated with strong references to primitives.







