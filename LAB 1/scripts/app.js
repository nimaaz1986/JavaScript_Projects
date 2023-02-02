//Namw : Nima Azadikhah
// Student ID: 100834828
// Date: 01/02/2023






// get the header id for title of mu home page and show the title
let indexTile =document.getElementById("header1") 
indexTile.innerHTML = "This is My Home Page For WEBD6201 -WEB Client Site";

let change = document.getElementsByClassName("nav-link").innerHTML;
if(change = "Products"){
    change.innerHTML = "interest";
}


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