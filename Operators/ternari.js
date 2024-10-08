let number = 300;
const govt = true;

// to understand the syntax simply we can look at the syntax:
// condition? if yes this will execute: otherwise this will execute;

// or we can look into nested syntax for that
// condition? if true?if the last condition true: if the last condition not true: if the fist condition is not true.

number >= 400 ?(govt?number = number/2:number ) : (number = number/3)
console.log(number)     