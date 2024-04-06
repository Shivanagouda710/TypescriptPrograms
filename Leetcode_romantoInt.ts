export{}

function romanToInt(s: string): number {
    const romanToInt: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let list:number[]=[]
    list.push(romanToInt[s[0]])  ;
    for(let i=0;i<s.length;i++){
        // sum+=romanNumerals[s[i]];
        let current=romanToInt[s[i]];
        let next=romanToInt[s[i+1]];
        if (next===undefined) {
            next=0;
        }
        console.log("cureent = "+current+" next = "+next);
        
        if (current>=next) {
            // console.log("Inside if");
            result+=current;
            // console.log("-----------------------------if ans= "+result);
   
        }else{
           
          
            console.log("Inside else");
        //   list.push(romanToInt[s[0]])  ;

        if(s.length===2){
            let elseans= next-current;
            return elseans;
             
        }
           let elseans= next-current;
           console.log("my ans = "+elseans);
           
            list.push(elseans)
         
            console.log(list);
            let sum:number=0;
            for(const x of list){
                sum+=x;
            }
            result=sum;
            result=sum-romanToInt[s[s.length-1]];
            
            
            // break;
        }
        
        
    } 
    
    // console.log(list);
    // let sum:number=0;
    // for(const x of list){
    //     sum+=x;
    // }
    // result=sum;
    // result=sum-romanToInt[s[s.length-1]];
 
 
    
    return result;
}

const s: string = "CM";
const result: number = romanToInt(s);
console.log("-----------  "+result); // Output: 111