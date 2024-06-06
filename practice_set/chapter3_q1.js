// write a program to print the marks of a student in an object using for loop

let sadeesMark={
    math:34,
    english:45,
    science:56,
    sst:67
}

for(let i=0; i<Object.keys(sadeesMark).length; i++){  //here used object.keys() to get the keys
    console.log("the marks of"+Object.keys(sadeesMark)[i]+" is" +" " +sadeesMark[Object.keys(sadeesMark)[i]])
}