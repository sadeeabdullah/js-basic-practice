const makeButtonBlue = document.getElementById('make-blue'); //traversing the button
makeButtonBlue.onclick = makeBlue; // here i am just mentioning the function name because if i invoke the funciton it will auto run

function makeBlue() {
    document.body.style.backgroundColor='blue'
}