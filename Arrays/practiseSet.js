
//REVERSING ARRAY

let reversedArray = [];

const friends= ['elon','waren','bill']

// console.log(friends.reverse())
for (const friend of friends) {
    reversedArray.unshift(friend)
}
console.log(reversedArray)