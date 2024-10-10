const Course = require('../model/course');
const Grade = require('../model/grade');


module.exports.assignGrade = async (req, res) => {
    try {
        if (req.body) {
            const userData = await Course.find(req.body.Course);
            if (userData) {
                const checkData = await Grade.findOne({ submission: req.body.submission });
                if (checkData) {
                    return res.status(200).json({ mes: "grade Data insert already", status: 1 })
                }
                else {
                    req.body.courseId = req.user._id;
                    const newgrade = await Grade.create(req.body);
                    if (newgrade) {
                        return res.status(200).json({ mes: "grade Data successfully insert", newgrade: newgrade, status: 1 })
                    }
                    else {
                        return res.status(200).json({ mes: "grade not found", status: 0 })
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


module.exports.viewGrades = async (req, res) => {
    try {
        const grades = await Grade.find();
        if (grades) {
            return res.status(200).json({ msg: "Here are all the grades", grades: grades, status: 1 });
        } else {
            return res.status(200).json({ msg: "No grades found", status: 0 });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: "Something went wrong", status: 0 });
    }
};