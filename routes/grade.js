const express = require("express");

const Passport = require('passport');

const routes = express.Router();

const gradecontroller = require("../controller/gradecontroller");


routes.post("/assignGrade", Passport.authenticate("userverify", { failureRedirect: "/user/faillogin" }), gradecontroller.assignGrade);

routes.get("/viewGrades", Passport.authenticate("userverify", { failureRedirect: "/user/faillogin" }), gradecontroller.viewGrades);




module.exports = routes;