//Quizクラス
class Quiz {
    constructor(jsonObj) {
        this.quizChild = jsonObj.results;
        this.count = 0;
        this.index = 0;
    }
    //全クイズ数
	//getLength() {
    //    return this.quizChild.length;
    //}
    //カテゴリー
	getCategory(i) {
        return this.quizChild[i].category;
     }
    //クイズの形式がmultipleかtrue/falseかを格納
	getType(i) {
        return this.quizChild[i].type;
     }
    //難易度
    getDifficulty(i) {
        return this.quizChild[i].difficulty;
     }
    //問題
    getQuestion(i) {
        return this.quizChild[i].question;
    }
    //正解
    getCorrectAnswer(i) {
        return this.quizChild[i].correct_answer;
    }
    //間違い
    getIncorrectAnswer(i) {
        return this.quizChild[i].incorrect_answers;
    }
    //ボタンの値
    getButtonValue(i) {
        if ( this.quizChild[i].type === "multiple" ) {
            let buttonValue = this.quizChild[i].incorrect_answers;
            buttonValue.push(this.quizChild[i].correct_answer);
            //buttonValue = arrayShuffle(buttonValue);
            for (let i = buttonValue.length - 1; i >= 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [buttonValue[i], buttonValue[j]] = [buttonValue[j], buttonValue[i]];
            }
        }
        else if ( true/false )
        {
            let buttonValue = ['true','false'];
        
        }
        return buttonValue;
    }
    //正解数
    //getCount() {
    //    return this.count;
    //}
    //回答数を1追加
    //addCount() {
    //    return this.count++;
    //}
    //インデックス
    //getIndex() {
    //    return this.index;
    //}
    //インデックスを1追加
    //addIndex() {
    //    return this.index++;
    //}
}