/**
 * Name: Nima Azadikhah
 * Student Banner: 100834828
 * Date Completed: 3/5/2023
 */


/*
* Class to create new user
use the ice 4 for creating User Class
 */
export class User {

    /**
     * User
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} email
     * @param {string} password
     */
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    /**
     * @property {function} displayUser Prints users details: user name, username, email, and password
     * @returns {string}
     */
    displayUser() {
         return `Name: ${this.firstName} ${this.lastName}
         Email: ${this.email}
         Password: ${this.password}`
    }
}