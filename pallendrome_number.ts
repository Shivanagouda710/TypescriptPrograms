// Pallendrom number

export{}

let num:number = 121;
let temp:number = num;

let digit:number=0;
let reminder:number=0;
let reversednumber:number=0;

while(num!=0){
digit = num%10;
reminder=(reminder*10)+digit;
num=Math.trunc(num/10);
}


if (reminder===temp) {
    console.log("Yes .. Pallendrome...!!!");
    
} else {
    console.log("Not .. Pallendrome...!!!");
}


