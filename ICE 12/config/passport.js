const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const { validPassword } = require('../lib/passwordUtils');
const User = connection.models.User;

// Strategies are responsible for authenticating requests by implementing an authentication mechanism that defines how to encode a credential, such as a password or an assertion from an identity provider (IdP), in a request.

// We are using a username and password strategy that requires a callback that will check if the user exists and if the password is valid and return true or false

const verifyCallback = (username, password, done) => {
    User.findOne({ username: username}).then((user) => {
        if(!user){
            return done(null, false)// this is what will trigger a failed login.
        }

        const isValid = validPassword(password, user.hash, user.salt);

        if (isValid){
            return done(null, user) // trigger successfull login
        } else{
            return done(null, false) // trigger faild login
        }

    });
// this uses the req.body.username and password from logging in to find a user and see if the user is valid - authentication

//this is what will trigger a failed login
// trigger successful login
// trigger failed login
};
//LocalStrategy is a passport.js strategy that allows you to authenticate users based on a username and password. It is used to verify user credentials by checking if the username and password are valid.
const stragegy = new LocalStrategy(verifyCallback)
// In Passport.js, serializeUser and deserializeUser are two methods that are used to store and retrieve user data from a session. The serializeUser method is used to determine which data of the user object should be stored in the session.

passport.use(stragegy);
// The result of the serializeUser method is attached to the session as req.session.passport.user = { ~~ serialized user object }.

passport.serializeUser((user, done) =>{
    done(null, user.id)
});
// The deserializeUser method is used to retrieve the whole object from the session. It should return the full object to be attached to the request as req.user.
passport.deserializeUser((userId, done) =>{
    User.findById(userId).then((user) => {
        done(null, user);
    })
    .catch((err)=> done(err))
});