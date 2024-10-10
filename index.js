const express = require('express');

const port = 8000;

const path = require('path');

const passport = require('passport')

const session = require('express-session');

const db = require('./config/mongoose');
const jwt = require('./config/passport-jwt-stratergy');

const app = express();

app.use(
    session({
        name: "jwt",
        secret: "jwt",
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 100,
        },
    })  
)

app.use(passport.initialize());
app.use(passport.session())

app.use(express.urlencoded())

app.use('/user', require('./routes/user'));
app.use('/course', require('./routes/course'));
app.use('/grade', require('./routes/grade'));


app.listen(port, (e) => {
   if(e){
        console.log("server is not running");
        return false;
   }
   console.log("server is running in "+ port);
})