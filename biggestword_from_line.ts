//maximum letter from word
export{}

let line = "Hello my name is starktony"
let list:number[] = []
let words=line.split(" ");
let listword:string[] = []
for(const x of words){
    // console.log(x.length);
    list.push(x.length)
    listword.push(x);    
}

// console.log(list);
// console.log(listword);


console.log((listword.sort().reverse())[0] +" is having maximum letter in line i.e  "+(list.sort().reverse())[0]+"  letters ");


