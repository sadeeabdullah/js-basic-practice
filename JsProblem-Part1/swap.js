let a = 5 ;
let b = 6;


/// TO SWAP THEIR VALUES WE USUALLY TO THE APPROACH BELOW:
// a = b ; // it will set the value of b to a  now the value of a = 6
// b = a; // now it will set the value of b to a where already the value is 6 
console.log(a,b) // so from the consequences we will get value of the console will be 6, 6


/// for this we use a special temporary space 


const temp = a; // it will set the value of a here temporary.
console.log(temp)
 a= b;
 b = temp;
 console.log(a,b)