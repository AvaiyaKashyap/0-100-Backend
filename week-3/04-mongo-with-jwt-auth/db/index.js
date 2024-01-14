const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Drishti_T:myLast_1@cluster0.8rxhfti.mongodb.net/course_selling_app2');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here

    username : String,
    password : String,
    
});

const UserSchema = new mongoose.Schema({
    // Schema definition here

    username : String,
    password : String,  
    purchasedCourse : [{
        type : mongoose.Schema.Types.ObjectId, // Id data type
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here

    title : String,
    description : String,
    price : Number,
    imageLink : String
    
});

const Admin = mongoose.model('Admin', AdminSchema);
const Course = mongoose.model('Course', CourseSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
    Admin,
    Course,
    User
}