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

// it will only traverse first element
const singleSelector = document.querySelector(".li-container li")
console.log(singleSelector)

// The method above will provide HTML collection. We can use forOf into it.


//The method below will provide NodeList. we can use forEach into it.


// it will traverse multiple elements at once
const multipleSelector = document.querySelectorAll('.li-container li') ;
console.log(multipleSelector)


// if we want to get the other classes of the traversing element then we can use the get attribute
const att = traverseUsingTheclass[0].getAttribute('class')
console.log(att)
// or we can easily get the class using classlist
console.log(traverseUsingTheclass[0].classList)
//we can add or remove class using add and remove methods
traverseUsingTheclass[0].classList.add('w-24')
traverseUsingTheclass[0].classList.remove('bg-red')
console.log(traverseUsingTheclass[0].classList)


// how to change the style of the html element or building block

traverseUsingTheId.style.backgroundColor="red"