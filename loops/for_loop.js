

// for(i=4;i<101; i= i + 3)
//     console.log(i)

//  program to add first n natural number
let sum = 0
let n = 3
for (let i = 0 ; i<n;i++){
    sum += (i + 1)
    console.log(sum + "+")
}
console.log("first" + n + "natural number sum is " + sum)

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
console.log("first" + u + "natural even number sum is " + total)


//LETS CREATE A PROGRAM TO GET THE SUM VALUE OF FIRST O NATURAL ODD NUMBERS
 
let summation = 0
let o = 10
for (let i = 0; i<o; i++){
    if(i%2 != 0){
        console.log(i)
        summation += i
    }
}
console.log("the summation for the first",o, "natural odd numbers is",summation)

//LETS  CREATE A PROGRAM FOR GETTING THE TOTAL OF FIRST P NATURAL PRIME NUMBERS
let tot = 0
let p=100
for(let i = 2; i<p ; i++){
    let isPrime = true;
    for (let j= 2; j<i; j++){
        if(i % j == 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        tot +=i
        
    }
}
console.log(tot ,"is the prime numbers total")

//LETS WRITE A PROGRAM TO GET A FACTORIAL VALUE OF ANY NUMBER

let fact = 10
let result = 1
for (let i = 1; i<=fact; i++){
    result *= i
    
}
console.log(result,"tullu")