export{}



// Collections set
let mySet = new Set([1, 2, 3]);

mySet.add(1);

mySet.delete(2);

mySet.has(2); // Returns true
mySet.clear();
mySet.size; // Returns 3
mySet.forEach(value => console.log(value));
