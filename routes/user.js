const express = require("express");

const passport = require('passport');

const routes = express.Router();

const usercontroller = require("../controller/usercontroller");


routes.post("/ragister", usercontroller.ragister);

routes.post("/login", usercontroller.login);

routes.get("/faillogin", async (req, res) => {
    return res.status(400).json({ msg: "User not login", status: 0 });
});



module.exports = routes;