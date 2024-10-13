
//REVERSING ARRAY WITHOUT THE  REVERSE METHOD : TASK 1

let reversedArray = [];

const friends= ['elon','waren','bill']

// console.log(friends.reverse())
for (const friend of friends) {
    reversedArray.unshift(friend)
}
console.log(reversedArray)


//Write a JavaScript code to get the even numbers from an array using any looping technique. : TASK 2

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber = [];
for (const n in numbers) {
     if(numbers[n] % 2 == 0){
        evenNumber.push(numbers[n])
     }
}
console.log(evenNumber)


// Use a for...of loop to concatenate all the elements of an array into a single string.

var names = ['Tom', 'Tim', 'Tin', 'Tik']
const nameTogether = []

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    nameTogether.push(name)
    
}
console.log(nameTogether.join(''))



