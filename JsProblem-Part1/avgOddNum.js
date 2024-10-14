function avgOdd(numbers) {

    let oddNumbers = [];

    for (const number of numbers) {
        if(number % 2 != 0){
            oddNumbers.push(number)
        }
    }
    return oddNumbers;
}
console.log(avgOdd([3,12,19,21,33]))


