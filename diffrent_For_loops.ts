// Diffrent for loops
export{}


let fruites:string[] = ["apple","banana","grapes","mango","carrot"]

console.log("Normal for loop---------------------------");

for(let i=0;i<fruites.length;i++){
    console.log(fruites[i]);
    }


console.log("for loop using in -------------------");

for(let x in fruites){
    console.log(fruites[x]);
    
}

console.log("for loop using of ---------------");
for(let x of fruites){
    console.log(x);
    
}



