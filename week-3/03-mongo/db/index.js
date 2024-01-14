const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Drishti_T:myLast_1@cluster0.8rxhfti.mongodb.net/course_selling_app');

const AdminSchema = new mongoose.Schema({

    username : String,
    password : String,
    FirstName : String,
    lastName : String,
    PhoneNumber : Number


});


const UserSchema = new mongoose.Schema({

username : String,
password : String,
FirstName : String,
lastName : String,
PhoneNumber : Number,
purchasedCourse : [{
    type : mongoose.Schema.Types.ObjectId, // Id data type
    ref : 'Course'

}]

});

const CourseSchema = new mongoose.Schema({

    title: String,
    description: String,
    price: Number


});

const Admin = mongoose.model('Admin', AdminSchema);

const User = mongoose.model('User', UserSchema);

const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}

