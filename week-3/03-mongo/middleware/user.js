
const { User } = require('../db/index.js');


// Middleware to handle user auth

async function userMiddleware(req, res, next) {

    const username = req.headers.username;
    const password = req.headers.password;
    console.log(username)
    console.log(password)

    try {
        const value = await User.findOne({

            username : username,
            password: password

        })
        console.log(value)

        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "User doesnt exists"
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Internal server error'
        });
    }
}

module.exports = userMiddleware;