
const jwt = require('jsonwebtoken');

// global secret import
const {jwtSecret} = require('../config.js');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;

    const word = token.split(" ");
    const jwtToken = word[1];
    

    const decodedValue = jwt.verify(jwtToken , jwtSecret);
    if(decodedValue.username){
        req.username = decodedValue.username
        next();

    }else {
        res.status(403).json({
            msg :'Your are not authenticated'
        });
    }
}

module.exports = userMiddleware;