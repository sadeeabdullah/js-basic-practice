const sections = document.querySelectorAll("h1")
console.log(sections)
for (const section of sections) {
    section.style.border = "4px solid steelblue"
}

//traverse the li-container

const li_container = document.querySelectorAll('.li-container')
console.log(li_container)

// to get the first child we can use the firstChild metho or childNodes[] method here
console.log(li_container[0].childNodes)
console.log(li_container[0].childNodes[2].nextSibling)