

// for(i=4;i<101; i= i + 3)
//     console.log(i)

//  program to add first n natural number
// let sum = 0
// let n = 3
// for (let i = 0 ; i<n;i++){
//     sum += (i + 1)
//     console.log(sum + "+")
// }
// console.log("first" + n + "natural number sum is " + sum)

// HERE sum += (i + 1) IS THE SHORTAND OF sum = sum + (i + 1)


// let write a sample for loop that add the first u natural even numbers

let total = 0
let u = 10
for (let i = 0; i<u; i++){
   
        if (i %2 == 0){
            console.log(i)
            total += i
        }
      
}
console.log("first" + u + "natural number sum is " + total)