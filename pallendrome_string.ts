// Pallendrom string

export{}

let name:string="aba";
let namelist:string[]=[];

for(const x of name){
    namelist.push(x)
}
const reverse_string :string = (namelist.reverse()).join("");
if (name===reverse_string) {
    console.log("Yes ... Pallendrome..!!!!");
    
} else {
    console.log("Not ... Pallendrome..!!!!");
}
