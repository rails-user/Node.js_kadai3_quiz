const httpStatus = require("http-status-codes");
//controllerモジュールをアプリケーションに追加
const controller = require("../controllers/controller.js");
//expressモジュールをアプリケーションに追加
express = require("express")
//ルーティング処理のインスタンス生成
const router = express.Router()

router.get("/", (req, res) => {
    controller.getIndex(req, res);
})

router.get('/getQuiz', (req, res) => {
        try {
            const results = controller.getQuiz(req, res);
            return results;
        } catch (err) {
              console.log(err);
        }      
})

module.exports = router