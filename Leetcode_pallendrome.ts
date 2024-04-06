//  average of numbers in a list
// 

export{}


function isPalindrome(num: number): boolean {
      let temp:number=num;
    let digit:number=0;
    let reminder:number=0;
    
    if (num>=0) {
        while(num!=0){
            digit=num%10;
            reminder=(reminder*10)+digit;
            num=Math.floor(num/10);
        }
         if (reminder===temp) {
            return true;
         } else {
            return false;
         }
        
    } else {
        return false;
    }
    
    
};

let x = -123
console.log(isPalindrome(x));
