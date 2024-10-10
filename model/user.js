const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: { 
        type: String, 
        enum: ['Admin', 'Teacher', 'Student'], 
        default: 'Student' 
    },
})

let userpanel = mongoose.model('user', UserSchema);
module.exports = userpanel;