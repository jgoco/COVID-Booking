const crypto = require('crypto');

// Password verification
function validatePassword(password, hash, salt) {
    let computedHash = crypto.pbkdf2Sync(password, salt, 20000, 64, 'sha512').toString('hext');
    return computedHash === hash;
}

// Storing passwords securely -- it is bad practice to store plain text passwords in DB
function generatePassword(password) {
    let salt = crypto.randomBytes(32).toString('hex');
    let hash = crypto.pbkdf2Sync(password, salt, 20000, 64, 'sha512').toString('hex');

    return {
        salt: salt,
        hash: hash
    };
}

module.exports.validatePassword = validatePassword;
module.exports.generatePassword = generatePassword;