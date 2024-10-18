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


function price(number,double) {
    return double?number*2:number*3;
}
console.log(price(4)) //here if i dont provide the double argument its not defined and undefined is false 



/// doing summation of the numbers in array

function summationOfNumber(numbers) {
    let summation = 0;
    for (const number of numbers) {
        summation += number;
    }
    return summation;
}
const nums = [12,123,12];
console.log(summationOfNumber(nums))