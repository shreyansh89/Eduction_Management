const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    assignedTeacher: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
    },
    Created_date: {
        type: String,
        required: true
    },
    Updated_date: {
        type: String,
        required: true
    },
})

const course = mongoose.model("course", CourseSchema);
module.exports = course;