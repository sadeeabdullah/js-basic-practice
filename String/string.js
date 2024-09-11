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
                    // OR
const about ="sadee is a 'gand' what do you think"

const slashN = "sadee is a good boy. \n He work so hard"
console.log(about, abouts, slashN)