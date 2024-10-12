const names = ['sadee','ladee','Dadee'];
console.log(names.sort())

const number = [1,232,232,131411,]
console.log(number.sort()) //output: [ 1, 131411, 232, 232 ]

//      *** THE SORTING EXECUTED USING THE a-z A-Z ASCII BINARY CHARACTER TABLE ***    //

//ASCENDING SORTING TO NUMBERS ARRAY

console.log([...number].sort(function(a,b){ return a - b}))

//ASCENDING SORTING TO NUMBERS ARRAY

console.log([...number].sort(function(a,b){return b - a}))