export{}

let name = "kkkkkkkkkkkkkk i am shivangouda good in maths zz";

let list: string[] = name.split(" ");

let m = new Map();
for (const x of list) {
    m.set(x.length, x);
}

// Convert the iterator of keys to an array
let keysArray = Array.from(m.keys());

// Find the maximum length among the keys
let maxLength = Math.max(...keysArray);

// Get the word associated with the maximum length from the map
let maxLetterWord = m.get(maxLength);

console.log("Word with maximum number of letters:", maxLetterWord); // Output: shivangouda
