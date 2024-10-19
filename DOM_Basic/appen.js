const li__container = document.getElementById('container')
const li = document.createElement('li')
li.innerText="list added from appenjs"
li.style.color='red'
li__container.appendChild(li)
console.log(li__container)



// how to append a whole section into main

//first traverse the section where you want to appenchild
const mainSection = document.getElementById('main-container')
console.log(mainSection)

//creating elements using create element methods

const newSection = document.createElement('section')

const ul = document.createElement('ul')
const header = document.createElement('h1')
header.innerText="adding this from appen.js"
const li1 = document.createElement('li')
li1.innerText = 'adding into the new section'
ul.appendChild(li1)

newSection.appendChild(header)
newSection.appendChild(ul)
mainSection.appendChild(newSection)

