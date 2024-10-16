function monthlySavings(arr,livingCost) {
    

    if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return "invalid input"
    }
    let totalEarning = 0;
    let totalTaxCutting = 0;
    for (const n of arr) {
        if(n>3000){
            const taxCutting = ((3000/100)*20)
            totalTaxCutting+=taxCutting;
        }
        totalEarning+=n;
        
    }
    const savings = totalEarning - totalTaxCutting -livingCost;
    if (savings < 0) {
        return "earn more"
    }
    return savings
}
console.log(monthlySavings(100, [ 900 , 2700 , 3400]))