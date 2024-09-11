 let obj={
     sadee : 23,
     john : 34,
     jack : 45,
     jill : 56,
 }

 for( let a in obj){
    console.log( "marks of " + a +  " is "+ obj[a])
 }

//  program to add first n natural number
let sum = 0
for (let i = 0; i<3; sum = sum + i++){
   sum = sum + i
}
console.log(sum)

 let roll = {
    abdullah : 344,
    johandream : 4223,
    jackathon : 534,
    jillamiya : 234
 }
 for (let r in roll){
   console.log("the roll of ",r,"is",roll[r])
 }


 //LETS DO THIS WITH THE BASIC FOR LOOP
 
 let Rol ={
     abdullah : 344,
     johandream : 4223,
     jackathon : 534,
     jillamiya : 234
 }
 for(let i = 0; i<Object.keys(Rol).length; i++){
   console.log("the roll of ",(Object.keys(Rol))[i],"is",Rol[Object.keys(Rol)[i]])
 }


 const originalObj = {
   name: 'Alice',
   age: 25,
   city: 'Wonderland'
 };
 
