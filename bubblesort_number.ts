// bubble sort number

export{}


let arr:number[] = [5,3,4,2,1,0]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j])
        {
            let temp:number=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}


console.log("After sorting-------------");
for(let i=0;i<arr.length;i++){
console.log(arr[i]);
}



