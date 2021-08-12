import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, params.env.JWT_SECRET), (error, decoded) => {
            if (error) {
                console.log(error.message);
                res.redirect('/user/login');
            } else {
                console.log(decoded);
                next();
            }
        }
    } else {
        res.redirect('/user/login');
    }
}

export default auth;