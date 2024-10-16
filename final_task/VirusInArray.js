function deleteInvalids(array) {
    const newArr = []
    if (Array.isArray(array) !== true) {
        return "Please input an array"
    } else {
        for (const element of array) {
            if (typeof element === 'number' && !Number.isNaN(element) ) {
                newArr.push(element)
            }
        }
    }
    return newArr;
}
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))