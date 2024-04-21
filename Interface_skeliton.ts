export{}


// class is blueprint of object 
// by default variable will be public
export{}




interface calculator{
    num1:number,
    numb2:number
    
    addNumber( num1:number,num2:number);
    substactNumber( num1:number,num2:number);
    multiplyNumber(num1:number,num2:number);
}


interface colour{
    outer_colour:string;
    
}



class wondowsCalculator implements calculator,colour{
    outer_colour: string;
    num1: number;
    numb2: number;
    addNumber(num1: number, num2: number) {
        return num1+num2;

    }
    substactNumber(num1: number, num2: number) {
        if (num1>num2) {
            return num1-num2;
        }else{
            return num2-num1;
        }
    }
    multiplyNumber(num1: number, num2: number) {
        return num1*num2;
    }

    
}


const check1  = new wondowsCalculator();
console.log("sum  = "+check1.addNumber(2,3));
console.log("substarct = "+check1.substactNumber(2,3));
console.log("multiply = "+check1.multiplyNumber(2,3));
check1.outer_colour="Black";
console.log("calculator outer color = "+check1.outer_colour);

