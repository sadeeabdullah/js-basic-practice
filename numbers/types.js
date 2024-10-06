//When talk about number type we can usually think of positive,negative,integer,float or decimal,even,odd,factorial etc.

//For float and integer number 

var numberFloat = 0.1;
var numberInt = 4;
var sumOfFloatAndInt= numberFloat+numberInt

console.log(sumOfFloatAndInt) //output 4.1
console.log(typeof sumOfFloatAndInt) //output number

var number3 = 0.1;
var  number4 = 0.2;
var sumOfFloatNumbers = number3 + number4;
console.log(sumOfFloatNumbers) //output 0.30000000000000004 it is too long to use. Sometime we get this kind of digit for float number and it is not appropiate.

// to fixed the issue we can use a build in method named toFixed();

console.log(sumOfFloatNumbers.toFixed(1))