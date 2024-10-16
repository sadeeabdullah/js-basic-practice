function calculateMoney(ticketSale) {
    if (ticketSale <0) {
        return 'Please use a positive value'
    } else {
        const totalEarning = ticketSale * 120;
        const totalExpenses = 500 + (8*50)
        const remainingEarning = totalEarning - totalExpenses;
        return remainingEarning;
    }
    
}
console.log(calculateMoney(93))