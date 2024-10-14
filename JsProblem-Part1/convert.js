function inchToFeet(inch) {
    const feetInt = inch / 12;
    const feetRemaining = inch % 12;
    if (feetRemaining == 0) {
        return feetInt;
    }
    return [feetInt,feetRemaining];
}

const height = inchToFeet(84);
console.log(height)
console.log(Array.isArray(height) 
? `Your height is ${height[0]} feet, ${height[1]} inches.` 
: `Your height is ${height}.`)