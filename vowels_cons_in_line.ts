//  average of numbers in a list
// abcdef - ae

export{}

let line : string = "abcdefghijklmnopqrstuvwxyz"
let list_vowels :string[]= [];
let list_cons :string[]= [];
let total="";
for(const x of line){
    if (x.includes("a") ||x.includes("e") ||x.includes("i") ||x.includes("o") ||x.includes("u") ) {
        list_vowels.push(x);       
    
    }else{
        list_cons.push(x)
    }


}
console.log(list_vowels+" - "+list_vowels.length);
console.log(list_cons+" - "+list_cons.length);

console.log("Total = "+(list_vowels.length+list_cons.length));

