//クイズのインデックス
let i = 0;
//正解のカウント変数
let count = 0;

//modelモジュールをアプリケーションに追加
const model = require("../models/model.js");

exports.getIndex = (req, res) => {
    res.render("../views/index.ejs");
}

exports.getQuiz = (req, res) => {

    //クイズデータの取得
    if (i === 0){
        //APIよりデータ取得
        const response = model.getQuizData();
        console.log(response);
        //const jsonObj = response.json;
        //const quiz = new Quiz(response); 
        ///renderQuiz(quiz);
    }
    //クイズの答え合わせ
    else if (i > 0)
{
///    if(req.body.btn.value =  quiz.getCorrectAnswer(i)){
///        count++;
///    }
    }

    //次画面の描画
    if(10 > i){
        ///renderQuiz(quiz);
        i++;
    }
    //クイズ完了画面
    else
    {
        res.render("../views/end.ejs", {
            count: count
        });
    }
}

//クイズ画面の描画関数
renderQuiz = (quiz) => {
    res.render("../views/quiz.ejs", {
        quizNumber: quiz.getIndex + 1,
        category: quiz.getCategory(quiz.getIndex),
        difficulty: quiz.getDifficulty(quiz.getIndex),
        question: quiz.getQuestion(quiz.getIndex),
        buttonValue: quiz.getButtonValue(quiz.getIndex)
    });
}
