const { Router } = require("express");
const router = Router();
const jwt = require('jsonwebtoken');
const userMiddleware = require("../middleware/user");
const { User , Course } = require("../db");
const { jwtSecret } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = await User.findOne({
            username
        });
        if (user) {
            res.json({
                msg: "User with this username already exists"
            })
        } else {
            await User.create({
                username: username,
                password: password
            })
            res.json({
                msg: "User created successfully"
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: "Server internal error"
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

    const user = await User.findOne({
        username : username,
        password : password
    });
    console.log(user);

    if(user){
        const token = jwt.sign({
            username : username
        } , jwtSecret)

        res.json({
            token : token
        })
    }else{
        res.json({
            msg : "Incorrect email and password"
        });
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
 
    const courses = await Course.find({});
    res.json({
        courses : courses
    });

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const username = req.username;
    const courseId = req.params.courseId;
try {
    await User.updateOne({
        username : username
    }, {
            "$push" : {
                purchasedCourse :courseId
            }
    })
    res.json({
        msg : "Course purchased"
    })
}catch(error){
    res.json({
        msg : "Internal Server error"
    })
}

    

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;

    const user = await User.findOne({
        username : username
    });

    if(user){

        const course = await Course.find({
            _id : {    
                "$in" : user.purchasedCourse
            }
        });
        res.json({
            course : course
        })

    }else {
        res.json({
            msg : "No purchased courses yet"
        })
    }


});

module.exports = router