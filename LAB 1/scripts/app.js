//Namw : Nima Azadikhah
// Student ID: 100834828
// Date: 01/02/2023






// get the header id for title of mu home page and show the title
let indexTile =document.getElementById("header1") 
if(indexTile){
    indexTile.innerHTML = "This is My Home Page For WEBD6201 -WEB Client Site";
}

// change the Product link to linterests
document.getElementById("level02").innerHTML = "Interests";


/**
 * function to redirect to home after 3 seconds and Print data to console
 * 
 * @param {*} e 
 */
function timedRedirect(e){
    e.preventDefault();
    e.stopPropagation();
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let contactpassword = document.getElementById('exampleInputPassword1').value;

    console.log("Email " + contactEmail + " Password: "+ contactpassword);
    // it takes a number of millseconds(3 seconds) and it will pause before executing the code
    setTimeout(function (){
        window.location.href = "index.html";
    }, 3000);
}

// get the submit button for the contact form
let submitButton = document.getElementById('submit-button');

// if on page with contact form button, listen for the click event and fire the timedRedirect function
if (submitButton){
    submitButton.addEventListener('click', timedRedirect, false);
}



// Create  array variable for books in interests page
let book1 = {
  title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  description: "Ta book on self-help by James Clear. It is a guide to getting better habits by making small changes over time. The main idea of the book is the idea of atomic habits These are habits that seem so small and insignificant that they don't seem to matter, but over time, they add up to make big changes. The author talks about the science behind how habits form and gives steps for making habits that last. The book talks about things like setting goals, getting motivated, making decisions, and being productive. It tells people that they can reach their goals by making small, steady changes to their habits and routines."
};

let book2 = {
  title: "The Power of Now: A Guide to Spiritual Enlightenment", 
  description: "The Power of Now by Eckhart Tolle is a masterpiece that has transformed the lives of millions of people around the world. It teaches the reader how to live in the present moment and find inner peace and happiness. The book explains how negative emotions such as anxiety, fear, and anger stem from a mind-created illusion of the future or past and how one can break free from this cycle to live in the present moment. With its simple yet profound teachings, The Power of Now is a must-read for anyone seeking spiritual enlightenment and inner peace."
};

let book3 = {
  title: "The Compound Effect by Darren Hardy", 
  description: "The Compound Effect is a self-help book that teaches readers about the power of small, daily habits in creating significant change over time. Written by entrepreneur and motivational speaker Darren Hardy, the book draws on scientific research and personal anecdotes to illustrate the principles of the compound effect and show how anyone can achieve their goals by making consistent, small improvements each day. I love this book for its practical advice, its inspiring stories, and its empowering message about the limitless potential of human progress."
};



// create book1title and if ir exists in the page this is excuted
 let book1title = document.getElementById("book1Title")
 if(book1title){
    book1title.innerHTML = book1.title;
 }
// create book1book1Description and if ir exists in the page this is excuted
 let book1book1Description = document.getElementById("book1Description")
 if(book1book1Description){
    book1book1Description.innerHTML = book1.description;
}

// create the variable and if ir exists in the page this is excuted
let book2Title = document.getElementById("book2Title")
if(book2Title){
    book2Title.innerHTML = book2.title;
}
// create the variable and if ir exists in the page this is excuted
let book2Description = document.getElementById("book2Description");
if(book2Description){
    book2Description.innerHTML = book2.description;
}

// create the variable and if ir exists in the page this is excuted
let book3Title = document.getElementById("book3Title")
if(book3Title){
    book3Title.innerHTML = book3.title;
}
// create the variable and if ir exists in the page this is excuted
let book3Description = document.getElementById("book3Description")
if(book3Description){
   book3Description.innerHTML = book3.description;
}



// Create skills and images for Services page
let skillTitle1 = document.getElementById("skillTitle1");
if(skillTitle1){
  skillTitle1.innerHTML = "python Programming";
}
let skillImage1 = document.getElementById("skillImage1");
if (skillImage1){
  skillImage1.src = "images/python-programming.jpg";
}

let skillTitle2 = document.getElementById("skillTitle2");
if(skillTitle2){
  skillTitle2.innerHTML = "System Automation Skills";
}


let skillImage2 = document.getElementById("skillImage2");
if(skillImage2){
  skillImage2.src = "images/systemAutomation.jpg";
}


let skillTitle3 = document.getElementById("skillTitle3");
if(skillTitle3){
  skillTitle3.innerHTML = "data analysis skills";
}

let skillImage3 = document.getElementById("skillImage3");
if(skillImage3){
  skillImage3.src = "images/dataanalyst-skills.jpg";
}



// Anout Us pages Variables
function AboutUsInfo() {
  let aboutMeTitle = document.getElementById("aboutMeTitle");
  if(aboutMeTitle){
    aboutMeTitle.innerHTML = "About Me";
  }
  let aboutMeImage = document.getElementById("aboutMeImage");
  if(aboutMeImage){
    aboutMeImage.src = "images/nima.png";
  }
  let aboutMeExplanation = document.getElementById("aboutMeExplanation");
  if(aboutMeExplanation){
    aboutMeExplanation.innerHTML = "With the work experience I already have, I'm interested in learning more about the medical field. I worked as a biomedical engineer for a few years for a company that instals and fixes medical equipment for clinics and hospitals.In the future, one of my goals is to create a piece of software that will be of service to the medical staff and make the work they do more manageable.";
  }
  
  
  
}
AboutUsInfo();



// Creating Human Resources in Java file

// Get the ul element that holds the navbar links
let navbarNav = document.querySelector(".navbar-nav");

// Create the new li element for the Human Resources link
let newLink = document.createElement("li");
newLink.innerHTML = `
  <a class="nav-link" href="human-resources.html">Human Resources</a>
`;

// the add method
// its add "nav-item " to newly created "li"
newLink.classList.add("nav-item");

// Get the li element for the About Us link
let aboutUsLink = document.querySelector("#level04").parentElement;

// Insert the new li element after the About Us li element
navbarNav.insertBefore(newLink, aboutUsLink.nextSibling);



// Create the navbar element from the getbootstrap.com
/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-md">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav> */

function createFooter() {

// Create the navbar element
let navbar = document.createElement("nav");

// navbar element is created with the class name "navbar navbar-expand-lg navbar-light bg-light"
navbar.className = "navbar navbar-expand-lg navbar-light bg-light";

// Create the container element for the Navbar
let container = document.createElement("div");

container.className = "container-md";

// Create the Navbar brand
let brand = document.createElement("a");
brand.className = "navbar-brand";
brand.href = "#";
brand.textContent = "CopyRight 2023";

// Append the brand to the container
container.appendChild(brand);

// Append the container to the Navbar
navbar.appendChild(container);

// Get the body element
let bodyTag = document.getElementById('mainBody');

// Append the Navbar to the body
bodyTag.appendChild(navbar);
}

createFooter();

