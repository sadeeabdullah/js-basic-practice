function getMax(numbers) {
    let max = numbers[0];

    for (const num of numbers) {
        if (num>max) {
            max = num;
        }
    }
    return max;
}
const heights = [121,5463,3431,64]
console.log(getMax(heights))