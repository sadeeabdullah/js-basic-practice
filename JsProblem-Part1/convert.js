function inchToFeet(inch) {
    
    const feet = inch / 12;
    const feetInt = parseInt(feet)
    const feetRemaining = inch % 12;
    if (feetRemaining == 0) {
        return feetInt;
    }
    return [feetInt,feetRemaining];
}

const height = inchToFeet(37);
console.log(Array.isArray(height) 
? `Your height is ${height[0]} feet, ${height[1]} inches.` 
: `Your height is ${height} feet`)