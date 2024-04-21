
export{}

let  name="aaabcd"
let list:string[]=[]
for(const x of name){
    list.push(x)
}


// Occarance of particular number

export{}

let arr= list;
let fr:number[]=[arr.length]
let visited:number=-1;


for(let i =0;i<arr.length;i++){
    let count:number = 1;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            count++;
            fr[j]=visited;
            
        }
    }
    if(fr[i]!=visited){
        fr[i]=count++;
    }
}


console.log("-------------------------------------");

for(let i =0;i<arr.length;i++){
    if(fr[i]!=visited){
    
    console.log(arr[i]+" - "+fr[i]);
    
    }

}
