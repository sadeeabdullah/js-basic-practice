//Q1: what will be print of conosle.log("sadee\".length)

console.log("sadee\"".length)


//Q2: explore the start  with and end with methods

let name = "sadee";

console.log(name.startsWith("s"))
console.log(name.endsWith("e"))

//Q3: write a program to convert string to uppercase and lowercase

console.log(name.toUpperCase())
console.log(name.toLowerCase())


//Q4: write a  program to extract the amount of the string  "please give me 100"
let str = "please give me 100"   

let amount = str.slice("please give me ".length)
console.log(amount)

//HERE YOU WILL GET HE STRING VALUE OF AMOUTN

//PARSE IT TO NUMBER

let amountNumber =parseInt( str.slice("please give me ".length))
console.log(amountNumber)


//Q5: try to change 4th character of a string

let stringIs = 'tunemari enti'
stringIs[3] = 'a'
console.log(stringIs)  //stringIs will not change because string is immatable