export{}

// enum : data types : hold set of constants
enum emp{
    name,
    id=12,
    age,
    address
}



console.log(emp.name);
console.log(emp.id);
console.log(emp.age);
console.log(emp.address);


enum ipStatus{
    urlNotFound=404,
    serverNotFound=401,
    inValidCommand=101,
    successful =200
}

console.log(ipStatus.urlNotFound);
console.log(ipStatus.serverNotFound);
console.log(ipStatus.inValidCommand);
console.log(ipStatus.successful);