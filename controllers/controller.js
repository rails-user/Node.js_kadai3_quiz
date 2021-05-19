const httpStatus = require("http-status-codes");
//modelモジュールをアプリケーションに追加
const model = require("../models/model.js");

exports.getIndex = (req, res) => {
    res.render("../views/index.ejs");
}

exports.getQuiz = async (req, res) => {
    try {
        const results = await model.getQuiz();
        return res.json({
            status: httpStatus.OK,
            results,
        });
    } catch (err) {
        console.log(err);
    }
}
