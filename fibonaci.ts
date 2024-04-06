// fibonaci 

export{}

//  0 1 1 2 3 5 8 13

let n1:number=0;
let n2:number=1;
let output = "";

output += n1 + " ";
output += n2 + " ";

for(let i=2;i<10;i++){
    let sum = n1+n2;
    n1=n2;
    n2=sum;
    output += sum + " ";

    
    
}


console.log(output);