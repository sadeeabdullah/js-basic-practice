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




//// HERE IS AN OTHER WAY TO APPENCHILD WITHOUT CREATING MORE SECION OR ELEMENT


//INSTEAD OF  DOING THE SAME PROCESS AGAIN AND AGAIN WE SIMPLY CAN CREATE INNERHTML TO APPEND EASILY

const appendUsingInnerHtml = document.createElement('section');
appendUsingInnerHtml.innerHTML=`
<section id="about-us">
    <!-- Section Header -->
    <h2>About Us</h2>
    
    <!-- Introductory Paragraph -->
    <p>
        We are a leading company dedicated to providing top-notch services and products to our customers.
        Our mission is to innovate and make life easier for everyone.
    </p>
    
    <!-- Subheading -->
    <h3>Our Services</h3>
    
    <!-- Unordered List -->
    <ul>
        <li>Custom Software Development</li>
        <li>Cloud Services</li>
        <li>Data Analytics and AI</li>
        <li>24/7 Customer Support</li>
    </ul>
    
    <!-- Image -->
    <img src="https://via.placeholder.com/300x150" alt="Company image" />
    
    <!-- Subheading -->
    <h3>Why Choose Us?</h3>
    
    <!-- Ordered List -->
    <ol>
        <li>Expert Team of Professionals</li>
        <li>Advanced Technology Solutions</li>
        <li>Excellent Customer Satisfaction</li>
        <li>Global Presence</li>
    </ol>
    
    <!-- Blockquote -->
    <blockquote>
        "Innovation distinguishes between a leader and a follower." – Steve Jobs
    </blockquote>
    
    <!-- Contact Information -->
    <h3>Contact Us</h3>
    <p>
        Email: contact@company.com<br>
        Phone: +123-456-7890
    </p>
</section>

`

mainSection.appendChild(appendUsingInnerHtml)