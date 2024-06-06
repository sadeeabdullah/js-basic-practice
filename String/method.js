let name = 'sadee'

// To convert to upper or lower case

console.log(name.toUpperCase())
console.log(name.toLowerCase())

console.log(name.slice(2, 5)) // extracts from index 2 to index 5 (excluding index 5).
console.log(name.slice(-4)) // extracts the last four characters of the string.
console.log(name.slice(2))  //extracts from index 2 to the end of the string.
console.log(name.slice(1,3))  //extracts the character at index 2 and 3.


// /replace method

console.log(name.replace('s','v'))

//concating two strings

// we can also use + operator to contcat as well
let friend= "dhollu"

console.log(name.concat("is a friend of ",friend))

//to remove the spaces
let friend2 = "  nulla    "
console.log(friend2.trim())