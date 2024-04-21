export{}



// Collections Map
// Creating an empty Map
let myMap = new Map();

// Creating a Map with initial values
let myMapWithValues = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    // More key-value pairs can be added here
]);


myMap.set("key3", "value3");
myMap.set("key4", "value4");

console.log(myMap.get("key1")); // Output: value1
console.log(myMap.has("key1")); // Output: true
console.log(myMap.has("key3")); // Output: false

myMap.delete("key1");
console.log(myMap.has("key1")); // Output: fals

myMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

console.log(myMap.size); // Output: 2
