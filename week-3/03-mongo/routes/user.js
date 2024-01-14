const { Router } = require('express');
const userMiddleware = require('../middleware/user.js')
const { User, Course } = require('../db/index.js');
const router = Router();


// also signup doesnt need to check the user in the database

router.post('/signup', async (req, res) => {

    username = req.body.Username;
    password = req.body.Password;
    FirstName = req.body.firstname;
    lastName = req.body.LastName;
    PhoneNumber = req.body.Phonenumber;
    // use input validation library after receving inputs and before forwarding them
    // ex:- zod

    try {
        const result = await User.findOne({ username })

        if (result) {
            res.json({
                msg: "User already exists"
            });
        } else {
            await User.create({
                username,
                password,
                FirstName,
                lastName,
                PhoneNumber,

            });
            res.json({
                msg: " User created successfully"
            });
        }

    } catch (error) {

        res.status(500).json({
            msg: "Internal server error"
        });
    }
});




// without even signup a user can look at the courses
// no middleware needed

router.get('/courses', async (req, res) => {


    // //logic to search all courses 
    // //if our course is published or not
    try {
        const response = await Course.find({})
        res.send({
            courses: response
        })
    } catch (error) {

        res.send({
            msg: "Internal Server error"
        });
    }
// res.send("hello")

});



router.post('/courses/:courseId', userMiddleware, async (req, res) => {

    //Implement the course purchase course logic
    const courseid = req.params.courseId;
    const Username = req.headers.username;
try {
    await User.updateOne({

        // find this user with this username
        username : Username
    },  {

        // upadate the purchased course
        "$push" : {
           purchasedCourse : courseid
        }
    })
    res.json({
        msg : "Purchase Completed"
    })
} catch(error){
    res.json({
        msg : error
    })
}
});



router.get('/purchasedCourses', userMiddleware, async (req, res) => {

    // to get all the courses of a user ( for ex:- at there user  dashboard)

    const username  = req.headers.username;

try {

    const user = await User.findOne({ username : username})
    console.log(user)

    const course = await Course.find({
        _id : {

            "$in" : user.purchasedCourse
        }
    });
    

    res.json({
        courses : course
    })
}catch(error){
    res.status(500).json({
        msg : "error"
    });
}

});

module.exports = router;



