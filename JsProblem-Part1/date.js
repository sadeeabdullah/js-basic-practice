const today = new Date()
const date = new Date('2026-12-09')
console.log(today)
console.log(date)
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(date.getDay())
console.log(today.getMonth())
console.log(today.getFullYear())
console.log(today.getDay())

            /// *** WHEN YOU TRY TO SHOW DATE USING STRING THEN THE STRING WILL SHOW THE MOTH  USING THE INDEX FROM 1 AND IF YOU  SHOW IT USING GET MONTH  IT WILL START THE INDEX FROM 0 *** ///


                        /////////*****Only month are indexed ******/////////

const specificDate = new Date(2091,12,3)
console.log(specificDate) /// it will give an output: 2092-01-02T18:00:00.000Z now worry about why this is showing the month from zero indexed and if it is 12 then in js it 13 month and as you the 13 month is in the next year thats why it is showing 2092


///// MOST IMPORTANTLY: WE CAN CHANGE THE VALUE OR DATE WITH THE SET METHOD:


specificDate.setMonth(-10);
console.log(specificDate)