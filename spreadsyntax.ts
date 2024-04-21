export{}


//spread syntax

export const RamdurgTaluk={
    school_type:"Government"
}


export const cityUnderRamdurg={
     katkol:{
        schoolName : "katol gov school",
        ...RamdurgTaluk
    },
    godachi:{
        schoolName : "godchi gov school",
        ...RamdurgTaluk
    },
    sopadla:{
        schoolName : "sopdla gov school",
        ...RamdurgTaluk
    },
} 


console.log(cityUnderRamdurg.katkol);
console.log(cityUnderRamdurg.sopadla);
// ---------------------------

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }
console.log(merged);
