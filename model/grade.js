const mongoose = require('mongoose');

const GradeSchema = mongoose.Schema({
    
    courseId: {
        type: mongoose.Schema.ObjectId,
        ref: 'course',
    },
    submission: {
        type: String
    },
    grade: {  
        type: Number,  
        required: true,  
        min: 0,  
        max: 100
    },
})

const grade = mongoose.model("grade", GradeSchema);
module.exports = grade;