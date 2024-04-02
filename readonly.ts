export {}

class Person {
    
    name : string;
   readonly Number1: number

   constructor(name : string, Number1:number){
    this.name=name;
    this.Number1=Number1
   }



}

const  p = new Person("sachin",1234)
// p.Number1=1  throws error beacuse of readoonly
console.log(p);
