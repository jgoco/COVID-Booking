const jsonwebtoken = require('jsonwebtoken');

// Middleware function for verifying an Authenication token
// Call this function before letting users access private routes
function checkValidAuthToken(req, res, next) {
    const token = req.header('Authentication-Token');
    if (!token) {
        return res.status(401).send("Access Denied");
    }

    try {
        let verifiedUser = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        req.user = verifiedUser;
        next();
    } catch (error) {
        res.status(400).send("Invalid token")
    }
}

module.exports.checkValidAuthToken = checkValidAuthToken;