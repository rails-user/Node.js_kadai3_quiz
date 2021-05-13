//controllerモジュールをアプリケーションに追加
const controller = require("../controllers/controller.js");
//expressモジュールをアプリケーションに追加
express = require("express")
//ルーティング処理のインスタンス生成
const router = express.Router()

router.get("/", (req, res) => {
    controller.getIndex(req, res);
})

router.get("/getQuiz", (req, res) => {

    controller.getQuiz(req, res);
})

module.exports = router