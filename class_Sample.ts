export{}

class emp{

    name:string;
    id:number;

    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }

     
     
    public dispalay() {
        console.log(this.name);
        console.log(this.id);
        
        
    }


}

const e = new emp("sachin",12)
console.log(e.name);
console.log(e.id);

e.dispalay()