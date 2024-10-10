const course = require("../model/course");
const User = require('../model/user');

module.exports.add_course = async (req, res) => {
    try {
        if (req.body) {
            const userData = await User.findById(req.user._id);
            if (userData) {
                const checkData = await course.findOne({ title: req.body.title });
                if (checkData) {
                    return res.status(200).json({ mes: "course Data insert already", status: 1 })
                }
                else {
                    req.body.assignedTeacher = userData.id;
                    req.body.Created_date = new Date().toLocaleDateString();
                    req.body.Updated_date = new Date().toLocaleString();
                    const newcourse = await course.create(req.body);
                    if (newcourse) {
                        return res.status(200).json({ mes: "course Data successfully insert", newcourse: newcourse, status: 1 })
                    }
                    else {
                        return res.status(200).json({ mes: "course not found", status: 0 })
                    }

                }
            }
            else {
                return res.status(200).json({ mes: "User not found", status: 0 })
            }
        }
        else {
            return res.status(200).json({ mes: "invliad Data", status: 0 })
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ mes: "something worng", status: 0 })
    }
}

module.exports.viewcourse = async (req, res) => {
    try {
        const viewData = await course.find({ assignedTeacher: req.user._id })
        if (viewData != "") {
            return res.status(200).json({
                msg: "Here is all course data", viewData: viewData, status: 1
            });
        } else {
            return res.status(200).json({ msg: "No course found", status: 0 });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ mes: "something worng", status: 0 })
    }
}

module.exports.deletecourse = async (req, res) => {
    try {
        let deletedata = await course.findByIdAndDelete(req.params.id, req.body)
        if (deletedata) {
            return res.status(200).json({ mes: "Delete record sucessfully", deletedata: deletedata, status: 1 });
        }
        else {
            return res.status(200).json({ mes: "invliad Data", status: 0 });

        }
    } catch (error) {
        console.log(error);
        return req.status(400).json({ mes: "something worng", status: 0 })
    }
}

module.exports.editcourse = async (req, res) => {
    try {
        let editdata = await course.findByIdAndUpdate(req.params.id, req.body)
        if (editdata) {
            return res.status(200).json({ mes: "Edit record sucessfully", editdata: editdata, status: 1 });
        }
        else {
            return res.status(200).json({ mes: "invliad Data", status: 0 });

        }
    } catch (error) {
        console.log(error);
        return req.status(400).json({ mes: "something worng", status: 0 })
    }
}