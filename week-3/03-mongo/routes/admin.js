const { Router } = require('express');
const adminMiddleware = require('../middleware/admin.js');
const { Admin } = require('../db/index.js')
const router = Router();


// Admin Routes
router.post('/signup', (req, res) => {

    //Implememnt admin signup logic 

    username = req.body.Username;
    password = req.body.Password;
    FirstName = req.body.firstname;
    lastName = req.body.LastName;
    PhoneNumber = req.body.Phonenumber;


    Admin.findOne({
        username
    }).then(result => {

        if (result) {
            res.json({
                msg: ' Admin already exists'
            })
        }
        else {

            Admin.create({
                username,
                password,
                FirstName,
                lastName,
                PhoneNumber
            }).then(result => {

                res.json({
                    msg: ' New admin created successfully'
                })

            }).catch(error => {

                res.status(500).json({
                    msg: ' Internal server error'
                });
            })

        }
    })
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


router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const allCourses = await Course.find({});
    res.json({
        allCourses : allCourses
    })


});

module.exports = router;
