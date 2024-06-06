let name = "sadee"
 
//string can be declared into single or double quotes

// to get the length of the string

console.log(name.length)

// to get the index of the string
console.log(name.indexOf("e"))

//or you can the get the value using the index
console.log(name[4])

//template literals
 // you can use template literals to add to string

 const boy1 = "ved"
 const boy2 = "sed"
 const sentence = `the boys are ${boy1} and ${boy2}`
 console.log(sentence)

 //escape sequence characters

 let fruit = 'apple\'s';  // it will take a single quote
 let lineBreak = 'hello\nworld'; // it will take a line break
 let tab = 'hello\tworld'; // it will take a tab
 let backspace = 'hello\bworld';  // it will take a backspace
 let formFeed = 'hello\fworld'; // it will take a form feed
 let backslash = 'hello\\world'; // it will take a backslash
 let  dash = 'hello\rworld'; // it will take a overwrite the previous word (carriage return)

 //THE ESCAPE CHARACTER WILL NOT BE COUNTED IN LENGTH

console.log(fruit, lineBreak, tab, backspace, formFeed, backslash, dash)