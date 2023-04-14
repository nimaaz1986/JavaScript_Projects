const crypto = require('crypto');

// GENERATE A PASSWORD TO SAVE TO THE DATABASE -POSTREGISTER IN USERCONTROLLER.JS USES THIS
function generatePassword(password){
    let salt = crypto.randomBytes(32).toString('hex')
    let hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex')
    return{salt: salt, hash: hash };
}

// RETREIVE THE PASSWORD AND CHECK WITH THE SAME HASH APPLIED TO LOGIN PASSWORD - VERIFYCALLBACK IN PASSPORT.JS USES THIS
function validPassword(password, hash, salt){
    let hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512');
    return (hash = hashVerify);
}
module.exports = { generatePassword, validPassword };
