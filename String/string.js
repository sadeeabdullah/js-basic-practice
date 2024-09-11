//LETS EXPLORE STRING

let name = "sadee"

//TOO GET THE LENGTH  OF STRING
console.log(name.length)

//TO GET THE INDEX VALUE OF STRING
console.log(name[0])

//USING TEMPLATE LITERAL TO ADD A STRING TO ANOTHER
let friend1 = 'habib'
let friend2 = 'habil'
console.log(`${friend1} is a friend of ${friend2}`)  //NOTE : We can use single or double quote into the back tik and surprisingly it will work properly
console.log(`${friend1} is "a" friend of ${friend2}`) // SAMPLE: habib is "a" friend of habil (It will show the quote into the string)

//LET EXPLORE ESCAPE SEQUENCE CHARACTER
const abouts = "sadee is a \'gand\' what do you think"
const abouts1= "sadee is a \'gand what do you think"
                    // OR
const about ="sadee is a 'gand' what do you think"
const about1 ="sadee is a 'gand what do you think"
const slashN = "sadee is a good boy. \n He work so hard" //NOTE : It will make a new line.
const slashR = "sadee is a good boy. \r He work so hard" //NOTE : It will replace the first sentence with second one. In JavaScript, a carriage return is represented by the special character \r. It originates from older typewriters where the "carriage" (which holds the paper) would physically return to the beginning of a line when a line was completed.
const slashT = "sadee is a good boy. \t He work so hard" //NOTE : It will use tab space after the first sentence with second one.
console.log(about, about1, abouts, abouts1 ,slashN, slashR, slashT)