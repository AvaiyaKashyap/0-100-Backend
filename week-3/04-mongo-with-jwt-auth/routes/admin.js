const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index.js')
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config')
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic

    Username = req.body.username;
    Password = req.body.password

    //now check if this username already exists or not
    Admin.findOne({
        username: Username
    }).then(result => {
   console.log(result);
        if (result) {
            res.json({
                msg: 'Admin with this username already exists'
            });
        }
        else {
            Admin.create({
                username: Username,
                password: Password

            }).then(result => {

                res.json({
                    msg: 'New admin created'
                })
            }).catch(error => {
                res.status(500).json({
                    msg: 'Interval server error'
                })
            })
        }
    }
    )
});

router.post('/signin', async (req, res) => {
     // Implement admin signup logic
     Username = req.body.username;
     Password = req.body.password

     const admin = await Admin.findOne({
        username : Username,
        password : Password
     })
    //  console.log(`admin is ${admin}`);
     if(admin){
    
       const token = jwt.sign({
        username : Username
       }, jwtSecret);
       res.json({
        token : token
       })

     }else {
        res.status(411).json({
            msg: "Incorrect email and password"
        })
     }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const course = await Course.create({
        title : title,
        description : description,
        price : price,
        imageLink : imageLink

    })
    res.status(200).json({

        msg : "New course created",
        coursseId : course._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const allCourses = await Course.find({});
    res.json({
        allCourses : allCourses
    })
        
    

});

module.exports = router;