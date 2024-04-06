//  average of numbers in a list
// 

export{}





// let nums:number[] = [3,2,4]; 
let nums:number[] = [2,7,11,15];
let target:number = 9

for(let i =0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        // console.log(i+" "+j+" = "+(nums[i]+nums[j]));

        if ((nums[i]+nums[j])===target) {
            console.log(i+" "+j);
      
        }
        
    }
}