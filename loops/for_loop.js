const namelist = ["John", "Jane", "Jack", "Jill"];
for(let i = 0; i<namelist.length; i++){
    console.log(namelist[i].toUpperCase());
}

//printing 1000 in js

for( let j = 1; j<1001; j++){
    console.log(j);
}

// first n number of numbers summation

let sum = 0;
let n = 7;
for( let l = 0; l<n; l++){
    sum += (l+1) // or sum = sum + (l+1)
}
console.log(sum)

// first n number of numbers multiplication or factorial

let mul = 1;
let m = 7;
for( let k = 0; k<m; k++){
    mul *= (k+1) // or mul = mul * (k+1)
}
console.log(mul)