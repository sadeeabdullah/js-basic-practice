                                        //NAME IS IMMUTABLE. ONLY YOU CAN MANIPULATE AND PRODUCE A NEW STRING

// METHOD IS USED TO MANIPULATE STRING



//GETTING THE LENGTH OF STRING
let name = 'sadee'
let nameWithEscapeCharacter = 'sadee\'' //NOTE: It will count the escape character as one
console.log(name.length)
console.log(nameWithEscapeCharacter.length)

//MAKING THE STRING UPPERCASE
console.log(name.toUpperCase())

//MAKING THE STRING LOWERCASE
console.log(name.toLowerCase())

//MAKING A SLICE OF THE STRING AND SHOW
console.log(name.slice(2,4)) //NOTE: Indexing start from 0. from  2 to 4  will be sliced but the 4 will not be included.
console.log(name.slice(2)) //NOTE: Indexing start from 0. from  2 to last will be sliced if you don't use any second argument into the slice method.

//REPLACING ANY INDEX OF STRING
console.log(name.replace("sad","pad")) //NOTE: using replace method you can replace any strings index parts with a desire string or strings.

//CONCATING STRINGS
let friend = 'no one'
console.log(name.concat(" is a friend of ",friend)) // NOTE: It will add another string with the first string

//TRIM METHOD (TRIM THE SPACE)
let school = "       school name is jpi                   "
console.log(school.trim()) // NOTE : It will trim the unusual space before and after the string.






                                                /**
                                                 * NO NEED TO REMEMBER ALL THE METHODS YOU CAN SIMPLY DO  GOOGLE SEARCH AND USE IT WHEN YOU NEED ONE
                                                 */


// QUICKQUIZ: USE A FOR LOOP TO PRINT A STRING ALL INDEX

for(let i = 0; i<name.length; i++){
    console.log(name[i])
}

//TO SPLIT A STRING USING A CHARACTER OR BLANK SPACE

console.log(school.split(' '))


// HOW TO REVERSE A SENTENCE OR STRING USING FOR OF LOOP

let reverse ="";
const letters="i am not a good one"
for (const letter of letters) {
    reverse = letter + reverse
}
console.log(reverse)

        // ANOTHER WAY TO REVERSE THE STRING

const reversed = reverse.split('').reverse().join('')
console.log(reversed)