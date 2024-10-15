function getTotal(q) { 
    const first100Price = 100; 
    const second100Price = 90; 
    const remainingPrice = 80; 
    let total = 0;

    if (q <= 100) {
        total = q * first100Price; 
    } 
    else if (q <= 200) {
        total = 100 * first100Price + (q - 100) * second100Price; 
    } 
    else {
        total = 100 * first100Price + 100 * second100Price + (q - 200) * remainingPrice; 
    }

    return total;
}

console.log(getTotal(231));
