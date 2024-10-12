
//ARRAYS ARE VARIABLES WHICH CAN HOLD MORE THAN ONE VALUE.
let a = [1,23,34,56,"not present",null, false]  //NOTE: WE CAN STORE MULTIPLE TYPE OF DATA INTO ONE ARRAY.
console.log(a[6])

//TO MEASURE THE LENGTH OF AN ARRAY WE USE .length PROPERTY
console.log(a.length)

//ARRAYS ARE MUTABLE / ARRAYS CAN BE CHANGED

 a[7] = 54 // ADDING A NEW VALUE TO THE ARRAY
 a[1] = 53 //CHANGING THE FIRST VALUE OF AN ARRAY
 console.log(a)
 console.log(typeof a) //ARRAYS ARE OBJECT. ARRAYS CAN HOLD MANY VALUES UNDER A SINGLE NAME.


 //DISPLAYING THE ARRAY ELEMENT USING FOR LOOP

 let b = [1,23,242,32]
 for(let i = 0; i<b.length;i++){
    console.log(b[i])
 }

 const friendGroup1 = ['rahim','karim','tutul','tullu']
 const friendGroup2 = ['sobbom','totom']

 //IF WE WANT TO CONCAT OR ASSEMBLE 2 ARRAY WE HAVE TO USE THE METHOD BEL0W
 console.log(friendGroup1.concat(friendGroup2))

 //IF WE WANT TO JOIN ARRAY ELEMENT TOGETHER WE HAVE TO USE THE METHOD BEL0W
 console.log(friendGroup1.join('+')) //output rahim+karim
 console.log(friendGroup1.join()) //output rahim,karim

 //IF WE WANT TO SLICE ARRAY ELEMENT WE HAVE TO USE THE METHOD BEL0W
 console.log(friendGroup1.slice(2,3)) // ['tutul'] provide a new array 

 //IF WE WANT TO CHECK IT IS ARRAY OR  NOT WE HAVE TO USE THE METHOD BEL0W
 console.log(Array.isArray(friendGroup1))

 //IF WE WANT TO CHECK THE INDEX OF THE ELEMENT IN AN ARRAY WE HAVE TO USE THE METHOD BEL0W
 console.log(friendGroup1.indexOf("tutul"))

 //IF WE WANT TO CHECK THE ELEMENT OF THE INDEX IN AN ARRAY WE HAVE TO USE THE METHOD BEL0W
 console.log(friendGroup1[3])

 //IF WE WANT TO CHECK THE ELEMENT IS INCLUDING IN AN ARRAY OR NOT WE HAVE TO USE THE METHOD BEL0W
 console.log(friendGroup1.includes( "tutul"))

 //IF WE WANT TO CHECK THE MAX ELEMENT IN AN ARRAY OR NOT WE HAVE TO USE THE METHOD BEL0W
 const number2=[5234,3462,34]
 console.log(Math.max(...number2))



