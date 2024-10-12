const college ={
    name: "shoahdf",
    place:6,
    subject:['english', 'bangla'],
    event:{
        name:'21 e feb',
        place:'okhane'
    }
}

// TO GET THE KEY OF ALL THE OBJECT

console.log(Object.keys(college)) //output: [ 'name', 'place', 'subject', 'event' ]

// TO GET THE KEY OF ALL THE value
console.log(Object.values(college))//output: [
                                    //     'shoahdf',
                                    //     6,
                                    //     [ 'english', 'bangla' ],
                                    //     { name: '21 e feb', place: 'okhane' }
                                    //   ]



                                                //NOTE: WE CAN CHANGE THE VALUE OF ANY KEYS AND WE USE FOR IN LOOP ON OBJECT


for (const c in college) {
    console.log(c)
    console.log(college[c])
}