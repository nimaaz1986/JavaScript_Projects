/**
 * Name: Nima Azadikhah
 * Student Banner: 100834828
 * Date Completed: 3/5/2023
 */



/**
 * validateFirst - validated user first name entry through registration form
 * @param {string} firstName
 * @returns html element for error message
 */
export function validateFirstName(firstName) {
    if (firstName.length < 2) {
        return "<p>You have entered a first name that is too short.</p>"
    }
    else {
        return "";
        //return "<p></p>"
    }
};

/**
 * validateLast- validated user last name entry through registration form
 * @param {string} last
 * @returns html element for error message
 */
export function validateLastName(LastName) {
    if (LastName.length < 2) {
        return "<p>You have entered a last name that is too short.</p>"
    }
    else {
        return "";
    }
};


/**
 * validateEmail- validated user email entry through registration form
 * @param {string} email
 * @returns html element for error message
 */
export function validateEmail(email) {
    if (email.length < 8 || !email.includes('@')) {
        return "<p>You have entered am email that is too short and or you are not use the correct format.</p>"
    }
    else {
        return "";
    }
};

/**
 * validatePassword- validated user password entries 1 and 2 are the same through ristration form
 * @param {string} password1
 * @param {string} password2
 * @returns html element for error message
 */
export function validatePassword(pass1, pass2) {
    if (pass1.length < 6) {
        return "Password must be at least 6 characters long.";
    } else if (pass1 != pass2) {
        return "Passwords do not match.";
    } else {
        return "";
    }
};

