const jsonwebtoken = require('jsonwebtoken');

export function verifyToken = (req, res, next) => {
    const token = req.header['Authentication-token'];
    if (!token) {
        res.status(401).send("Unauthorized request");
    } else {
        jsonwebtoken.verifyToken(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                res.status(401).send("JWT token is not valid");
            } else {
                req.userId = decoded._id;
                next();
            }
        })
    }
}
