function avgOdd(numbers) {

    let oddNumbers = [];
    let sumOfOdd = 0;
    let totalOddCount = 0;

    for (const number of numbers) {
        if(number % 2 != 0){
            oddNumbers.push(number)
            totalOddCount ++;
            sumOfOdd += number
        }
    }
    const avgOfOdd = sumOfOdd/totalOddCount
    return [oddNumbers , avgOfOdd];
}
console.log(avgOdd([3,12,19,21,33]))


