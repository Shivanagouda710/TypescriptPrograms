//  average of numbers in a list
// 

export{}

let list:number[]=[1,2,3];

let sum:number=0;
let len:number=list.length;
for (const iterator of list) {
    sum+=sum+iterator;
}

console.log(sum/len);

