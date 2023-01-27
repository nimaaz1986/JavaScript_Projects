console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */

//TODO:
// Make all fields required --Done
// Add a pattern attribute in the telephone element (HTML) -- Done
// Ensure the password is redacted into dots on screen when typed in - Done 
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!) - Done
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)
// Validate the username when the form is submitted
// Clear any additional error message and highlighting when the form is reset
// COMMENT EVERYTHING :D
// Pop your .js file into the meeting chat when you're done and we'll have a look at some examples! (Feel free to leave your name off)

function validateUsername(usernameString) {
    console.log('in ValidateUsername');
    let genErEl = document.getElementById('generalError');
    let usernameInputEl = document.getElementById('usernameInput');
    let usernameErrorEl = document.getElementById('usernameError');
    let backgroundColor = "#ffffff";
    let genErMsg = "";
    let usernameErMsg = "";

    let usernameRegex = /^\S*$/;
    if (usernameString.length < 5) {
        // we have a specific error for general error massage . the length      of       message less that 5 
        genErMsg = "Username must be at least 5 characters long";
        usernameErMsg = "Username must be at least 5 characters long";
        backgroundColor = "#e5989b";
    } else if (usernameString.length > 20) {
        genErMsg = "Username must be less than 20 characters long";
        usernameErMsg = "Username must be less than 20 characters long";
        backgroundColor = "#e5989b";
    } else if (!usernameString.match(usernameRegex)) {
        genErMsg = "Username cannot contain spaces";
        usernameErMsg = "Username cannot contain spaces";
        backgroundColor = "#e5989b";
    }

    genErEl.innerHTML = genErMsg;
    usernameErrorEl.innerHTML = usernameErMsg;
    usernameInputEl.style.backgroundColor = backgroundColor;
}

let submitButton = document.getElementById('submit-reg-form');
if (submitButton) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        let username = document.getElementById('usernameInput').value;
        validateUsername(username)       
    })
};


// function isValidUsername(username) {
//     // Regular expression for validating the username
//     // The pattern requires the string to start with a letter,
//     // contain only letters, numbers, or underscores,
//     // and have a length between 3 and 15 characters
//     // (source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)
    
//     var pattern = /^[a-zA-Z][a-zA-Z0-9_]{2,14}$/;
//     return username.match(pattern);
//   }
let submitRest = document.getElementById('submit-reg-form1');

submitRest.addEventListener('click', function(e) {
    //e.preventDefault();
    resetForm();

})
   

// Rest function for all error massages and change  backgroud colors to default
function resetForm() {

    // greate  username InputE1 & usernameErrorE1  by return Element(id) from html page
    let usernameInputEl = document.getElementById('usernameInput');
    let usernameErrorEl = document.getElementById('usernameError');
    // change the bachgrod color of  user input box(RED) to Default one(White)
    usernameInputEl.style.backgroundColor = "#ffffff";
    

    // clear all error massages on the top and button of the box
    generalError.innerHTML = '';
    usernameErrorEl.innerHTML = '';

    // change the background color of the page to white.
    backgroundColor = "#ffffff";

    

  

  }



