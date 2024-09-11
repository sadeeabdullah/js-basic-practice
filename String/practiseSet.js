 

 //QUESTION 1: WHAT WILL BE THE FOLLOWING PRINT IN JS!
 //console.log("HAR\'".length)

 console.log("HAR\'".length)

 //QUESTION 2 : EXPLORE THE I  INCLUDES, START WITH AND ENDWITH FUNCTION OF A STRING

 let name = 'sadee'
 // We can do it using this syntax: string.includes/StartWith/End with(substring,startPosition) Note: when you add a startPosition it will search from that index
  // string.includes/StartWith/End with(substring)  
 console.log(name.includes('s'))
 console.log(name.includes('s',2))
 console.log(name.startsWith('s'))
 console.log(name.startsWith('s',2))
 console.log(name.endsWith('s'))
 console.log(name.endsWith('s',2))

 // QUESTION 3: WRITE A FUNCTION TO CONVERT A GIVEN STRING TO LOWER CASE

 function ConvertToLowerCase(text){
    const newText = text.toLowerCase()
    return newText;
 }
 console.log(ConvertToLowerCase('SADEE'))

//QUESTION 4: EXTRACT OUT THE AMOUNT OUT OF THIS STRING:
            // 'Please give me tk 2000'

let str = 'Please give me tk 2000'
let amount = str.slice('Please give me tk'.length +1)
console.log(typeof amount)
console.log(Number.parseInt(amount))


//QUESTION 5: TRY TO CHANGE THE 3TH CHARACTER OF  A GIVEN STRING.

let newName = name.replace(name[3],"f")
console.log(newName)