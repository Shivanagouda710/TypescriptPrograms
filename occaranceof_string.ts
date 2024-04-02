// Occarance of particular string

export{}


let line:string = "abca"
let arr:string[] = [];
for(const x of line){
    arr.push(x)
}

// let arr:number[] = [1,2,1,2,2,5]
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