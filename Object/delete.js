const phone = {
    brand: "xioami",
    price: 120000,
    isCleaned: "no"
}

//likely if i want to remove any properties from the object i can use many ways.
// some of these are below:

//using delete 
delete phone.isCleaned;
console.log(phone)
phone.isCleaned = 'no';
console.log(phone)

// using destructuring syntax:
const { isCleaned, ...p} = phone;
console.log(p)


//NOTE : If we freeze the object it will be immutable.
Object.freeze(phone)

delete phone.isCleaned
console.log(phone)

//IF YOU JUST WANT TO MODIFY YOU CAN USE SEAL

Object.seal(p)
p.brand = 'Shaomi';
console.log(p)