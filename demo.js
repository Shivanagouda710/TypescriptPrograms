"use strict";
exports.__esModule = true;
var name = "kkkkkkkkkkkkkk i am shivangouda good in maths zz";
var list = name.split(" ");
var m = new Map();
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var x = list_1[_i];
    m.set(x.length, x);
}
// Convert the iterator of keys to an array
var keysArray = Array.from(m.keys());
// Find the maximum length among the keys
var maxLength = Math.max.apply(Math, keysArray);
// Get the word associated with the maximum length from the map
var maxLetterWord = m.get(maxLength);
console.log("Word with maximum number of letters:", maxLetterWord); // Output: shivangouda
