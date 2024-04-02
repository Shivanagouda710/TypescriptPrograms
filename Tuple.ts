export{}

// Array - dinamic in sizze 
// tuple  -  fixed in size

// How many value you want to store need to delcare before only : other wise error 
let emp:[string,number]=["sachin",123]


let emp1:[string,number]=["sachin",123]
emp1.push("kiran",3342) // push same number of values only : other wise error
console.log(emp1);

// array of values in the same pattern
let emp3:[string,number][]=[["sachin",123],["Raghu",123],["malli",3]]
console.log(emp3[2]); // print pair
console.log(emp3[2][0]); // from pair 1st element
console.log(emp3[2][1]); // from pair 2nd element
