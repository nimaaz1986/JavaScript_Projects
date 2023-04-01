const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('../model/User');

const User = mongoose.model('User');
const homeView = (req, res) => {
    pageTitle = "Home Page";
    res.render('home',{
        pageTitle: pageTitle
    });
};


const formView = (req, res) =>{
    pageTitle = 'Registration Form';
    res.render('form', {
        pageTitle: pageTitle
    });
};

const formSubmission = (req, res) => {
    console.log(req.body);
    const{ fullName, email, password, confirm } = req.body;

    if(password != confirm){
        console.log('Password do not match.');
        PasswordError = "Password do not match!"
        res.render('form',{
            PasswordError: PasswordError
        });
    } else {

        User.findOne({email: email}).then((user) => {
            if(user){
                console.log('Email exists in DB!');
                pageTitle = "Already Registered"
                alreadyRegistered = true;
                regMessage = "You are already registered with that email";
                res.render('form-submission',{
                    pageTitle: pageTitle,
                    alreadyRegistered: alreadyRegistered,
                    regMessage: regMessage
                });
            } else{
                const newUser = new User({
                    fullName,
                    email,
                    password
                });
                bcrypt.genSalt(10, (err, salt) => 
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        newUser.password = hash;
                        newUser
                        .save()
                        .then(() => {
                            console.log('New user created in DB!');
                            pageTitle = "New user Registered"
                            alreadyRegistered = false;
                            newRegMessage = "You are newly registered ";
                            res.render('form-submission',{
                                pageTitle: pageTitle,
                                alreadyRegistered: alreadyRegistered,
                                newRegMessage: newRegMessage
                            });

                        }).catch((err) => console.log(err));
                    })
                );
            }
        });

    }

};
module.exports = {
    homeView,
    formView,
    formSubmission
};