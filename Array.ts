// array is dinamuc in size

export{}
let n:number[]=[1,2,5,4]
let name:Array<string> =["a","b","c"]
name.push("e")


let n1:(number|string)[]=[1,2,5,4,"abc","def"]
let name1:Array<string|number> =["a","b","c",1,2]


for (const key in name) {
   
    console.log(name[key]);
    
}

