/**
 * Name: Nima Azadikhah
 * Student Banner: 100834828
 * Date Completed: 3/5/2023
 */


// Import all exported members from the "user.js" module and assign them to the "classUser" variable
import * as classUser from "./user.js"


/**
Listen for form submission and insert new link with the entered username
before the Login/Logout link and after the Contact Us link.
*/
if ($("#btnLogin")){

    // listen for form submission
    $("#btnLogin").click(function (e){
      // prevent the default submit action (stay on the page)
      e.preventDefault(); 
      
  
      // get username value
      let username = $("#username").val();
  
      // create new navbar link with username
      let newLink = $("<a>").text(username);

      newLink.addClass("nav-link");
  
      
      // insert new link  after Contact Us and before "Login/Logout" link and
      let contactLink = $(".navbar-nav").find("a.nav-link:contains('Contact Us')");
      // Insert a new list item with class "nav-item" and append newLink to it, then insert it after the parent of contactLink.
      contactLink.parent().after($("<li>").addClass("nav-item").append(newLink));
      // clear form inputs
      $("#username").val("");
      $("#InputPassword").val("");
    });
  
}




// FORM JQUERY
//imports all functions and variables exported from the "form.js" module and makes them available under the "formValidation" object.
import * as formValidation from "./form.js"
// if the submit button is on the page
if ($("#btnRegSubmit")) {
  //add a click function that calls a callack function
  $("#btnRegSubmit").click(function (e) {
    // prevent the default submit action (stay on the page)
    e.preventDefault();

    //console.log("Before creating unvalidated_user object");

    // Create an unvalidated user object using form inputs
    const unvalidated_user = new classUser.User(
        // get the first name input
        $("#inputFirst").val(),
        // get the last name input
        $("#inputLast").val(), 
        // get the email input
        $("#inputEmail").val(),
        // get the password input
        $("#inputPassword").val()

    )

    // Using the formValidation module, validate the first name input value and store any error messages in the firstNameError variable.
    let firstNameError = formValidation.validateFirstName(unvalidated_user.firstName);
    
        // Using the formValidation module, validate the last name input value and store any error messages in the lastNameError variable
    let lastNameError = formValidation.validateLastName(unvalidated_user.lastName);
    
     // Using the formValidation module, validate the email input value and store any error messages in the emailError variable
    let emailError = formValidation.validateEmail(unvalidated_user.email);
  
    // call the validatePassword function from formValidation module to validate password and confirmation password entered by the users
    let passwordError = formValidation.validatePassword(unvalidated_user.password,      $("#inputPassword2").val());
    
    // check if there are any errors
if (firstNameError === "" && lastNameError === "" && emailError === "" && passwordError === "") {
 //console.log("inside");

  // No errors, log user information to the console.
  console.log(`UserDetails: ${unvalidated_user.displayUser()}`);

   // clear the form
   $("#inputFirst").val("");
   $("#inputLast").val("");
   $("#inputEmail").val("");
   $("#inputPassword").val("");
   $("#inputPassword2").val("");
   console.log("User details logged to console.");

     // clear out all error messages
     $(".errorMessage").html("<p></p>");
} else {
  // there are errors, so show them to the user

  // Create a new div element with the error message and add the class
  let firstNameErrorMessage = $("<div class='errorMessage'></div>").html(firstNameError);
  // Insert the error message after the input field for the first name
  $("#inputFirst").after(firstNameErrorMessage);

  // Create a new div element with the error message and add the class
  let lastNameErrorMessage = $("<div class='errorMessage'></div>").html(lastNameError);
  // Insert the error message after the input field for the last name
  $("#inputLast").after(lastNameErrorMessage);


  // Create a new div element with the error message and add the class
  let emailErrorMessage = $("<div class='errorMessage'></div>").html(emailError);
  // Insert the error message after the input field for the email
  $("#inputEmail").after(emailErrorMessage);

  // Create a new div element with the error message and add the class
  let passConfError = $("<div class='errorMessage'></div>").html(passwordError);
  // Create a new error message element for the password error and append it after the password input field.
  $("#inputPassword").after(passConfError.clone());
  $("#inputPassword2").after(passConfError);
}



  });
}

