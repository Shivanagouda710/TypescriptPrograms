export{}

// important while declaring list what and type will be there . only those are allowed while pushing



let list_string=["a","b"]

list_string.push("a") // ok
list_string.push("b") // ok
// list_string.push(1) // no
// list_string.push(2) // no
// list_string.push(true) // no

// list_string="hello" //not possible to change the type




let list_number=[1,2,3]

// list_number.push("a") // no
// list_number.push("b") // no
list_number.push(1) // ok
list_number.push(2) // ok
// list_number.push(true) // no






let list_mixed=[1,2,3,"a","b",true]

list_mixed.push("a") // ok
list_mixed.push("b") // ok
list_mixed.push(1) // ok
list_mixed.push(2) // ok
list_mixed.push(true) // ok

// Once variable is decalare with one type we cant change to another type later 

let person={
    name:"sachin",
    age:20,
    is_student:true
}

// age="2" // no possible


