const human  = {
    name: "sadee",
    age: 17,
    phone : '016682451146',
    money: 12431232
}

//  we can get the value normally in this way:
const name = human.name;
console.log(name)

// here is the way you can get the value of the property more easily and it is called destructuring.
// You have use the property name as constant name into a braces and write down the object name on the right side of the  equal
const {phone,money}= human
console.log(phone,money)

// NOTE: The plus is you can get multiple value in one line code
// NOTE 2 : YOU CAN CHANGE THE VARIABLES NAME INTO THE BRACES
const {phone: mobile, age: boyosh} = human
console.log(mobile,boyosh)