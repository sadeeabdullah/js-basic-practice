const makeButtonBlue = document.getElementById('make-blue'); //traversing the button
makeButtonBlue.onclick = makeBlue; // here i am just mentioning the function name because if i invoke the funciton it will auto run

function makeBlue() {
    document.body.style.backgroundColor='blue'
}

/// option 1 to use addeventlistener

const makePink = document.getElementById('make-pink');
makePink.addEventListener('click',makePInk);
function makePInk() {
    document.body.style.backgroundColor='pink'
}

// final option we will use this  most of the time

document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod'
})

//change text 
function changeText(){
    const text = document.getElementById('default-text');
    text.innerText= 'Text set from the js'
}