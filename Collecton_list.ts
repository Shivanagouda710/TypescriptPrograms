export{}



// Collections list 

let arr = [1, 2, 3];
arr.push(4); // arr is now [1, 2, 3, 4]

let lastElement = arr.pop(); // lastElement is 3, arr is now [1, 2]



let arr2 = [3, 4];
let combinedArr = arr.concat(arr2); // combinedArr is [1, 2, 3, 4]

let arr1 = [1, 2, 3, 4, 5];
arr1.splice(2, 1); // arr is now [1, 2, 4, 5]

arr.forEach(element => console.log(element)); // Output: 1, 2, 3
let filteredArr = arr.filter(element => element % 2 === 0); // filteredArr is [2, 4]


