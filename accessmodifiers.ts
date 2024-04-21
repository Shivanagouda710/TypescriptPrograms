export{}


// class is blueprint of object 
// by default variable will be public
//  we have only public , private , readonly in typescript


class Invoice{

// public client:String;
// readonly details:string;
// private amount:number


constructor( public client:String,readonly details:string,private amount:number){
//    above declartion can be removed
}


}


const obj1=new Invoice("mario","work in katkol",2000)
const obj2=new Invoice("startk","work in mumbai",12000)

let invlices:Invoice[]=[];
invlices.push(obj1)
invlices.push(obj2)


invlices.forEach(element => {
    console.log(element.client);
    console.log(element.details);
    // console.log(element.amount);  amount is private cant access outside class
    
});


