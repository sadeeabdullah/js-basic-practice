function namee(a){
    console.log("hello world! "+a)
}
namee("man")

//LETS FIND SOME ANOTEHR EXAMPLE OF FUNCTION

function summation(a,b,c){
    const sum = a+b+c;
    return sum;
}
console.log(summation(1,5,7))

// consol(sum)


// function for getting the number is odd or not?

function isOdd (n){
    if (n %2 == 1) {
        return true
    }
    return false;
}
console.log(isOdd(12))