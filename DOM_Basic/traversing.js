// traversing in programming language is a datastructure signinfies accessing each element in data structure systematically.


///it is a method that select all the P tag from the dom
const allPTag = document.getElementsByTagName('p')
console.log(allPTag)

// it is a method that select the portion or div using the ID name and innertext
const traverseUsingTheId = document.getElementById('title')
console.log(traverseUsingTheId) // it will provide only the element and we can easily manipulate it
console.log(traverseUsingTheId.innerText)

// it is a method that select the portion or div using the className name and innertext
const traverseUsingTheclass = document.getElementsByClassName('title-class')
console.log(traverseUsingTheclass) 
for (const text of traverseUsingTheclass) {
        console.log(text.innerText)
}


// The method above will provide HTML collection. We can use forOf into it.


//The method below will provide NodeList. we can use forEach into it.


// it will traverse multiple elements at once
const multipleSelector = document.querySelectorAll('.li-container li') ;
console.log(multipleSelector)

// it will only traverse first element
const singleSelector = document.querySelector(".li-container li")
console.log(singleSelector)


// how to change the style of the html element or building block

traverseUsingTheId.style.backgroundColor="red"