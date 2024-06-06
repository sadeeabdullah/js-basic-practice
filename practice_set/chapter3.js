// Q1 : write a program to print the marks of a student in an object using for loop

let sadeesMark={
    math:34,
    english:45,
    science:56,
    sst:67
}

for(let i=0; i<Object.keys(sadeesMark).length; i++){  //here used object.keys() to get the keys
    console.log("the marks of"+Object.keys(sadeesMark)[i]+" is" +" " +sadeesMark[Object.keys(sadeesMark)[i]])
}

// Q2 : do it using for in loop

for(let key in sadeesMark){
    console.log("the marks of"+ " " + key + " is " + sadeesMark[key])
}

// its easy and good to use in case of object

//Q3 : write a program to print try again untill    the input is correct number

const theNumber= 221;
let j = 221;

while(j != theNumber){
     //console.log("try again")  // i have comment this cause it will run untill the number is correct and if i don't stop it will run infinitly and it will crush the js runtime
}
console.log("you have got it right")

// finding the mean of 4 numbers using the function

const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}

// invoking the function

console.log(mean(1,2,3,4))