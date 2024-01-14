

const   { Admin }  = require('../db/index.js');

// Middleware for handling auth 

async function adminMiddleware(req, res , next) {

    const username = req.header.Username;
    const password = req.header.Password;
 

    // if none of the admins exits the value will always be false
    // and result will be user doesnt exits........
    // until and unless admins signup thats why there is no admin 
    // middleware on the signup page 


    try {
        const value = await Admin.findOne({

            username: username,
            password: password

        })

        if(value){
            next();            
        }else{
            res.status(403).json({
                'msg' : `Admin doesn't exists`
            })
        }
        
    } catch (error) {
        res.status(500).json({
            msg : 'Internal server error'
        });
    }
}

module.exports = adminMiddleware;