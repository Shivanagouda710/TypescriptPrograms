// bubble sort string

export{}
let line:string="debac";

let arr:string[] = []
for(const x of line){
    arr.push(x);
    
}

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j])
        {
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}


console.log("After sorting-------------");
for(let i=0;i<arr.length;i++){
console.log(arr[i]);
}



