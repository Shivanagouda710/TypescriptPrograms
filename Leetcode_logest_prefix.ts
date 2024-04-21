export{}







let arr:string[] = ["clumsy","club","clue","clutch","cluster"];
let ans="";
arr.sort()
console.log(arr);

let first=arr[0]; // club
let last= arr[arr.length-1] // clutch


for(let i=0;i<first.length;i++){
    for(let j=0;j<first.length;j++){

        if(i===j && first[i]===last[j]){
            ans+=first[i]
        }
        
    }
}


console.log(ans);









